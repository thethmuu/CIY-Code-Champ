<?php

require 'functions.php';
require 'router.php';
require 'Database.php';

// new PDO(dsn)
// dsn = data source name (connection string)

$db = new Database();
$posts = $db->query("select * from posts")->fetchAll(PDO::FETCH_ASSOC);

foreach ($posts as $post) {
    echo "<li>" . $post['title'] . "</li>";
}
