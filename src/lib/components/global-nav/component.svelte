<script lang="ts">
    import { page } from '$app/stores';
    import { fade } from 'svelte/transition';
</script>
   
<header class="font-title flex items-center justify-center bg-white px-6 md:px-4 h-[60px] flex-none w-full">
    <div class="flex items-center justify-between max-w-6xl w-full">
        <a data-sveltekit-preload-data class="text-sm text-black tracking-wide" href="/" in:fade={{ delay: 0 }}>OWAINL.co</a>
        <ul class='flex space-x-4 md:space-x-8'>
            <li><a data-sveltekit-preload-data class="nav-link text-xs {$page.url.pathname === '/about' ? 'font-bold underline' : ''}" href="/about" in:fade={{ delay: 500 }}>About</a></li>
            <li><a class="nav-link text-xs" href="mailto:owain.llew@gmail.com?subject=Website%20enquiry" in:fade={{ delay: 1000 }}>Contact</a></li>
        </ul>
    </div>
</header>

<style>

header {
    position: relative;
}

header > div {
    opacity: 0;
    transform: translateY(-50px);
    animation: dropDown 0.6s 0.5s ease forwards;
}

@keyframes dropDown {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.nav-link {
    position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0%;
  width: 0;
  height: 1px;
  background-color: black;
  transition: width 0.3s ease;
  text-decoration: none;
}

.nav-link:hover::after {
  width: 100%;
}
</style>