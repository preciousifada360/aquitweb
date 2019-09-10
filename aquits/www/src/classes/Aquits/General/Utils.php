<?php

namespace Aquits\General;

class Utils{
    public static function random($length){
        $char = '';
        while(strlen($char) < (int)$length){
            $arr = [mt_rand(48,57),mt_rand(65,90),mt_rand(97,122)];
            $char .= chr($arr[mt_rand(0,2)]);
        }
        return $char;
    }
    
    public static function getHashOfData($data){
        if(!(is_int($data) || (is_string($data) && strlen($data)))){
            return '';
        }
        $cipher = 'AES-256-CBC';
        $ivlen = openssl_cipher_iv_length($cipher);
        $iv = 'Aquit';
        $key = 'AquitsKey';
        $ivLen = strlen($iv);

        if($ivLen < $ivlen){
            $iv = str_pad($iv,$ivlen,'salt',STR_PAD_BOTH);
        }

        if($ivLen > $ivlen){
            $iv = substr($iv,0,$ivlen);
        }
        
        return bin2hex(openssl_encrypt($data, $cipher, $key, OPENSSL_RAW_DATA, $iv));
    }

    public static function getDataOfHash($hash){
        $cipher = 'AES-256-CBC';
        $ivlen = openssl_cipher_iv_length($cipher);
        $iv = 'Aquit';
        $key = 'AquitsKey';
        $ivLen = strlen($iv);

        if($ivLen < $ivlen){
            $iv = str_pad($iv,$ivlen,'salt',STR_PAD_BOTH);
        }

        if($ivLen > $ivlen){
            $iv = substr($iv,0,$ivlen);
        }

        if(!(is_string($hash) && (strlen($hash) % 2 == 0))){
            return '';
        }
        return openssl_decrypt(hex2bin($hash), $cipher, $key, OPENSSL_RAW_DATA, $iv);
    }

    public static function getDataFromArray(array &$data,string $key){
        $pointer = &$data;
        $parts = explode('-->',$key);
        for($i = 0,$j = count($parts);$i < $j;$i++){
            $part = $parts[$i];
            if(is_numeric($part)){
                $part = (int) $part;
            }
            if(isset($pointer[$part])){
                if(($i + 1) === $j){
                    return $pointer[$part];
                }else{
                    if(is_array($pointer[$part])){
                        $pointer = &$pointer[$part];
                        continue;
                    }
                }
            }
            return null;
        }
    }

    public static function setDataInArray(array &$data,string $key,$value){
        $pointer = &$data;
        $parts = explode('-->',$key);
        for($i = 0,$j = count($parts);$i < $j;$i++){
            $part = $parts[$i];
            if(is_numeric($part)){
                $part = (int) $part;
            }
            if(($i + 1) === $j){
                if((strlen($part) > 2) && (substr($part,-2) === '[]')){
                    $part = substr($part,0,-2);
                    if(isset($pointer[$part]) && is_array($pointer[$part])){
                        $pointer[$part][] = $value;
                    }else{
                        $pointer[$part] = [$value];
                    }
                }else{
                    $pointer[$part] = $value;
                }
            }else{
                if(!(isset($pointer[$part]) && is_array($pointer[$part]))){
                    $pointer[$part] = [];
                }
                $pointer = &$pointer[$part];
            }
        }
        return true;
    }

    public static function removeDataFromArray(array &$data,string $key){
        $pointer = &$data;
        $parts = explode('-->',$key);
        for($i = 0,$j = count($parts);$i < $j;$i++){
            $part = $parts[$i];
            if(($i + 1) === $j){
                $pointer[$part] = null;
                $pointer = array_filter($pointer);
            }else{
                if((isset($pointer[$part]) && is_array($pointer[$part]))){
                    $pointer = &$pointer[$part];
                }else{
                    return true;
                }
            }
        }
        return true;
    }
}