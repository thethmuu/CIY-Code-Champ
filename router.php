<?php

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$routes = [
    "/" => "controllers/index.php",
    "/about" => "controllers/about.php",
    "/contact" => "controllers/contact.php",
    "/blog" => "controllers/blog.php",
    "/blogs" => "controllers/blogs.php",
    "/blogs/create" => "controllers/blog-create.php",
    "/blogs/edit" => "controllers/blog-edit.php"
];

function routeToController($uri, $routes)
{
    if (array_key_exists($uri, $routes)) {
        require $routes[$uri];
    } else {
        abort();
    }
}

function abort($code = 404)
{
    http_response_code($code);

    return "views/{$code}.view.php";

    die();
}

routeToController($uri, $routes);
