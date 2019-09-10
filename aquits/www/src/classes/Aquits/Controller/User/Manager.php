<?php

namespace Aquits\Controller\User;

class Manager extends \Aquits\Controller\Manager{
    public function isLogged(){
        return ((int) $this->getSession()->get('logged-->user-->id') > 0);
    }
}