<?php

namespace Aquits\Controller\Account;

class Manager extends \Aquits\Controller\Manager{
    public function hash_password(string $password){
        return hash('sha512',sha1($password));
    }
}