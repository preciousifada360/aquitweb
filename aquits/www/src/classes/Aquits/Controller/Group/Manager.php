<?php

namespace Aquits\Controller\Group;


class Manager extends \Aquits\Templates\General{

    public function addNew(array $data){
        $dayOfTheWeek = $this->getData($data,'dayOfTheWeek',null);
        if(is_null($dayOfTheWeek) || (!filter_var(strlen($dayOfTheWeek))))
        {
            return $this->reply('Day of the week cannot be empty',false);
        }

        $time = $this->getData($data,'time',null);;
        if(is_null($time) || (!filter_var(strlen($time))))
        {
            return $this->reply('Time must be inputed',false);
        }

        $status= $this->getData($data,'status',null);;
        if(is_null($status) || (!filter_var(strlen($status))))
        {
            return $this->reply('Status is empty',false);
        }
        
        $spotLeft= $this->getData($data,'spotLeft',null);;
        if(is_null($spotLeft) || (!filter_var(strlen($spotLeft))))
        {
            return $this->reply('Status is empty',false);
        }

        $name = $this->getData($data,'aname',null);;
        if(is_null($name) || (!filter_var(strlen($name))))
        {
            return $this->reply('Please type a name',false);
        }


        $db = $this->getDatabase();
        $stmt = $db->prepare ("INSERT into `category` (DayOfTheWeek, `Time`, `Status`, SpotLeft, `Name`) VALUES ('$dayOfTheWeek', '$time', '$status', '$spotLeft', ?) ");
        if(!$stmt){
            return $this->reply('An error occuied.' ,false,[
                'type' => 'Server',
                'error' => $db->error
            ]);
        }

        $bind = $stmt->bind_param('s' ,$name);
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

        if(!$stmt->insert_id){
            return $this->reply('An error just occuied.....', false,[
                'type' => 'Server Error'
            ]);
        }

        return $this->reply('Sucessful...', true);
    }

    public function getGroupz($searchData = []){
        $db = $this->getDatabase();
        $stmt = $db->prepare('select lot.Id as id, lot.DayOfTheWeek as dayOfTheWeek, lot.Time as time, lot.Status as status, lot.SpotLeft as spotLeft, lot.Name as name from category as lot where Id > 0 order by lot.Id asc');	
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