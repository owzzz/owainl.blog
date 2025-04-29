<script>
  import CenteredContent from '$lib/components/centered-content/component.svelte';
</script>

<CenteredContent>
  <h1 class="font-title text-3xl md:text-4xl tracking-wide leading-normal flex flex-col">
    <div class="mask-container" data-element="mask-0">
      <span class="text-gray-500 text-md">Owain Llewellyn<br /></span>
    </div>

    <div class="mask-container" data-element="mask-1">
      <span class="text-4xl md:text-6xl mt-2 block pb-[5px]">
        Full Stack Engineer
      </span>
    </div>

    <div class="mask-container" data-element="mask-2">
      <span class="inline-block mt-2">&amp; UX Designer<span class="animate-blink">_</span></span>
    </div>
  </h1>

  <div class="content !space-y-1 mt-6">
    <p>Passionate About Digital Technologies, Great Design and Clever Entrepreneurial Ideas.</p>
    <p>Building Tools @ Apple.</p>
    <p>Austin, Texas.</p>
  </div>

  <div class="social-links mt-24 text-xs text-black hover:text-gray-700 tracking-wide">
    <ul class="flex items-center divide-x divide-black grid-cols-4 gap-[10px] ml-[-10px]">
      <li>
        <a class="nav-link" href="https://x.com/Owzzz" target="_blank">X</a>
      </li>
      <li>
        <a class="nav-link" href="https://www.linkedin.com/in/owainllewellyn/" target="_blank">Linkedin</a>
      </li>
      <li>
        <a class="nav-link" href="http://github.com/owzzz" target="_blank">Github</a>
      </li>
      <li>
        <a class="nav-link" href="/owain_llewellyn_resume_2024.pdf" download target="_blank">Resume</a>
      </li>
    </ul>
  </div>
</CenteredContent>

<style>
.mask-container {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.mask-container > span {
  display: block;
  transform: translateY(100%);
  opacity: 0;
  transform-origin: bottom;
}

.mask-container[data-element="mask-0"] > span {
  animation: slideUp 0.3s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.mask-container[data-element="mask-1"] > span {
  animation: slideUp 0.3s 1.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.mask-container[data-element="mask-2"] > span {
  animation: slideUp 0.3s 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.content {
  opacity: 0;
  animation: fadeIn 0.5s 1.6s ease-in forwards;
}

.social-links {
  opacity: 0;
  animation: fadeIn 0.5s 1.7s ease-in forwards;
}

.nav-link {
    position: relative;
    margin-left: 10px;
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

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}

</style>