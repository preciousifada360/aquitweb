<?php

$app->group('/users',function($app){

    $app->map(['get','post'],'/create_account',function($req,$res){
        $session = $this->session;

        if($req->isGet()){
            if($session->get('id')){
                return $res->withRedirect('/dashboard');
            }

            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/users/create_account.html',[
                'router' => $this->router
            ]));
            return $res;
        }
        
        if($req->isPost()){
            $data = $req->getParsedBody() ?: [];
            return $res->withJson($this->controller->getControl('registration')->process('trial',$data));
        }
    })->setName('usersCreateAccount');

    $app->map(['get','post'],'/new_allies',function($req,$res){
        $session = $this->session;

        if($req->isGet()){
            if($session->get('id')){
                return $res->withRedirect('/dashboard');
            }

            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/users/new_allies.html',[
                'router' => $this->router
            ]));
            return $res;
        }
        
        if($req->ispost()){
            $data = $req->getParsedBody() ?: [];
            return $res->withJson($this->controller->getControl('registration')->process('ally',$data));
        }
    })->setName('usersNew_Allies');

    $app->map(['get','post'],'/new_annual_plan',function($req,$res){
        if($req->isGet()){
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/users/new_annual_plan.html'));
            return $res;
        }
        
        if($req->ispost()){
            $data = $req->getParsedBody() ?: [];
            return $res->withJson($this->controller->getControl('registration')->process('annually',$data));
        }

    })->setName('Users_Annual_Plan');

    $app->map(['get','post'],'/sign_out',function($req,$res){
         $this->get('controller')->getSession()->remove('logged');
         return $res->withRedirect('/');
});

    $app->map(['get','post'],'/new_one_time_plan',function($req,$res){
        if($req->isGet()){
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/users/new_one_time_plan.html'));
            return $res;
        }
        
        if($req->ispost()){
            $data = $req->getParsedBody() ?: [];
            return $res->withJson($this->controller->getControl('registration')->process('forever',$data));
        }
    })->setName('Users_One_Time_Plan');

    $app->map(['get','post'],'/sign_up',function($req,$res){
        if($req->isGet()){
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/users/sign_up.html'));
            return $res;
        }
        
        if($req->ispost()){
            $data = $req->getParsedBody() ?: [];
            return $res->withJson($this->controller->getControl('registration')->process('monthly',$data));
        }
    })->setName('Users_SignUp');

    $current = dirname(__FILE__);
    require "{$current}/password/index.php";
});

?>