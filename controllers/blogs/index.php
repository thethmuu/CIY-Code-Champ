<?php
$config = require('config.php');
$db = new Database($config['database']);

$blogs = $db->query('select * from blogs where user_id = 1')->get();

view('blogs/index.view.php', [
    'blogs' => $blogs
]);
