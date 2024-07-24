<?php



const BASE_PATH = __DIR__ . "/";

function dd($value)
{
    echo "<pre>";
    var_dump($value);
    echo "</pre>";

    die();
}

function urlIs($url)
{
    return $_SERVER['REQUEST_URI'] === $url;
}

function authorize($condition, $status = Response::FORBIDDEN)
{
    if (!$condition) {
        abort($status);
    }
}

function base_path($path)
{
    return BASE_PATH . $path;
}

function view($path, $attr = [])
{
    extract($attr);

    require base_path('views/' . $path);
}

// dd(base_path('views/' . 'index.view.php'));
