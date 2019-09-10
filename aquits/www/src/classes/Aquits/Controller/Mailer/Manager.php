<?php

namespace Aquits\Controller\Mailer;

class Manager extends \Aquits\Controller\Manager{
    public function getControl(string $control){
        switch($control){
            case 'registration':
                $object = $this->get('__control-->registration');
                if(!is_object($object)){
                    $container = $this->getContainer();
                    $object = new \Aquits\Controller\Mailer\Registration\Manager($container);
                }

                return $object;
            break;
        }
    }
}