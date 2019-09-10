<?php

$app->group('/ally',function($app){

    $app->map(['get','post'],'/new',function($req,$res){
        if($req->isGet()){
            $store = $this->get('dataStore')->getControl('logged');
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();

            $session = $this->get('controller')->getSession();
            // Get the controller and session saved to $session so it can be called later
            $store->addData('message_sent', $session->get('message_sent'));
            //declare what ('message_sent') should do and call it in the twig
            $session->remove('message_sent');
            //to remove message when page is refreshed and only when page is post not get
            $store->addData('data', true);
            //stores data that would be sent

            $body->write($this->view->render('aquits/app.joinaquits.com/ally/new.html', $store->getTemplateData()));
            return $res;
        }
        
        if($req->ispost()){
            $data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('ally')->addNew($data);
            if($this->get('controller')->isOk($response)){
                $this->get('controller')->getSession()->set('message_sent', true);
                return $res->withRedirect('/dashboard/ally/new');
             }
        }
    })->setName('ally');
});