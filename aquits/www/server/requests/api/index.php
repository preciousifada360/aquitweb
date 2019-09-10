<?php
	$app->group('/api',function($app){

		$app->map(['get','post'],'/training',function($req,$res){
	 		if($req->isGet()){
	 			$train = $this->get('controller')->getControl('training')->getPrograms();
	 			return json_encode($train);
	    	}
	   		if($req->ispost()){

	    	}

		});

		$app->map(['get','post'],'/metrics',function($req,$res){
	 		if($req->isGet()){
	 			$met = $this->get('controller')->getControl('metrics')->getMetx();
	 			return json_encode($met);
	    	}
	   		if($req->ispost()){
	   			$data = $req->getParsedBody();
	   			$response = $this->get('controller')->getControl('metrics')->addNew($data);
	   			return json_encode($data);

	   			
	    	}

		});

		$app->map(['get','post'],'/webinars',function($req,$res){
	 		if($req->isGet()){
	 			$web = $this->get('controller')->getControl('webinars')->getWeb();
	 			return json_encode($web);
	    	}
	   		if($req->ispost()){
	   			
	    	}

		});

		
		$app->map(['get','post'],'/user',function($req,$res){
	 		if($req->isGet()){
	 			$user = $this->get('controller')->getControl('registration')->getUser();
	 			return json_encode($user);
	    	}
	   		if($req->ispost()){
	   			
	    	}

		});

		$app->map(['get','post'],'/user/{id}',function($req,$res){
	 		if($req->isGet()){
	 			$user = $this->get('controller')->getControl('registration')->getUser();
	 			return json_encode($user);
	    	}
	   		if($req->ispost()){
	   			
	    	}

		});

		$app->map(['get','post'],'/forum',function($req,$res){
	 		if($req->isGet()){
	 			$forum = $this->get('controller')->getControl('forum')->getForum1();
	 			return json_encode($forum);
	    	}
	   		if($req->ispost()){
	   		$data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('forum')->addNew($data);
	   		return json_encode($data);
	    	}

		});

		$app->map(['get','post'],'/resources',function($req,$res){
	 		if($req->isGet()){
	 			$ress = $this->get('controller')->getControl('resources')->getRestt();
	 			return json_encode($ress);
	    	}
	   		if($req->ispost()){
	   		$data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('forum')->addNew($data);
	   		return json_encode($data);
	    	}

		});

		$app->map(['get','post'],'/messages',function($req,$res){
	 		if($req->isGet()){

	    	}

	   		if($req->ispost()){
	   		$data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('messages')->addNew($data);
	   		return json_encode($data);
	    	}

		});

		$app->map(['get','post'],'/ally',function($req,$res){
	 		if($req->isGet()){
	 			
	    	}

	   		if($req->ispost()){
	   		$$data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('ally')->addNew($data);
	   		return json_encode($data);
	    	}

		});

		$app->map(['get','post'],'/coach',function($req,$res){
	 		if($req->isGet()){
	 			
	    	}

	   		if($req->ispost()){
	   		$$data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('coach')->addNew($data);
	   		return json_encode($data);
	    	}

		});

		$app->map(['get','post'],'/verify',function($req,$res){
	 		if($req->isGet()){
	 			
	    	}

	   		if($req->ispost()){
	   		$$data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('verify')->addNew($data);
	   		return json_encode($data);
	    	}

		});

		$app->map(['get','post'],'/sobriety',function($req,$res){
	 		if($req->isGet()){
	 			
	    	}

	   		if($req->ispost()){
	   		$$data = $req->getParsedBody();
            $response = $this->get('controller')->getControl('sobriety')->addNew($data);
	   		return json_encode($data);
	    	}

		});

		$app->map(['get','post'],'/create_account',function($req,$res){
	 		if($req->isGet()){
	 			
	    	}

	   		if($req->ispost()){
	   		$$data = $req->getParsedBody() ?: [];
            $response = $this->controller->getControl('registration')->process('trial',$data);
	   		return json_encode($data);
	    	}

		});

		
	});
