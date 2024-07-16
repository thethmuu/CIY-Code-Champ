<?php require('partials/head.php') ?>
<?php require('partials/navbar.php') ?>

<!-- main -->
<main class="flex-grow">
    <h2 class="text-center mt-4 text-lg font-medium text-gray-900">All Blog</h2>

    <div class="max-w-7xl mx-auto py-6 flex gap-4 justify-center mt-2">
        <?php foreach ($blogs as $blog) : ?>
            <article class="card bg-base-100 w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"><?= $blog['title'] ?></h2>
                    <!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
                    <div class="card-actions justify-end">
                        <a href="/blog?id=<?= $blog['id'] ?>" class="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div>
            </article>
        <?php endforeach; ?>
    </div>
</main>

<?php require('partials/footer.php') ?>