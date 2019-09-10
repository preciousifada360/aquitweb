<?php
$app->group('/lessons',function($app){

    $app->map(['get','post'],'/{id}',function($req,$res,$args){
        if($req->isGet()){
            $id = $this->controller->getData($args,'id',0);
            $store = $this->get('dataStore')->getControl('logged');
            $data = $this->get('controller')->getControl('training')->getControl('lesson')->getLessons([
                'trainingId' => $id
            ]);
            $data1 = $this->get('controller')->getControl('training')->getControl('lesson')->getControl('less')->getLess();

            $store->addData('lessons',$data);
            $store->addData('less',$data1);
            $res = $res->withHeader('Content-Type', 'text/html');
            $body = $res->getBody();
            $body->write($this->view->render('aquits/app.joinaquits.com/library/lessons/lesson1.html',$store->getTemplateData()));
            return $res;
        }
        
        if($req->ispost()){
            $data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('training')->getControl('lesson')->getControl('less')->addNew($data);
                return $res->withHeader('Location', (string)$req->getUri())->withStatus(301);  
        }
    })->setName('less');
});
