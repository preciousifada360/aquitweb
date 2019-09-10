<?php

namespace Aquits\Controller\Training;


class Manager extends \Aquits\Templates\General{

    public function addNew(array $data){
        $title = $this->getData($data,'title',null);
        if(is_null($title) || (!filter_var(strlen($title),FILTER_VALIDATE_INT,[
            'min_range' => 3,
            'max_range' => 255
        ]))){
            return $this->reply('Title has to be a minimum of 5 character and a maximum of 150 characters',false);
        }

        $weekNo = (int) $this->getData($data,'weekNo',null);
        if(!(preg_match("/^(?:[1-9]|[1-9]|10|11|12)$/",$weekNo))){
            return $this->reply('Sorry you must enter a number greater than 0 and less than 12',false,[
                'type' => 'weekNo'
            ]);
        }

        $files = $_FILES;
        $tmp_name = $this->getData($files,'file-->tmp_name',null);
        $error = $this->getData($files,'file-->error',1);
        if(!is_string($tmp_name)){
            return $this->reply('Please an icon is required',false,[
                'type' => 'file'
            ]);
        }

        if($error !== UPLOAD_ERR_OK){
            return $this->reply('An error occured while uploading icon',false,[
                'type' => 'file',
                'error' => $error
            ]);
        }

        if(fileSize($tmp_name) > 500000){
            return $this->reply('Icon should be less than 50kb',false,[
                'type' => 'file'
            ]);
        }
        \clearstatcache(true);

        $dir = $this->getContainer()->get('documentRoot').'/public/assets/uploads';

        $fileName = \Aquits\General\Utils::random(40);
        $path = $dir.'/'.$fileName;

        while(file_exists($path)){
            $fileName = \Aquits\General\Utils::random(40);
            $path = $dir.'/'.$fileName;
        }

        $source = fopen($tmp_name,'rb');
        $dest =  fopen($path,'wb');
        stream_copy_to_stream($source,$dest);

        unlink($tmp_name);
        chmod($path,0666);
        

        $text = $this->getData($data,'text',null);;
        if(is_null($text) || (!filter_var(strlen($text),FILTER_VALIDATE_INT,[
            'min_range' => 10,
            'max_range' => 700
        ]))){
            return $this->reply('Text has to be a minimum of 10 character and a maximum of 150 characters',false);
        }

        $stmt = $this->getDatabase()->prepare("INSERT into trainings (Title, WeekNo,Iconurl, Description) VALUES (?, {$weekNo}, '{$path}', ?) ");
        if(!$stmt){
            return $this->reply('An error occuied.' ,false,[
                'type' => 'Server',
            ]);
        }

        $bind = $stmt->bind_param('ss', $title, $text);
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

    public function getPrograms($searchData = []){
        $db = $this->getDatabase();
        $stmt = $db->prepare('select training.Id as id, training.Title as title, training.WeekNo as weekNo, training.Iconurl as iconUrl, training.Description as description from trainings as training where id > 0 order by training.id asc');
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
            $this->hashDataInArray($row,'id');
            $iconUrl = $this->getData($row,'iconUrl');
            $this->setData($row,'iconUrl','');

            if($iconUrl){
                $paths = explode('/assets/',$iconUrl,2);
                if(count($paths) === 2){
                    $iconUrl = '/assets/'.$paths[1];
                    $this->setData($row,'iconUrl',$iconUrl);
                }
            }

            $data[] = $row;
        }

        $stmt->free_result();
        $stmt->close();
        return $data;
    }

    public function getControl($type){
        switch($type){
            case 'lesson':
                $control = $this->get('__controls-->lesson');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Training\Lesson\Manager($container);
                    $this->set('__controls-->lesson',$control);
                }

                return $control;
            break;
        }
    }
}