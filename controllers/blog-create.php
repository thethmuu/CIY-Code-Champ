<?php
$config = require('config.php');
$db = new Database($config['database']);

require "Validator.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $errors = [];

    $validator = new Validator();

    if (!$validator::string($_POST['body'], 1, 100)) {
        $errors['body'] = 'body of no more than 100 words is required';
    }

    if (empty($errors)) {
        $db->query('INSERT INTO blogs(title, body, user_id) VALUES(:title, :body, :user_id)', [
            'title' => $_POST['title'],
            'body' => trim($_POST['body']),
            'user_id' => 1
        ]);
    }
}

// dd($_SERVER['REQUEST_METHOD']);
// dd($_POST);

require("views/blog-create.view.php");
