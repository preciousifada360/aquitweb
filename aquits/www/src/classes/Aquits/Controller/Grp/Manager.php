<?php

namespace Aquits\Controller\Grp;


class Manager extends \Aquits\Templates\General{

    public function addNew(array $data){
        $grp= $this->getData($data,'grp',null);
        if(is_null($grp) || (!filter_var(strlen($grp))))
        {
            return $this->reply('grp is empty',false);
        }

        $db = $this->getDatabase();
        $stmt = $db->prepare ("INSERT into grp (Grp) VALUES ('{$grp}') ");
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