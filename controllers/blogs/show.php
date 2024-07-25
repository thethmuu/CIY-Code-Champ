<?php

use Core\Database;

$config = require('config.php');
$db = new Database($config['database']);

$blog = $db->query('select * from blogs where id = :id', ['id' => $_GET['id']])->findOrFail();

// require('views/blogs/show.view.php');
view("blogs/show.view.php", ['blog' => $blog]);
