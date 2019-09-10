<?php

namespace Aquits\DataStore\Unlogged;

class Manager extends \Aquits\DataStore\Manager{
    public function getTemplateData(){
        $data = parent::getTemplateData();
        $this->setData($data,'user',$this->getSession()->get('unlogged'));
        return $data;
    }
}