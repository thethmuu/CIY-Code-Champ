<?php require('partials/head.php') ?>
<?php require('partials/navbar.php') ?>

<!-- main -->
<main>
    <div class="max-w-7xl mx-auto py-6">
        <?php foreach ($blogs as $blog) : ?>
            <li>
                <a href="/blog?id=<?= $blog['id'] ?>"><?= $blog['title'] ?></a>
            </li>
        <?php endforeach; ?>
    </div>
</main>

<?php require('partials/footer.php') ?>