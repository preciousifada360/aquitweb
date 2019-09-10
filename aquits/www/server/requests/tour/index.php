<?php

$app->group('/tour',function($app){

    $app->map(['get','post'],'/verify',function($req,$res){

        if($req->isGet()){
            $store = $this->get('dataStore')->getControl('logged');
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/tour/verify.html' ,$store->getTemplateData()));
            return $res;
        }
        
        if($req->ispost()){
            $data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('verify')->addNew($data);
            if($this->get('controller')->isOk($response)){
                return $res->withRedirect('/tour/sobriety');
            }
        }
    })->setName('verify');

      $app->map(['get','post'],'/sobriety',function($req,$res){
    
        if($req->isGet()){
            $store = $this->get('dataStore')->getControl('logged');
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/tour/sobriety.html', $store->getTemplateData()));
            return $res;
        }
        
        if($req->ispost()){
            $data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('sobriety')->addNew($data);
            if($this->get('controller')->isOk($response)){
                return $res->withRedirect('/tour/tour');
            }
        }
    })->setName('sobriety');

    $app->map(['get','post'],'/tour',function($req,$res){
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/tour/tour.html'));
            return $res;
      
    });

});
