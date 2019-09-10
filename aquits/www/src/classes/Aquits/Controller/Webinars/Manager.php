<?php

namespace Aquits\Controller\Webinars;


class Manager extends \Aquits\Templates\General{

    public function addNew(array $data){
        $title = $this->getData($data,'title',null);
        if(is_null($title) || (!filter_var(strlen($title),FILTER_VALIDATE_INT,[
            'min_range' => 3,
            'max_range' => 255
        ]))){
            return $this->reply('Title has to be a minimum of 5 character and a maximum of 150 characters',false);
        }

        $tm = $this->getData($data,'tm',null);
        if(is_null($tm) || (!filter_var(strlen($tm))))
        {
            return $this->reply('time must be inputed',false);
        }

        $text = $this->getData($data,'text',null);
        if(is_null($text) || (!filter_var(strlen($text),FILTER_VALIDATE_INT,[
            'min_range' => 10,
            'max_range' => 700
        ]))){
            return $this->reply('Text has to be a minimum of 10 character and a maximum of 150 characters',false);
        }


        
        $editor = $this->getData($data,'editor',null);
        if(is_null($editor) || (!filter_var(strlen($editor),FILTER_VALIDATE_INT,[
            'min_range' => 10,
            'max_range' => 700
        ]))){
            return $this->reply('Text has to be a minimum of 10 character and a maximum of 150 characters',false);
        }

        $files = $_FILES; 
        $tmp_name = $this->getData($files,'vid-->tmp_name',null);
        $error = $this->getData($files,'vid-->error',1);
        if($error !== UPLOAD_ERR_OK){
            return $this->reply('An error occured while uploading icon',false,[
                'type' => 'file'
            ]);
        }
        if(fileSize($tmp_name) > 50000000){
            return $this->reply('video should be less than 50mb',false,[
                'type' => 'file'
            ]);
        }
        \clearstatcache(true);
        $dir = $this->getContainer()->get('documentRoot').'/public/assets/uploads';
        $fileName = \Aquits\General\Utils::random(40);
        $vidPath = $dir.'/'.$fileName;
        while(file_exists($vidPath)){
            $fileName = \Aquits\General\Utils::random(40);
            $vidPath = $dir.'/'.$fileName;
        }
        $source = fopen($tmp_name,'rb');
        $dest =  fopen($vidPath,'wb');
        stream_copy_to_stream($source,$dest);
        unlink($tmp_name);
        chmod($vidPath,0666);
       $db = $this->getDatabase();
        $stmt = $db->prepare("INSERT into webinars (Title, InputTime, Note, Content, Video) VALUES (?, '{$tm}', ?, ?, '{$vidPath}')");
        if(!$stmt){
            return $this->reply('An error occuied.i' ,false,[
                'type' => 'Server',
                'error' => $db->error

            ]);
        }
        $bind = $stmt->bind_param('sss', $title, $text, $editor,);
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



    public function getWeb($searchData = []){
        $db = $this->getDatabase();
        $stmt = $db->prepare('select web.Id as id, web.Title as title, web.InputTime as time, web.Note as note, web.Content as content , web.Video as video from webinars as web where id > 0 order by web.id asc');
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
        $data = [];
        while ($row = $result->fetch_array(MYSQLI_ASSOC)){
            $video = $this->getData($row,'video');
            $this->setData($row,'video','');

            if($video){
                $paths = explode('/assets/',$video,2);
                if(count($paths) === 2){
                    $video = '/assets/'.$paths[1];
                    $this->setData($row,'video',$video);
                }
            }

            $data[] = $row;
        }

        $stmt->free_result();
        $stmt->close();
        return $data;
    }

}