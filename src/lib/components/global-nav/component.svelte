<script lang="ts">
    import { page } from '$app/stores';
</script>
   
<header class="font-title flex items-center justify-center bg-white px-6 md:px-4 h-[60px] flex-none w-full">
    <div class="flex items-center justify-between max-w-6xl w-full">
        <a data-sveltekit-preload-data class="text-sm text-black tracking-wide" href="/">OWAINL.co</a>
        <ul class='flex space-x-4 md:space-x-8'>
            <li><a data-sveltekit-preload-data class="text-xs hover:underline {$page.url.pathname === '/about' ? 'font-bold underline' : ''}" href="/about">About</a></li>
            <li><a data-sveltekit-preload-data class="text-xs hover:underline {$page.url.pathname.startsWith('/notes') ? 'font-bold underline' : ''}" href="/notes">Notes</a></li>
            <li><a data-sveltekit-preload-data class="text-xs hover:underline {$page.url.pathname.startsWith('/books') ? 'font-bold underline' : ''}" href="/books">Books</a></li>
            <li><a class="text-xs hover:underline" href="mailto:owain.llew@gmail.com?subject=Website%20enquiry">Contact</a></li>
        </ul>
    </div>
</header>