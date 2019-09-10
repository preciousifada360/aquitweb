<?php

namespace Aquits\Controller\Ally;


class Manager extends \Aquits\Templates\General{

    public function addNew(array $data){
        $name= $this->getData($data,'name',null);
        if(is_null($name) || (!filter_var(strlen($name))))
        {
            return $this->reply('name is empty',false);
        }

        $email= $this->getData($data,'email',null);
        if(is_null($email) || (!filter_var(strlen($email))))
        {
            return $this->reply('name is empty',false);
        }
       

        $relate = $this->getData($data,'relate',null);
        if(is_null($relate) || (!filter_var(strlen($relate))))
        {
            return $this->reply('Enter your relate',false);
        }


        $db = $this->getDatabase();
        $stmt = $db->prepare ("INSERT into ally (Name, Email, Relationship) VALUES (?, ?, ?) ");
        if(!$stmt){
            return $this->reply('An error occuied.' ,false,[
                'type' => 'Server',
                'error' => $db->error
            ]);
        }

        $bind = $stmt->bind_param('sss' ,$name, $email, $relate);
        if(!$bind){
            return $this->reply('An error just occuied..' , false,[
                'type' => 'Error'
            ]);
        }

        $execute = $stmt->execute();
        if(!$execute){
            return $this->reply('An error just occuied...', false,[
                'type' => 'Server Error'
            ]);

        }

        return $this->reply('Sucessful...', true);
    }
}