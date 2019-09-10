<?php

namespace Aquits\Controller\Coach;


class Manager extends \Aquits\Templates\General{

    public function addNew(array $data){
        $coach= $this->getData($data,'coach',null);
        if(is_null($coach) || (!filter_var(strlen($coach))))
        {
            return $this->reply('coach is empty',false);
        }
        $db = $this->getDatabase();
        $stmt = $db->prepare ("INSERT into coach (Coach) VALUES ('{$coach}') ");
        if(!$stmt){
            return $this->reply('An error occuied.' ,false,[
                'type' => 'Server',
                'error' => $db->error
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