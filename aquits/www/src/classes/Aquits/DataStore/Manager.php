<?php

namespace Aquits\DataStore;

class Manager extends \Aquits\Templates\General{
    private $prepend = 'templateData';
    
    public function getControl(string $type){
        switch($type){
            case 'logged':
                $container = $this->getContainer();
                $control = new \Aquits\DataStore\Logged\Manager($container);
                return $control;
            break;
        }
    }

    public function addData($key,$value){
        if(is_array($key)){
            return $this->addArrayData($key);
        }elseif(is_string($key)){
            return $this->set($this->prepend.'-->'.$key,$value);
        }
        return $this;
    }

    public function addArrayData(array &$data,string $pointer = ''){
        foreach($data as $key => &$value){
            if(is_array($value)){
                $this->addArrayData($value,($pointer ? "{$pointer}-->{$key}" : $key));
            }else{
                if($pointer){
                    $pointer = $this->prepend.'-->'.$pointer;
                    $this->set($pointer,$value);
                }
            }
        }
        return $this;
    }

    public function removeFromTemplateData(string $pointer){
        $this->remove($this->prepend.'-->'.$pointer);
    }

    public function getTemplateData(){
        $data = $this->get($this->prepend,[
            'default' => [],
            'remoeAfterGet' => true
        ]);
        return $data;
    }
}