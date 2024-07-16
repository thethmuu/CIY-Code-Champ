<?php
$config = require('config.php');
$db = new Database($config['database']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $db->query('INSERT INTO blogs(title, body, user_id) VALUES(:title, :body, :user_id)', [
        'title' => $_POST['title'],
        'body' => $_POST['body'],
        'user_id' => 1
    ]);
}

// dd($_SERVER['REQUEST_METHOD']);
// dd($_POST);

require("views/blog-create.view.php");
