<?php

namespace Aquits\DataStore\Logged;

class Manager extends \Aquits\DataStore\Manager{
    public function getTemplateData(){
        $data = parent::getTemplateData();
        $this->setData($data,'logged',$this->getSession()->get('logged'));
        return $data;
    }
}