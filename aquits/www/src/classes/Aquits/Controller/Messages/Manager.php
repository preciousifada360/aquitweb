<?php

namespace Aquits\Controller\Messages;


class Manager extends \Aquits\Templates\General{


    public function addNew(array $data){
        $MessageBody = $this->getData($data,'MessageBody',null);
        if(is_null($MessageBody) || (!filter_var(strlen($MessageBody),FILTER_SANITIZE_STRING))){
            return $this->reply('Please put valid characters...',false);
        }

        $stmt = $this->getDatabase()->prepare("INSERT into message (MessageBody ) VALUES (?)");
        if(!$stmt){
            return $this->reply('An error occured.' ,false,[
                'type' => 'Server',
            ]);
        }
        $bind = $stmt->bind_param('s', $MessageBody );
        if(!$bind){
            return $this->reply('An error just occured..' , false,[
                'type' => 'Error'
            ]);
        }

        $execute = $stmt->execute();
        if(!$execute){
            return $this->reply('An error just occuied...', false,[
                'type' => 'Server Error', 
                'error' => $this->getDatabase()->error
            ]);

        }
        return $this->reply('Sucessful...', true);


    }
}