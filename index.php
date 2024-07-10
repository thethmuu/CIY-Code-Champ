<?php

require 'functions.php';
require 'router.php';
require 'Database.php';

// new PDO(dsn)
// dsn = data source name (connection string)

$config = require('config.php');
$db = new Database($config['database']);
$query = "select * from posts where id = :id";
$posts = $db->query($query, [':id' => $_GET['id']])->fetch();

dd($posts);

foreach ($posts as $post) {
    echo "<li>" . $post['title'] . "</li>";
}
