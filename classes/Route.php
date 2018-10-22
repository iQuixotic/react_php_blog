<?php

class Route {
    public static $validRoutes = array();

    public function set($route, $function) {
        self::$validRoutes[] = $route;

        print_r(self::$validRoutes);
        echo $_GET['url'];
        if($_GET['url'] == $route) {
            $function->__invoke();
        }
    }
}

?>