<?php
$config = require('config.php');
$db = new Database($config['database']);

if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    $db->query('UPDATE blogs SET title = :title, body = :body WHERE id = :id;', [
        'title' => $POST['title'],
        'body' => $POST['body'],
        'id' => $_POST['id']
    ]);
}

$blog = $db->query('select * from blogs where id = :id', ['id' => $_GET['id']])->fetch();

if (!$blog) {
    abort();
}

$current_user_id = 1;

if ($blog['user_id'] !== $current_user_id) {
    abort(403);
}

require("views/blog-edit.view.php");
