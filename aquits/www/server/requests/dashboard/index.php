<?php

$app->group('/dashboard',function($app){

    $app->map(['get','post'],'',function($req,$res){
            $store = $this->get('dataStore')->getControl('logged');
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/index.html', $store->getTemplateData()));
            /*
            $body->write($this->view->render('aquits/app.joinaquits.com/index-submenu=awards.html'));
            $body->write($this->view->render('aquits/app.joinaquits.com/index-submenu=freedomplan.html'));
            $body->write($this->view->render('aquits/app.joinaquits.com/index-submenu=responses-actions.html'));
            $body->write($this->view->render('aquits/app.joinaquits.com/index-submenu=responses-quickquestions.html'));
            $body->write($this->view->render('aquits/app.joinaquits.com/index-three_ways=true.html'));
            $body->write($this->view->render('aquits/app.joinaquits.com/index-tour_again=true.html'));
            */
            return $res;
        

        if($req->ispost()){
            $data = $req->getParsedBody();

        }
    });

    $app->map(['get','post'],'/index-three_ways=true',function($req,$res){
        if($req->isGet()){
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/index-three_ways=true.html'));
            return $res;
         }
    });



    $app->map(['get','post'],'/program',function($req,$res){
        if($req->isGet()){
            $store = $this->get('dataStore')->getControl('logged');
            $data = $this->get('controller')->getControl('training')->getPrograms();
            $store->addData('programs',$data);

            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/program.html',$store->getTemplateData()));

            /*$body->write($this->view->render('aquits/app.joinaquits.com/program-submenu=categories.html')); */
            return json_encode($body);
        }

        if($req->ispost()){
            $data = $req->getParsedBody();
        }
    })->setName('administratorProgram');

    $app->map(['get','post'],'/trackers',function($req,$res){
        if($req->isGet()){
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/trackers.html'));
            return $res;
        }

        if($req->ispost()){
            $data = $req->getParsedBody();
        }
    });

    $app->map(['get','post'],'/metrics',function($req,$res){
        if($req->isGet()){
            $store = $this->get('dataStore')->getControl('logged');
            $data = $this->get('controller')->getControl('metrics')->getMetx();
            $store->addData('metx',$data);
            $session = $this->get('controller')->getSession();
            // Get the controller and session saved to $session so it can be called later
            $store->addData('message_sent', $session->get('message_sent'));
            //declare what ('message_sent') should do and call it in the twig
            $session->remove('message_sent');
            //to remove message when page is refreshed and only when page is post not get
            $store->addData('data', true);
            //stores data that would be sent

            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/metrics.html' ,$store->getTemplateData()));
            return $res;
        }

        if($req->ispost()){
            $data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('metrics')->addNew($data);
            if($this->get('controller')->isOk($response)){
                $this->get('controller')->getSession()->set('message_sent', true);
                return $res->withRedirect('/dashboard/metrics');
            } 
        }
    })->setName('metrics');

    $app->map(['get','post'],'/forum',function($req,$res){
        if($req->isGet()){
            $store = $this->get('dataStore')->getControl('logged');
            $data = $this->get('controller')->getControl('forum')->getForum1();
            $store->addData('forum1',$data);

            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/forum.html' ,$store->getTemplateData()));
    
            return $res;
        }

        if($req->ispost()){
            $data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('forum')->addNew($data);
            return $res->withRedirect('/dashboard/forum');
        }
    })->setName('forum');


    $app->map(['get','post'],'/groups',function($req,$res){
        if($req->isGet()){
            $store = $this->get('dataStore')->getControl('logged');
            $data = $this->get('controller')->getControl('group')->getGroupz();
            $store->addData('groupz',$data);
            $session = $this->get('controller')->getSession();
            // Get the controller and session saved to $session so it can be called later
            $store->addData('message_sent', $session->get('message_sent'));
            //declare what ('message_sent') should do and call it in the twig
            $session->remove('message_sent');
            //to remove message when page is refreshed and only when page is post not get
            $store->addData('data', true);
            //stores data that would be sent
            
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/groups.html',$store->getTemplateData()));
            return $res;
        }
      

        if($req->ispost()){
            $data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('grp')->addNew($data);
            if($this->get('controller')->isOk($response)){
                $this->get('controller')->getSession()->set('message_sent', true);
                return $res->withRedirect('/dashboard/groups');
            } 
        }
    })->setName('groups');

    $app->map(['get','post'],'/messages',function($req,$res){
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
            $body->write($this->view->render('aquits/app.joinaquits.com/messages.html', $store->getTemplateData()));
        }

        if($req->ispost()){
            $data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('messages')->addNew($data);
            if($this->get('controller')->isOk($response)){
                $this->get('controller')->getSession()->set('message_sent', true);
                return $res->withRedirect('/dashboard/messages');
            } 
        }
    })->setName('messages');

    $app->map(['get','post'],'/webinars',function($req,$res){
        if($req->isGet()){
            $store = $this->get('dataStore')->getControl('logged');
            $data = $this->get('controller')->getControl('webinars')->getWeb();
            $store->addData('web',$data);

            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/webinars.html' ,$store->getTemplateData()));
            return $res;
        }

        if($req->ispost()){
            $data = $req->getParsedBody();
        }
    });

 
    $app->map(['get','post'],'/resources',function($req,$res){
        if($req->isGet()){
            $store = $this->get('dataStore')->getControl('logged');
            $data = $this->get('controller')->getControl('resources')->getRestt();
            $store->addData('restt',$data);

            $res = $res->withHeader('Content-Type', 'application/Json');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/resources.html' ,$store->getTemplateData()));
            return json_encode($body);
        }

        if($req->ispost()){
            $data = $req->getParsedBody();
        }
    });


    $app->map(['get','post'],'/sos',function($req,$res){
        if($req->isGet()){
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/sos.html'));
            return $res;
        }

        if($req->ispost()){
            $data = $req->getParsedBody();
        }
    });

    $current = dirname(__FILE__);
    require "{$current}/ally/index.php";
    require "{$current}/coach/index.php";
    require "{$current}/library/index.php";
});