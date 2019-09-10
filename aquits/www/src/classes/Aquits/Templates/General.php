<?php

namespace Aquits\Templates;

class General{
    private $__data = [],$container;

    public function __construct(&$container){
        $this->__data = [];
        $this->container = &$container;
    }

    public function set($pointer,$data){
        $this->setData($this->__data,$pointer,$data);
        return $this;
    }

    public function get(string $pointer,$options = ['default' => null,'removeAfterGet' => false]){
        $data = $this->getData($this->__data,$pointer,'___nodata___');
        if($data === '___nodata___'){
            return $this->getData($options,'default',null);
        }

        if($this->getData($options,'removeAfterGet',false)){
            $this->removeData($this->__data,$pointer);
        }

        return $data;
    }

    public function remove(string $pointer){
        $this->removeData($this->__data,$pointer);
        return $this;
    }

    public function getData(array &$dataStore,string $pointer,$default = null){
        $getData = [
            '\Aquits\General\Utils',
            'getDataFromArray'
        ];

        $data = $getData($dataStore,$pointer);
        if(is_null($data)){
            return $default;
        }

        return $data;
    }

    public function setData(array &$dataStore,string $pointer,$data){
        $setData = [
            '\Aquits\General\Utils',
            'setDataInArray'
        ];

        $setData($dataStore,$pointer,$data);
        return true;
    }

    public function removeData(array &$dataStore,string $pointer){
        $removeData = [
            '\Aquits\General\Utils',
            'removeDataFromArray'
        ];

        $removeData($dataStore,$pointer);
        return true;
    }

    public function hashData($data){
        $hashData = [
            '\Aquits\General\Utils',
            'getHashOfData'
        ];

        return $hashData((String) $data);
    }

    public function unHashData(string $hash){
        $unHash = [
            '\Aquits\General\Utils',
            'getDataOfHash'
        ];

        return $unHash($hash);
    }

    public function hashDataInArray(array &$dataStore,string $pointer){
        $data = $this->getData($dataStore,$pointer,'___nodata___');
        if($data === '___nodata___'){
            return '';
        }

        $data = $this->hashData($data);
        $this->setData($dataStore,$pointer,$data);
        return $data;
    }

    public function unHashDataInArray(array &$dataStore,string $pointer){
        $data = $this->getData($dataStore,$pointer,'___nodata___');
        if($data === '___nodata___'){
            return '';
        }

        $data = $this->unHashData($data);
        $this->setData($dataStore,$pointer,$data);
        return $data;
    }

    public function getDatabase(){
        return $this->getContainer()->get('db');
    }

    public function getSession(){
        return $this->getContainer()->get('session')->use('');
    }

    public function getView(){
        return $this->getContainer()->get('view');
    }

    public function getDocumentRoot(){
        return $this->getContainer()->get('documentRoot');
    }

    public function getContainer(){
        return $this->container;
    }

    public function getController(){
        return $this->getContainer()->get('controller');
    }

    public function getDataStore(){
        return $this->getContainer()->get('dataStore');
    }

    public function reply($response,bool $type = false,array $additionalData = []){
        $type = $type ? 'ok' : 'error';
        $additionalData['status'] = $type;
        $additionalData['response'] = $response;
        return $additionalData;
    }

    public function isOk(&$data){
        return ($this->getData($data,'status') === 'ok');
    }
}