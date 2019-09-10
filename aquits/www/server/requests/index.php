<?php

$app->map(['get','post'],'/login',function($req,$res){
    if($req->isGet() AND $user->isLogged() ){
    $user = $this->get('controller')->getControl('user');
    $store = $this->get('dataStore');
    $res = $res->withHeader('Content-Type', 'text/html');
    $body = $res->getBody();
    $store->addData('router',$this->router);
    $session = $this->get('controller')->getSession();
    // Get the controller and session saved to $session so it can be called later
    $store->addData('message_sent', $session->get('message_sent'));
    //declare what ('message_sent') should do and call it in the twig
    $session->remove('message_sent');
    //to remove message when page is refreshed and only when page is post not get
    $store->addData('data', true);
    //stores data that would be sent
    
     return $res->withRedirect('/dashboard');

}
    if($req->ispost()){
        $data = $req->getParsedBody();
        $controller = $this->get('controller');
        $controller->setData($data,'type','userData');
        $resp = $controller->getControl('login')->process($data);
        if($this->get('controller')->isOk($resp)){
            $this->get('controller')->getSession()->set('message_sent', true);
            return $res->withRedirect('/login');
    }
}

    $body->write($this->view->render('aquits/app.joinaquits.com/login.html',$store->getTemplateData()));

})->setname('login');

$app->map(['get','post'],'/about',function($req,$res){
     if($req->isGet()){
        $res = $res->withHeader('Content-Type', 'text/html');
        $body = $res->getBody();
        $body->write($this->view->render('aquits/app.joinaquits.com/about.html'));
        return $res;
    }

    if($req->ispost()){
        $data = $req->getParsedBody();

    }
});

$app->map(['get','post'],'/donate',function($req,$res){
    if($req->isGet()){
        $res = $res->withHeader('Content-Type', 'text/html');
        $body = $res->getBody();
        $body->write($this->view->render('aquits/app.joinaquits.com/donate.html'));
        return $res;
    }

    if($req->ispost()){
        $data = $req->getParsedBody();

    }
});

$app->map(['get','post'],'/signout',function($req,$res){
    $this->get('controller')->getSession()->remove('logged');
    return $res->withRedirect('/');
});

$app->map(['get','post'],'/financial_aid',function($req,$res){
    if($req->isGet()){
        $res = $res->withHeader('Content-Type', 'text/html');
        $body = $res->getBody();
        $body->write($this->view->render('aquits/app.joinaquits.com/financial_aid.html'));
        return $res;
    }

    if($req->ispost()){
        $data = $req->getParsedBody();

    }
});

$app->map(['get','post'],'/gift',function($req,$res){
    if($req->isGet()){
        $res = $res->withHeader('Content-Type', 'text/html');
        $body = $res->getBody();
        $body->write($this->view->render('aquits/app.joinaquits.com/gift.html'));
        return $res;
    }

    if($req->ispost()){
        $data = $req->getParsedBody();

    }
});


$app->map(['get','post'],'/limesmart_jwplayer_skin',function($req,$res){
    if($req->isGet()){
        $res = $res->withHeader('Content-Type', 'text/html');
        $body = $res->getBody();
        $body->write($this->view->render('aquits/app.joinaquits.com/limesmart_jwplayer_skin.html'));
        return $res;
    }

    if($req->ispost()){
        $data = $req->getParsedBody();

    }
});


$app->map(['get','post'],'/notification',function($req,$res){
    if($req->isGet()){
        $res = $res->withHeader('Content-Type', 'text/html');
        $body = $res->getBody();
        $body->write($this->view->render('aquits/app.joinaquits.com/notification.html'));
        $body->write($this->view->render('aquits/app.joinaquits.com/notification-page=4.html'));
        $body->write($this->view->render('aquits/app.joinaquits.com/notification-page=2.html'));
        $body->write($this->view->render('aquits/app.joinaquits.com/notification-page=3.html'));
        return $res;
    }

    if($req->ispost()){
        $data = $req->getParsedBody();

    }
});

$app->map(['get','post'],'/privacy',function($req,$res){
    if($req->isGet()){
        $res = $res->withHeader('Content-Type', 'text/html');
        $body = $res->getBody();
        $body->write($this->view->render('aquits/app.joinaquits.com/privacy.html'));
        return $res;
    }

    if($req->ispost()){
        $data = $req->getParsedBody();

    }
});

$app->map(['get','post'],'/profile',function($req,$res){
    if($req->isGet()){
        $res = $res->withHeader('Content-Type', 'text/html');
        $body = $res->getBody();
        $body->write($this->view->render('aquits/app.joinaquits.com/profile.html'));
        $body->write($this->view->render('aquits/app.joinaquits.com/profile-submenu=billing.html'));
        $body->write($this->view->render('aquits/app.joinaquits.com/profile_dashboard.html'));
        return $res;
    }

    if($req->ispost()){
        $data = $req->getParsedBody();

    }
});

$app->map(['get','post'],'/youth',function($req,$res){
    if($req->isGet()){
        $res = $res->withHeader('Content-Type', 'text/html');
        $body = $res->getBody();
        $body->write($this->view->render('aquits/app.joinaquits.com/youth.html'));
        return $res;
    }

    if($req->ispost()){
        $data = $req->getParsedBody();
    }
});

$app->map(['get','post'],'/testimonials',function($req,$res){
    if($req->isGet()){
        $res = $res->withHeader('Content-Type', 'text/html');
        $body = $res->getBody();
        $body->write($this->view->render('aquits/app.joinaquits.com/testimonials.html'));
        return $res;
    }

    if($req->ispost()){
        $data = $req->getParsedBody();
    }
});


$app->map(['get','post'],'/terms',function($req,$res){
    if($req->isGet()){
        $res = $res->withHeader('Content-Type', 'text/html');
        $body = $res->getBody();
        $body->write($this->view->render('aquits/app.joinaquits.com/terms.html'));
        return $res;
    }

    if($req->ispost()){
        $data = $req->getParsedBody();
    }
});

$app->map(['get','post'],'/student-pricing',function($req,$res){
    if($req->isGet()){
        $res = $res->withHeader('Content-Type', 'text/html');
        $body = $res->getBody();
        $body->write($this->view->render('aquits/app.joinaquits.com/student-pricing.html'));
        return $res;
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

$app->map(['get','post'],'/sign-up',function($req,$res){
    if($req->isGet()){
        $res = $res->withHeader('Content-Type', 'text/html');
        $body = $res->getBody();
        $body->write($this->view->render('aquits/app.joinaquits.com/sign-up.html'));
        return $res;
    }

    if($req->ispost()){
        $data = $req->getParsedBody();
    }
});

$app->map(['get'],'/confirmation',function($req,$res){
    if($req->isGet()){
        $res = $res->withHeader('Content-Type', 'text/html');
        $body = $res->getBody();
        $body->write($this->view->render('aquits/app.joinaquits.com/confirmation.html'));
        return $res;
    }
});


$app->map(['get','post'],'/api',function($req,$res){
    if($req->isGet()){
        return $res->withStatus(404);
    }

    if($req->isPost()){
        $data = $req->getParsedBody();
        $check = $data['check'] ?? null;

        switch($check){
            case 'email':
                return $res->withJson($this->get('controller')->getControl('validator')->checkEmail($data));
            break;
        }
    }
});

$location = dirname(__FILE__);
require "{$location}/users/index.php";
require "{$location}/dashboard/index.php";
require "{$location}/administrator/index.php";
require "{$location}/tour/index.php";
require "{$location}/api/index.php";