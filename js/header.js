/* ==========================================================================
   Raijin BJJ Hanoi - Shared Header Component & Navigation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    if (!document.querySelector("link[rel='icon']")) {
        const faviconLink = document.createElement('link');
        faviconLink.rel = 'icon';
        faviconLink.type = 'image/png'; // Change to 'image/x-icon' if using a .ico file
        faviconLink.href = 'assets/images/raijin-favourite-icon.png'; // Update filename if yours is different
        document.head.appendChild(faviconLink);
    }
    const headerContainer = document.getElementById('site-header');
    if (!headerContainer) return;

    // Determine current active page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const navItems = [
        { href: 'index.html', label: 'Home' },
        { href: 'beginners.html', label: 'New to BJJ?' },
        { href: 'timetable.html', label: 'Timetable' },
        { href: 'visiting-hanoi.html', label: 'Visiting Hanoi' },
        { href: 'contact.html', label: 'Contact' }
    ];

    const navLinksHTML = navItems.map(item => {
        const isActive = item.href === currentPage;
        const activeClass = isActive ? 'nav-link active' : 'nav-link';
        const ariaCurrent = isActive ? ' aria-current="page"' : '';
        return `<li><a href="${item.href}" class="${activeClass}"${ariaCurrent}>${item.label}</a></li>`;
    }).join('');

    headerContainer.innerHTML = `
    <header>
      <div class="container header-inner">
        <a href="index.html" class="logo">
          <img src="assets/images/raijin-logo.png" alt="Raijin BJJ Hanoi Logo" class="logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div class="logo-placeholder" aria-hidden="true" style="display:none;">R</div>
          <img src="assets/images/raijin-header.png" alt="Raijin BJJ Hanoi" class="header-logo-text" style="height: 40px; width: auto; object-fit: contain;" />
        </a>
        <button class="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav>
          <ul class="nav-menu">
            ${navLinksHTML}
          </ul>
        </nav>
      </div>
    </header>
  `;

    // Mobile Navigation Toggle & Event Handling
    const menuToggle = headerContainer.querySelector('.mobile-menu-toggle');
    const navMenu = headerContainer.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', (event) => {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});