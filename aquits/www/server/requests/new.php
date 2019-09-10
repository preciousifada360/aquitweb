<?php
require("vendor/autoload.php");
$openapi = \OpenApi\scan('/home/fortune/Documents/aquits');
header('Content-Type: application/x-yaml');
echo $openapi->toYaml();