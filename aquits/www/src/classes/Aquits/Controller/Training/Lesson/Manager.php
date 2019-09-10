<?php

namespace Aquits\Controller\Training\Lesson;


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

        $editor = $this->getData($data,'editor',null);
        if(is_null($editor) || (!filter_var(strlen($editor),FILTER_VALIDATE_INT,[
            'min_range' => 3,
            'max_range' => 255
        ]))){
            return $this->reply('Content body has to be a minimum of 5 character and a maximum of 150 characters',false);
        }
        
        $files = $_FILES;
        $tmp_name = $this->getData($files,'vid-->tmp_name',null);
        $error = $this->getData($files,'vid-->error',1);
        if(!is_string($tmp_name)){
            return $this->reply('Please a Video is required',false,[
                'type' => 'file'
            ]);
        }

        if($error !== UPLOAD_ERR_OK){
            return $this->reply('An error occured while uploading Video',false,[
                'type' => 'file'
            ]);
        }
        if(fileSize($tmp_name) > 50000000){
            return $this->reply('video should be less than 5mb',false,[
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


        $stmt = $this->getDatabase()->prepare("INSERT into lesson (Title, WeekNo , Content, VideoUrl) VALUES (?, {$weekNo}, ?, '{$vidPath}') ");
        if(!$stmt){
            return $this->reply('An error occuied.' ,false,[
                'type' => 'Server',
            ]);
        }

        $bind = $stmt->bind_param('ss', $title, $editor);
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
		
    public function getLessons($searchData = []){
        $db = $this->getDatabase();
        $trainingId = $this->getData($searchData,'trainingId');

        $stmt = $db->prepare('select training.Title as trainingTitle,training.WeekNo as trainingWeekNo, lesson.Id as id, lesson.Title as title, lesson.WeekNo as weekNo, lesson.Content as content, lesson.VideoUrl as videoUrl from lesson as lesson join trainings as training on (lesson.WeekNo = training.WeekNo) where training.Id = ? order by lesson.Id asc');
        if(!$stmt){
            return $this->reply('An error just occured..', false,[
                'error' => $db->error
            ]);
        }
        
        $trainingId = $this->unHashData($trainingId);
        $bind = $stmt->bind_param('i',$trainingId);
        if(!$bind){
            return $this->reply('An error just occured...', false,[
                'error' => $db->error
            ]);
        }

        $execute = $stmt->execute();
        if(!$execute){
            return $this->reply('An error just occured....', false,[
                'error' => $db->error
            ]);
        }
        
        $result = $stmt->get_result();
        $data = [];
        while ($row = $result->fetch_array(MYSQLI_ASSOC)){
            $this->hashDataInArray($row,'id');
            $videoUrl = $this->getData($row,'videoUrl');
            $this->setData($row,'videoUrl','');
            
            if($videoUrl){
                $paths = explode('/assets/',$videoUrl,2);
                if(count($paths) === 2){
                    $videoUrl = '/assets/'.$paths[1];
                    $this->setData($row,'videoUrl',$videoUrl);
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
            case 'less':
                $control = $this->get('__controls-->lesson');
                if(!is_object($control)){
                    $container = $this->getContainer();
                    $control = new \Aquits\Controller\Training\Lesson\Less\Manager($container);
                    $this->set('__controls-->less',$control);
                }

                return $control;
            break;
        }
    }

}
        
        

        
