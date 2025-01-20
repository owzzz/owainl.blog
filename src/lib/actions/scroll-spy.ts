import { goto } from '$app/navigation';

export function scrollSpy(node: HTMLElement) {
  const headings = document.querySelectorAll('h4[data-scroll-id]');
  const links = node.querySelectorAll('a[data-scroll-link]');
  let isScrolling = false;
  
  function updateActiveLink() {
    if (isScrolling) return;
    
    let currentSection = '';
    
    headings.forEach((heading) => {
      const top = heading.getBoundingClientRect().top;
      if (top <= 100) {
        currentSection = heading.getAttribute('data-scroll-id') || '';
      }
    });
    
    links.forEach((link) => {
      link.classList.remove('text-gray-900');
      if (link.getAttribute('data-scroll-link') === currentSection) {
        link.classList.add('text-gray-900');
        // Update URL hash without triggering scroll
        if (currentSection && window.location.hash !== `#${currentSection}`) {
          isScrolling = true;
          goto(`#${currentSection}`, { replaceState: true, noScroll: true });
          setTimeout(() => {
            isScrolling = false;
          }, 10);
        }
      }
    });
  }
  
  // Initial check for hash on page load
  setTimeout(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const element = document.querySelector(`[data-scroll-id="${hash}"]`);
      element?.scrollIntoView();
    }
  }, 100);
  
  window.addEventListener('scroll', updateActiveLink);
  
  return {
    destroy() {
      window.removeEventListener('scroll', updateActiveLink);
    }
  };
} 