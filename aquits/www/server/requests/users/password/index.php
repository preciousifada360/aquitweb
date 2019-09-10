<?php

$app->group('/password',function($app){

    $app->map(['get','post'],'/new',function($req,$res){
        if($req->isGet()){
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/users/password/new.html'));
            return $res;
        }
        
        if($req->ispost()){
            $data = $req->getParsedBody();
            
        }
    });

    
});