<!-- navbar -->
<nav>
    <ul class="flex items-center gap-3">
        <li><a class="bg-gray-500 px-3 py-2 <?= urlIs('/') ? "text-white bg-gray-900" : "text-gray-300" ?>" href="/">Home</a></li>
        <li><a class="bg-gray-500 px-3 py-2 <?= urlIs('/about') ? "text-white bg-gray-900" : "text-gray-300" ?>" href="/about">About</a></li>
        <li><a class="bg-gray-500 px-3 py-2 <?= urlIs('/contact') ? "text-white bg-gray-900" : "text-gray-300" ?>" href="/contact">Contact</a></li>
    </ul>
</nav>