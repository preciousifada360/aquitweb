<?php
use Psr\Http\Message\{ServerRequestInterface as Request,ResponseInterface as Response};

session_start();
ini_set('display_errors',1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$documentRoot = $_SERVER['DOCUMENT_ROOT'];
include "{$documentRoot}/src/vendor/autoload.php";

$app = new \Slim\App([
    'settings' => [
        'displayErrorDetails' => true,
        'determineRouteBeforeAppMiddleware' => true
    ]
]);

$container = $app->getContainer();

$container['view'] = function($container) use (&$documentRoot){
    $loader = new \Twig\Loader\FilesystemLoader("{$documentRoot}/public/pages/templates");
    $twig = new \Twig\Environment($loader, [
        'debug' => true,
        'auto_reload' => true,
        'strict_variables' => false,
        'optimizations' => 1,
        'cache' => false/*'/path/to/compilation_cache'*/,
    ]);

    $twig->addExtension(new \Twig_Extension_Debug());
    return $twig;
};

$container['db'] = function($container){
    $host = "localhost";
    $port = 3307;
    $user = "root";
    $password = "kamsoko";
    $db = "aquits";

    $conn = new \mysqli($host,$user,$password,$db,$port);
    if($conn->connect_error){
        exit("connect error... Could not connect to data source");
    }
    return $conn;
};

$container['documentRoot'] = function($container) use (&$documentRoot){
    return $documentRoot;
};

$container['session'] = function($container) use (&$documentRoot){
    $session = new \Aquits\General\Session($documentRoot);
    $session->start();
    $session->expires(3600);
    return $session;
};

$container['dataStore'] = function($container){
    return new \Aquits\DataStore\Manager($container);
};

$container['controller'] = function($container){
    return new \Aquits\Controller\Manager($container);
};

$app->add(function($req,$res,$next){
    $uri = $req->getUri();
    $path = $uri->getPath();

    $format = 'Y-m-d';
    $date = new \MomentPHP\MomentPHP;
    $date = $date->format($format);

    if(($path !== '/') && (substr($path,-1,1) === '/')){
        return $next($req->withUri($uri->withPath(substr($path,0,-1))),$res);
    }
    return $next($req,$res);
});

$app->map(['post','get'],'/',function(Request $req, Response $res,$args){
    $res = $res->withHeader('Content-Type', 'text/html');
    $body = $res->getBody();

    if(isset($_SESSION['id']) && is_int($_SESSION['id'])){
        $body->write($this->view->render('aquits/app.joinaquits.com/welcome.html'));
    }else{
        $body->write($this->view->render('aquits/app.joinaquits.com/welcome.html'));
    }

    return $res;
});

require "{$documentRoot}/server/requests/index.php";

$app->run();