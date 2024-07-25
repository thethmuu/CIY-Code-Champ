<?php

use Core\Database;

$config = require('config.php');
$db = new Database($config['database']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $blog = $db->query('select * from blogs where id = :id', [
        'id' => $_POST['id']
    ])->findOrFail();

    // authorize($blog['user_id'] === $currentUserId);

    $db->query('delete from blogs where id = :id', [
        'id' => $_POST['id']
    ]);

    header('location: /blogs');
    exit();
} else {
    $blog = $db->query('select * from blogs where id = :id', ['id' => $_GET['id']])->findOrFail();

    // require('views/blogs/show.view.php');
    view("blogs/show.view.php", ['blog' => $blog]);
}
