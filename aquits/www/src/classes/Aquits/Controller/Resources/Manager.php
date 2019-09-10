<?php

namespace Aquits\Controller\Resources;

class Manager extends \Aquits\Templates\General{

    public function addNew(array $data){
        $title = $this->getData($data,'title',null);
        if(is_null($title) || (!filter_var(strlen($title),FILTER_VALIDATE_INT,[
            'min_range' => 3,
            'max_range' => 255
        ]))){
            return $this->reply('Title has to be a minimum of 5 character and a maximum of 150 characters',false);
        }

        $note= $this->getData($data,'note',null);
        if(is_null($note)){
            return $this->reply('Note has to be a minimum of 5 character and a maximum of 1000 characters',false);
        }

        $files = $_FILES;
        // replicate for ppath for video....
        $tmp_name = $this->getData($files,'video-->tmp_name',null);
        $error = $this->getData($files,'video-->error',1);
        if($error !== UPLOAD_ERR_OK){
            return $this->reply('An error occured while uploading Video',false,[
                'type' => 'file',
                'error' => $error
            ]);
        }
        if(fileSize($tmp_name) > 50000000){
            return $this->reply('Video should be less than 50mb',false,[
                'type' => 'file'
            ]);
        }
        \clearstatcache(true);
        $dir = $this->getContainer()->get('documentRoot').'/public/assets/uploads';
        $fileName = \Aquits\General\Utils::random(40);
        $vPath = $dir.'/'.$fileName;
        while(file_exists($vPath)){
            $fileName = \Aquits\General\Utils::random(40);
            $vPath = $dir.'/'.$fileName;
        }
        $source = fopen($tmp_name,'rb');
        $dest =  fopen($vPath,'wb');
        stream_copy_to_stream($source,$dest);
        unlink($tmp_name);
        chmod($vPath,0666);

// replicate for ppath for pdf....

        $tmp_name = $this->getData($files,'pdf-->tmp_name',null);
        $error = $this->getData($files,'pdf-->error',1);
        if($error !== UPLOAD_ERR_OK){
            return $this->reply('An error occured while uploading Video',false,[
                'type' => 'file',
                'error' => $error
            ]);
        }
        if(fileSize($tmp_name) > 50000000){
            return $this->reply('Video should be less than 50mb',false,[
                'type' => 'file'
            ]);
        }
        \clearstatcache(true);
        $dir = $this->getContainer()->get('documentRoot').'/public/assets/uploads';
        $fileName = \Aquits\General\Utils::random(40);
        $pPath = $dir.'/'.$fileName;
        while(file_exists($pPath)){
            $fileName = \Aquits\General\Utils::random(40);
            $pPath = $dir.'/'.$fileName;
        }
        $source = fopen($tmp_name,'rb');
        $dest =  fopen($pPath,'wb');
        stream_copy_to_stream($source,$dest);
        unlink($tmp_name);
        chmod($pPath,0666);

        $stmt = $this->getDatabase()->prepare("INSERT into resources ( Title, Note, Video, Pdf ) VALUES (?, ?, '{$vPath}','{$pPath}')");

        if(!$stmt){
            return $this->reply('An error occuied.' ,false,[
                'type' => 'Server',
            ]);
        }
        $bind = $stmt->bind_param('ss', $title, $note);
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
          return $this->reply('sucessful',true);
    
    }

     public function getRestt($searchData = []){
        $db = $this->getDatabase();
        $stmt = $db->prepare('select rest.Id as id, rest.Title as title, rest.Note as note, rest.Video as video, rest.Pdf as pdf from resources as rest where id > 0 order by rest.id asc');
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

         while ($row = $result->fetch_array(MYSQLI_ASSOC)){
            $pdf = $this->getData($row,'pdf');
            $this->setData($row,'pdf','');

            if($pdf){
                $paths = explode('/assets/',$pdf,2);
                if(count($paths) === 2){
                    $pdf = '/assets/'.$paths[1];
                    $this->setData($row,'pdf',$pdf);
                }
            }


            $data[] = $row;
        }

        $stmt->free_result();
        $stmt->close();
        return $data;
    }


}