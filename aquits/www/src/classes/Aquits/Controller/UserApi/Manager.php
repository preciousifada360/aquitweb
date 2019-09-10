<?php
namespace Aquits\Controller\UserApi;

class Manager extends \Aquits\Controller\Manager{

	public function generateUserApi($length = 15){
		$character = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$charactersLength = strlen($character);
		$userApi = '';
		for($i = 0; $i < $length; $i++) {
			$userApi .= $character[mt_rand(0, $charactersLength - 1)];
		}  aracter();

		return $userApi;

	}

	public function getApi($searchData = []){
      $apiKey;
		$exists = 0;

		do{
		  $apiKey = $this->generateApiKey();
		  $db = $this->getDatabase();
		  $stmt = $db->prepare('select 1 from apiDb where apiKey = ? limit 1');
		  $bind = $stmt->bind_param('s',$apiKey);
		  $execute = $stmt->execute();
		  $result = $stmt->get_result();
		  $exists=$result->num_rows;
		 }while($exists === 1);

		$stmt = $this->getDatabase()->prepare("INSERT into getapi (UserApi) VALUES (?)");
        if(!$stmt){
            return $this->reply('An error occured.' ,false,[
                'type' => 'Server',
            ]);
        }

        $bind = $stmt->bind_param('s', $userApi );
        if(!$bind){
            return $this->reply('An error just occured..' , false,[
                'type' => 'Error'
            ]);
        }

        $execute = $stmt->execute();
        if(!$execute){
            return $this->reply('An error just occuied...', false,[
                'type' => 'Server Error', 
                'error' => $this->getDatabase()->error
            ]);

        }
        return $this->reply('Sucessful...', true);


        $stmt->free_result();
        $stmt->close();
        return $data;
    }      

}