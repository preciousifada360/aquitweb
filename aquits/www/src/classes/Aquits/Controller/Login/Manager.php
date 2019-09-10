<?php

namespace Aquits\Controller\Login;


class Manager extends \Aquits\Controller\Manager{
    protected $selectVars = 'user.Id as id,user.Email as email,user.Username as name,user.DateOfBirth as dateOfBirth,user.Age as age,user.IsTrial as isTrial,user.IsActive as isActive,user.IsBlocked as isBlocked,user.IsVerified as isVerified,user.IsDeactivated as isDeactivated,user.ExpiryDate as expiryDate,user.DateOfRegistration';

    public function process(array $data = []){
        $type = $this->getData($data,'type');
        $id = (string) $this->getData($data,'id','');
        $email = (string) $this->getData($data,'user-->email','');
        $password = $this->getController()->getControl('account')->hash_password((string) $this->getData($data,'user-->password',''));

        switch($type){
            case 'id':
                return $this->processUsingId($id);
            break;

            case 'userData':
                return $this->processUsingUserData($email,$password);
            break;

            default:
                return $this->reply('Invalid data');
            break;
        }
    }

    public function processUsingId(string $id){
        return $this->processResult($query = "select {$this->selectVars} from users as user where user.id = ? limit 1",'s',$id);
    }

    public function processUsingUserData(string $email , string $password){
        return $this->processResult($query = "select {$this->selectVars} from users as user where user.Email = ? and user.Password = ? limit 1",'ss',$email,$password);
    }

    private function processResult(string $query,...$data){
        $db = $this->getDatabase();
        $stmt = $db->prepare($query);
        if(!$stmt){
            return $this->reply('An error occured',false,[
                'error' => $db->error
            ]);
        }
        
        foreach($data as &$item){
            $item = &$item;
        }

        $bind = call_user_func_array([
            $stmt,
            'bind_param'
        ],$data);

        if(!$bind){
            return $this->reply('An error occured.',false,[
                'error' => $db->error
            ]);
        }

        $execute = $stmt->execute();
        if(!$execute){
            return $this->reply('An error occured.',false,[
                'error' => $db->error
            ]);
        } 

        $result = $stmt->get_result();
        if($result->num_rows === 1){
            $data = $result->fetch_assoc();
            $this->getSession()->set('logged-->user',$data);

            $stmt->free_result();
            $stmt->close();

            return $this->reply('User Logged Succesfully',true,[
                'data' => $data
            ]);
        }

        $stmt->close();
        return $this->reply('User does not exist',false,[
                'error' => $db->error
            ]);
    }
}
