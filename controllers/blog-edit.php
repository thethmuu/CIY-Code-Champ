<?php
$config = require('config.php');
$db = new Database($config['database']);

$blog = $db->query('select * from blogs where id = :id', ['id' => $_GET['id']])->fetch();

if (!$blog) {
    abort();
}

$current_user_id = 1;

if ($blog['user_id'] !== $current_user_id) {
    abort(403);
}

require("views/blog-edit.view.php");
