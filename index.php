<?php

// require_once('routes/index.php');
require_once('client/public/index.html');


function __autoload($class_name) {
    require_once './classes/'.$class_name.'.php';
}

// echo 'hello';
