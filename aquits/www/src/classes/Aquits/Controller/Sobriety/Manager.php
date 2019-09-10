<?php

namespace Aquits\Controller\Sobriety;


class Manager extends \Aquits\Templates\General{

    public function addNew(array $data){

        $month = $this->getData($data,'month',null);
        if(is_null($month) || (!filter_var(strlen($month),FILTER_VALIDATE_INT,[
            'min_range' => 3,
            'max_range' => 10
        ]))){
            return $this->reply('Title has to be a minimum of 5 character and a maximum of 150 characters',false);
        }

        $day = (int) $this->getData($data,'day',null);

        $year = (int) $this->getData($data,'year',null);

        $stmt = $this->getDatabase()->prepare("INSERT into sobriety (Month, Day ,Year) VALUES ('{$month}' , {$day}, {$year}) ");

         if(!$stmt){
            return $this->reply('An error occuied.' ,false,[
                'type' => 'Server',
                'error' => $db->error

            ]);
        }

        $execute = $stmt->execute();
        if(!$execute){
            return $this->reply('An error just occuied...', false,[
                'type' => 'Server Error', 
            ]);

        }
        return $this->reply('Sucessful...', true);
    }
}