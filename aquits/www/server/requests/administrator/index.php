<?php

$app->group('/administrator',function($app){

    $app->map(['get','post'],'/index',function($req,$res){
        if($req->isGet()){
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/administrator/index.html'));
            return $res;
        }

        if($req->ispost()){
            $data = $req->getParsedBody();

        }
    });
    
    $app->map(['get','post'],'/index2',function($req,$res){
        if($req->isGet()){
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/administrator/index2.html'));
            return $res;
        }

        if($req->ispost()){
            $data = $req->getParsedBody();

        }
    });

    $app->map(['get','post'],'/uploads',function($req,$res){
        if($req->isGet()){
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $store = $this->get('dataStore')->getControl('logged');
            $session = $this->get('controller')->getSession();
            // Get the controller and session saved to $session so it can be called later
            $store->addData('message_sent', $session->get('message_sent'));
            //declare what ('message_sent') should do and call it in the twig
            $session->remove('message_sent');
            //to remove message when page is refreshed and only when page is post not get
            $store->addData('data', true);
            //stores data that would be sent
            $body->write($this->view->render('aquits/app.joinaquits.com/administrator/uploads.html', $store->getTemplateData()));
            return $res;
        }

        if($req->ispost()){
            $data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('training')->addNew($data);
            if($this->get('controller')->isOk($response)){
                $this->get('controller')->getSession()->set('message_sent', true);
                return $res->withRedirect('/administrator/uploads');
            }

        }
    })->setName('administratorUploads');

   $app->map(['get','post'],'/lessons',function($req,$res){
        if($req->isGet()){
        $store = $this->get('dataStore')->getControl('logged');
            $programs = $this->get('controller')->getControl('training')->getPrograms();
            $store->addData('programs',$programs);

            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/administrator/lessons.html',$store->getTemplateData()));
            return $res;
        }

        if($req->ispost()){
            $data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('training')->getControl('lesson')->addNew($data);
            return $res->withJson($response);

        }
    })->setName('administratorLesson');


    $app->map(['get','post'],'/resources',function($req,$res){
        if($req->isGet()){
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/administrator/resources.html'));
            return $res;
        }

        if($req->ispost()){
            $data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('resources')->addNew($data);
                  return $res->withJson($response);

        }
    })->setName('administratorResources');


    $app->map(['get','post'],'/addwebinars',function($req,$res){
        if($req->isGet()){
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/administrator/addwebinars.html'));
            return $res;
        }

        if($req->ispost()){
            $data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('webinars')->addNew($data);
                  return $res->withJson($response);

        }
    })->setName('administratorAddwebinars');



    $app->map(['get','post'],'/groups',function($req,$res){
        if($req->isGet()){
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/administrator/groups.html'));
            return $res;
        }

        if($req->ispost()){
            $data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('group')->addNew($data);
            return $res->withJson($response);
        }
    })->setName('administratorGroups');

    

});

?>