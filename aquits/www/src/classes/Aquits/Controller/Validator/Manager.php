<?php

namespace Aquits\Controller\Validator;

class Manager extends \Aquits\Controller\Manager{
    public function checkEmail(array $data){
        $email = $this->getData($data,'email',null);
        if(!(!is_null($email) && (filter_var($email,FILTER_VALIDATE_EMAIL)))){
            return [
                'status' => 'error',
                'response' => 'Invalid email'
            ];
        }

        $conn = $this->getDatabase();
        $stmt = $conn->prepare('select 1 from users where Email = ?');

        if($stmt === false){
            return $this->reply('Ooops... fatal error occured',false);
        }

        $bind = $stmt->bind_param('s',$email);

        if($bind === false){
            return $this->reply('Ooops... fatal error occured.',false);
        }

        $execute = $stmt->execute();

        if($bind === false){
            return $this->reply('Ooops... fatal error occured..',false);
        }

        $result = $stmt->get_result();
        if($result->num_rows === 1){
            return $this->reply('Ooops... email address already exists',false);
        }else{
            return $this->reply('Email is valid',true);
        }
    }
}