<?php require('partials/head.php') ?>
<?php require('partials/navbar.php') ?>

<!-- main -->
<main>
    <div class="max-w-7xl mx-auto py-6">
        <p>
            <a href="/blogs">All blogs</a>
        </p>

        <h2><?= $blog['title'] ?></h2>
        <p><?= $blog['body'] ?></p>
    </div>
</main>

<?php require('partials/footer.php') ?>