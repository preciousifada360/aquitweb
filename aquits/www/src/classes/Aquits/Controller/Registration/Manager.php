<?php

namespace Aquits\Controller\Registration;

class Manager extends \Aquits\Controller\Manager{
    public function process(string $type,array &$data){

        $resp = $this->sanitizeData($data);
        if(!$this->isOk($resp)){
            return $resp;
        }

        $data = $this->getData($resp,'data');
        $this->setData($data,'isTrial',1);
        $this->setData($data,'isActive',0);
        $this->setData($data,'expiryDate',null);
        $this->setData($data,'registrationAccountType',$type);

        switch($type){
            case 'ally':
                $this->setData($data,'isTrial',0);
                $this->setData($data,'isActive',1);
            break;

            case 'trial':
                $expiryDate = new \MomentPHP\MomentPHP(strtotime('+ 1 week'));
                $expiryDate = $expiryDate->format('Y-m-d H:i:s');
                $this->setData($data,'expiryDate',$expiryDate);
            break;

            case 'monthly':
                $expiryDate = new \MomentPHP\MomentPHP(strtotime('+ 1 month'));
                $expiryDate = $expiryDate->format('Y-m-d H:i:s');
                $this->setData($data,'expiryDate',$expiryDate);
            break;

            case 'annually':
                $expiryDate = new \MomentPHP\MomentPHP(strtotime('+ 1 year'));
                $expiryDate = $expiryDate->format('Y-m-d H:i:s');
                $this->setData($data,'expiryDate',$expiryDate);
            break;
        }

        $db = $this->getDatabase();
        $db->begin_transaction();
        $resp = $this->saveUserData($data);
        
        if($this->isOk($resp)){
            $userId = $this->getData($resp,'userId');
            $name = $this->getData($data,'name');
            $email = $this->getData($data,'email');

            //send mail
            $resp = $this->getControl('mailer')->getControl('registration')->sendNew([
                'name' => $name,
                'email' => $email,
                'userId' => $userId
            ]);
            
            if($this->isOk($resp)){
                $this->setData($resp,'response','User Registered succesfully');
                $db->commit();
            }
        }

        if(!$this->isOk($resp)){
            $db->rollback();
        }

        return $resp;
    }

    public function saveUserData(&$data){
        $dbTableName = [
            'name' => 'Username',
            'email' => 'Email',
            'password' => 'Password',
            'dob' => 'DateOfBirth',
            'age' => 'Age',
            'isTrial' => 'IsTrial',
            'isActive' => 'IsActive',
            'expiryDate' => 'ExpiryDate',
            'registrationAccountType' => 'RegistrationAccountType'
        ];

        $tablePartQuery = '';
        $valuePartQuery = '';
        $valuesType = '';
        $valuesArray = [];

        foreach($data as $key => &$value){
            if(!is_null($value)){
                $varType = '';

                switch(true){
                    case (isset(array_flip([
                        'name',
                        'email',
                        'password',
                        'dob',
                        'expiryDate',
                        'registrationAccountType'
                    ])[$key])):
                        $varType = 's';
                    break;

                    case (isset(array_flip([
                        'age',
                        'isTrial',
                        'isActive'
                    ])[$key])):
                        $varType .= 'i';
                    break;
                }

                if($varType){
                    $prepend = ($tablePartQuery ? ',' : '');
                    $tablePartQuery .= $prepend.$dbTableName[$key];
                    $valuePartQuery .= $prepend.'?';
                    $valuesType .= $varType;
                    $valuesArray[] = &$value;
                }
            }
        }

        $insertQuery = "insert into users ({$tablePartQuery}) values ({$valuePartQuery})";

        $db = $this->getDatabase();
        $stmt = $db->prepare($insertQuery);
        if($stmt === false){
            return $this->reply('Ooops a server error occured',false,[
                'error' => $db->error
            ]);
        }

        array_unshift($valuesArray,$valuesType);
        $bind = call_user_func_array([
            $stmt,
            'bind_param'
        ],$valuesArray);

        if($bind === false){
            $stmt->close();
            return $this->reply('Ooops a server error occured.');
        }

        $execute = $stmt->execute();
        if($execute === false){
            $stmt->close();
            return $this->reply('Ooops a server error occured..');
        }

        $userId = $stmt->insert_id;
        $stmt->close();

        $stmt = $db->prepare('insert into activities (UserId,ActivityName) values (?,?)');
        $activityName = 'create_account';
        if($stmt === false){
            $db->rollback();
            return $this->reply('Ooops a server error occured while logging data');
        }

        $bind = call_user_func_array([
            $stmt,
            'bind_param'
        ],[
            'is',
            &$userId,
            &$activityName
        ]);

        if($bind === false){
            $db->rollback();
            $stmt->close();
            return $this->reply('Ooops a server error occured while logging data.');
        }

        $execute = $stmt->execute();
        if($execute === false){
            $stmt->close();
            return $this->reply('Ooops a server error occured while logging data..');
        }

        $stmt->close();

        return $this->reply('Data Saved Succesfully',true,[
            'userId' => $userId
        ]);
    }

