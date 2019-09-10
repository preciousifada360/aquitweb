<?php

$app->group('/library',function($app){


    $current = dirname(__FILE__);
    require "{$current}/lessons/index.php";
});

?>