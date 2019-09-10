<?php

namespace Aquits\Controller\Metrics;

class Manager extends \Aquits\Templates\General{


    public function addNew(array $data){
        $range0 = $this->getData($data,'range',null);
        if(is_null($range0) || (!filter_var(strlen($range0),FILTER_SANITIZE_STRING))){
            return $this->reply('Please put valid characters...',false);
        }
        $range1 = $this->getData($data,'range1',null);
        if(is_null($range1) || (!filter_var(strlen($range1),FILTER_SANITIZE_STRING))){
            return $this->reply('Please put valid characters...',false);
        }
        $range2= $this->getData($data,'range2',null);
        if(is_null($range2) || (!filter_var(strlen($range2),FILTER_SANITIZE_STRING))){
            return $this->reply('Please put valid characters...',false);
        }
        $range3 = $this->getData($data,'range3',null);
        if(is_null($range3) || (!filter_var(strlen($range3),FILTER_SANITIZE_STRING))){
            return $this->reply('Please put valid characters...',false);
        }
        $range4 = $this->getData($data,'range4',null);
        if(is_null($range4) || (!filter_var(strlen($range4),FILTER_SANITIZE_STRING))){
            return $this->reply('Please put valid characters...',false);
        }
        $range5 = $this->getData($data,'range5',null);
        if(is_null($range5) || (!filter_var(strlen($range5),FILTER_SANITIZE_STRING))){
            return $this->reply('Please put valid characters...',false);
        }
        $range6 = $this->getData($data,'range6',null);
        if(is_null($range6) || (!filter_var(strlen($range6),FILTER_SANITIZE_STRING))){
            return $this->reply('Please put valid characters...',false);
        }
        $range7 = $this->getData($data,'range7',null);
        if(is_null($range7) || (!filter_var(strlen($range7),FILTER_SANITIZE_STRING))){
            return $this->reply('Please put valid characters...',false);
        }
        $range8 = $this->getData($data,'range8',null);
        if(is_null($range8) || (!filter_var(strlen($range8),FILTER_SANITIZE_STRING))){
            return $this->reply('Please put valid characters...',false);
        }
        $sum = (int) $range0 + $range1 + $range2 + $range3 + $range4 + $range5 + $range6 + $range7 + $range8;
        $nine = 9;
        $score = $sum / $nine;

        $stmt = $this->getDatabase()->prepare("INSERT into metrics (Score, Range0, Range1, Range2, Range3, Range4, Range5, Range6, Range7, Range8 ) VALUES ({$score}, ?, ?, ?, ?, ?, ?, ?, ?, ? )");

        if(!$stmt){
            return $this->reply('An error occured.' ,false,[
                'type' => 'Server',
            ]);
        }
        $bind = $stmt->bind_param('sssssssss' ,$range0, $range1, $range2, $range3, $range4, $range5, $range6, $range7, $range8);
        if(!$bind){
            return $this->reply('An error just occuied..' , false,[
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

     public function getMetx($searchData = []){
        $db = $this->getDatabase();
        $stmt = $db->prepare('select met.Id as id, met.Score as score, met.Range0 as range0, met.Range1 as range1, met.Range2 as range2 , met.Range3 as range3 , met.Range4 as range4 , met.Range5 as range5, met.Range6 as range6 , met.Range7 as range7 , met.Range8 as range8 from metrics as met ORDER BY Id Desc limit 1');    
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