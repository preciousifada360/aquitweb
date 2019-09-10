<?php

namespace Aquits\Controller\Training\Lesson\Less;


class Manager extends \Aquits\Templates\General{
    public function addNew(array $data){
        $content = $this->getData($data,'content',null);
        if(is_null($content) || (!filter_var(strlen($content),FILTER_SANITIZE_STRING))){
            return $this->reply('Please put valid characters...',false);
        }


        $stmt = $this->getDatabase()->prepare("INSERT into lessoncontent (Content) VALUES (?)");
        if(!$stmt){
            return $this->reply('An error occured.' ,false,[
                'type' => 'Server',
            ]);
        }

        $bind = $stmt->bind_param('s', $content);
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

	public function getLess($searchData = []){
        $db = $this->getDatabase();
        $stmt = $db->prepare('select les.Id as id, les.Content as content from lessoncontent as les ORDER BY Id Desc');    
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