    public function sanitizeData(array &$data){
        $username = $this->getData($data,'username',null);
        if(!(!is_null($username) && filter_var(strlen($username),FILTER_VALIDATE_INT,[
            'min_range' => 3,
            'max_range' => 255
        ]))){
            return $this->reply('Invalid name... Please name should be more than 3 characters and less than 255 characters');
        }else{
            $username = filter_var($username,FILTER_SANITIZE_STRING);
        }

        $email = $this->getData($data,'email',null);
        if(!(!is_null($email) && filter_var($email,FILTER_VALIDATE_EMAIL))){
            return $this->reply('Invalid email... Please enter a valid email');
        }else{
            $email = filter_var($email,FILTER_SANITIZE_EMAIL);
            $conn = $this->getDatabase();
            $stmt = $conn->prepare('select 1 from users where Email = ?');

            if($stmt === false){
                return $this->reply('Ooops... fatal error occured while validating email');
            }

            $bind = $stmt->bind_param('s',$email);
            if($bind === false){
                return $this->reply('Ooops... fatal error occured while validating email.');
            }

            $execute = $stmt->execute();
            if($bind === false){
                return $this->reply('Ooops... fatal error occured while validating email..');
            }

            $result = $stmt->get_result();
            if($result->num_rows === 1){
                return $this->reply('Ooops... email address already exists');
            }
        }

        $password = $this->getData($data,'password',null);
        if(is_null($password)){
            return $this->reply('Please a password is required');
        }

        $cpassword = $this->getData($data,'password_confirmation',null);
        if(!(!is_null($cpassword) && hash_equals($cpassword,$password))){
            return $this->reply('Please password does not match');
        }else{
            $password = $this->getController()->getControl('account')->hash_password($password);
        }

        $date = $this->getData($data,'date',null);
        $age;
        if(!(!is_null($date) && ($strDate = strtotime($date)))){
            return $this->reply('Invalid date of birth... Please insert a valid date');
        }else{
            $format = 'Y-m-d';
            $date = new \MomentPHP\MomentPHP;
            $age = $date->diff(new \MomentPHP\MomentPHP($strDate),'years');
            $date = $date->format($format);
        }

        return $this->reply('validated succesfully',true,[
            'data' => [
                'name' => $username,
                'email' => $email,
                'password' => $password,
                'dob' => $date,
                'age' => $age
            ]
        ]);
    }

    public function getUser($searchData = []){
        $db = $this->getDatabase();
        $stmt = $db->prepare('select user.Id as id, user.Username as username, user.Email as email, user.Password as password, user.Type as type, user.RegistrationAccountType as registrationAccountType, user.DateOfBirth as dateOfBirth, user.Age as age, user.IsTrial as isTrial, user.IsActive as isActive, user.IsBlocked as isBlocked, user.IsVerified as isVerified, user.IsDeactivated as isDeactivated, user.ExpiryDate as expiryDate, user.DateofRegistration as dateofRegistration from users as user ');    
        if(!$stmt){
            return $this->reply('An error just occuied..', false,[
                'type' => 'Server Error.',
                'error' => $db->error
            ]);
        }
        $execute = $stmt->execute();
        if(!$execute){
            return $this->reply('An error just occuied...', false,[
                'type' => 'Server Error..',
                'error' => $db->error
            ]);
        }
        $result = $stmt->get_result();
        if($result->num_rows){
            $data = [];
            while($row = $result->fetch_assoc()){
                $data[] =$row;
            }

        }
        $stmt->free_result();
        $stmt->close();
        return $data;
    }

}