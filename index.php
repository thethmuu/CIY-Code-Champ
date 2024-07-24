<?php

require 'functions.php';

// autoload
spl_autoload_register(function ($class) {
    require base_path($class . ".php");
});

require 'router.php';
