<?php

namespace Aquits\Controller\Verify;


class Manager extends \Aquits\Templates\General{

    public function addNew(array $data){
        
		$gender = $this->getData($data,'gender',null);
        if(is_null($gender) || (!filter_var(strlen($gender))))
        {
            return $this->reply('Enter your genderr',false);
        }

        $marital_status = $this->getData($data,'marital_status',null);
        if(is_null($marital_status) || (!filter_var(strlen($marital_status),FILTER_VALIDATE_INT,[
            'min_range' => 3,
            'max_range' => 255
        ]))){
            return $this->reply('select your Marital Status',false);
        }

        $country = $this->getData($data,'country',null);
        if(is_null($country) || (!filter_var(strlen($country),FILTER_VALIDATE_INT,[
            'min_range' => 3,
            'max_range' => 255
        ]))){
            return $this->reply('please enter your country',false);
        }

        $ethnicity = $this->getData($data,'ethnicity',null);
        if(is_null($ethnicity) || (!filter_var(strlen($ethnicity),FILTER_VALIDATE_INT,[
            'min_range' => 3,
            'max_range' => 255
        ]))){
            return $this->reply('please enter your Ethnicity',false);
        }

        $religion = $this->getData($data,'religion',null);
        if(is_null($religion) || (!filter_var(strlen($religion),FILTER_VALIDATE_INT,[
            'min_range' => 3,
            'max_range' => 255
        ]))){
            return $this->reply('please enter your Religion',false);
        }

        $timezone = $this->getData($data,'timezone',null);
        if(is_null($timezone) || (!filter_var(strlen($timezone),FILTER_VALIDATE_INT,[
            'min_range' => 3,
            'max_range' => 255
        ]))){
            return $this->reply('please enter your Timezone',false);
        }

        $username = $this->getData($data,'username',null);
        if(is_null($username) || (!filter_var(strlen($username))))
        {
            return $this->reply('Enter a username',false);
        }


        $stmt = $this->getDatabase()->prepare("INSERT into verify (Gender, MaritalStatus, Country, Ethnicity, Religion, Timezone, Username) VALUES ('{$gender}', '{$marital_status}', '{$country}', '{$ethnicity}', '{$religion}','{$timezone}', ? ) ");

        if(!$stmt){
            return $this->reply('An error occuied.' ,false,[
                'type' => 'Server',
            ]);
        }

        $bind = $stmt->bind_param('s', $username);
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

        return $this->reply('Successful...', true);



    }
}