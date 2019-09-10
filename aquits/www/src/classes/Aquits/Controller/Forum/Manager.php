<?php

namespace Aquits\Controller\Forum;


class Manager extends \Aquits\Templates\General{


    public function addNew(array $data){
        $title = $this->getData($data,'title',null);
        if(is_null($title) || (!filter_var(strlen($title),FILTER_SANITIZE_STRING))){
            return $this->reply('Please put valid characters...',false);
        }

        $content = $this->getData($data,'content',null);
        if(is_null($content) || (!filter_var(strlen($content),FILTER_SANITIZE_STRING))){
            return $this->reply('Please type your post again... ',false);
        }

        $comment = $this->getData($data,'comment');

       /* $view_category = $this->getData($data, 'view_category' ,null);
        if(is_null($view_category) || (!filter_var(strlen($view_category), FILTER_VALIDATE_INT,[
            'min_range' => 3,
            'max_range' => 15
        ]))){
            return $this->reply('Please SELECT ONE... ',false);
        }*/
        $stmt = $this->getDatabase()->prepare("INSERT into community (Title, Contents, Comment) VALUES (?, ?, ? )");
        if(!$stmt){
            return $this->reply('An error occured.' ,false,[
                'type' => 'Server',
            ]);
        }
        $bind = $stmt->bind_param('sss', $title, $content, $comment );
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

     public function getForum1($searchData = []){
        $db = $this->getDatabase();
        $stmt = $db->prepare('select forum.Id as id, forum.Title as title, forum.Contents as content from community as forum ORDER BY Id');    
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