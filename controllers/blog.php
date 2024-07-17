<?php
$config = require('config.php');
$db = new Database($config['database']);

$blog = $db->query('select * from blogs where id = :id', ['id' => $_GET['id']])->fetch();

if (!$blog) {
    abort();
}

require('views/blog.view.php');
