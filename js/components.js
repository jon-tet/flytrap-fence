/**
 * Flytrap Fence - Global Components
 * Nav and Footer rendered from a single source of truth
 */

// Cache for company data
let companyData = null;

// Load company data once
async function loadCompanyData() {
    if (!companyData) {
        companyData = await fetch('/content/company.json').then(r => r.json());
    }
    return companyData;
}

// Render the navigation
async function renderNav(containerId = 'site-nav') {
    const co = await loadCompanyData();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.outerHTML = `
    <nav class="nav" id="navbar">
        <div class="nav-container">
            <a href="/" class="logo">
                <img src="${co.logo}" alt="${co.name}" class="logo-img">
            </a>
            <ul class="nav-links">
                <li class="nav-dropdown">
                    <a href="/#services" class="nav-dropdown-trigger">
                        Services <i data-lucide="chevron-down"></i>
                    </a>
                    <div class="nav-dropdown-menu">
                        <a href="/services/wood-fences.html">Wood Fences</a>
                        <a href="/services/vinyl-fences.html">Vinyl Fences</a>
                        <a href="/services/aluminum-fences.html">Aluminum Fences</a>
                        <a href="/services/chain-link-fences.html">Chain Link Fences</a>
                    </div>
                </li>
                <li><a href="/#gallery">Our Work</a></li>
                <li><a href="/#reviews">Reviews</a></li>
                <li><a href="/about.html">About</a></li>
                <li><a href="/#contact" class="nav-cta">Get a Free Quote</a></li>
            </ul>
            <button class="hamburger" id="hamburger" aria-label="Menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </nav>

    <div class="mobile-menu" id="mobileMenu">
        <a href="/services/wood-fences.html">Wood Fences</a>
        <a href="/services/vinyl-fences.html">Vinyl Fences</a>
        <a href="/services/aluminum-fences.html">Aluminum Fences</a>
        <a href="/services/chain-link-fences.html">Chain Link Fences</a>
        <a href="/#gallery">Our Work</a>
        <a href="/#reviews">Reviews</a>
        <a href="/about.html">About</a>
        <a href="/#contact">Get a Free Quote</a>
    </div>`;
}

// Render the footer
async function renderFooter(containerId = 'site-footer') {
    const co = await loadCompanyData();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.outerHTML = `
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-main">
                <div class="footer-brand">
                    <img src="${co.logo}" alt="${co.name}" class="footer-logo-img">
                    <p>Professional fence installation serving Wilmington and the Cape Fear region. Quality craftsmanship backed by a 5-year warranty.</p>
                </div>
                <div class="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="/services/wood-fences.html">Wood Fences</a></li>
                        <li><a href="/services/vinyl-fences.html">Vinyl Fences</a></li>
                        <li><a href="/services/aluminum-fences.html">Aluminum Fences</a></li>
                        <li><a href="/services/chain-link-fences.html">Chain Link Fences</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Service Areas</h4>
                    <ul>
                        <li><a href="/#contact">Wilmington, NC</a></li>
                        <li><a href="/#contact">Leland, NC</a></li>
                        <li><a href="/#contact">Hampstead, NC</a></li>
                        <li><a href="/#contact">Carolina Beach</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/#gallery">Our Work</a></li>
                        <li><a href="/#reviews">Reviews</a></li>
                        <li><a href="/#contact">Get a Quote</a></li>
                        <li><a href="/about.html">About Joe</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} ${co.name}, LLC. All rights reserved.</p>
                <div class="social-links">
                    <a href="${co.facebook}" aria-label="Facebook" target="_blank" rel="noopener">
                        <i data-lucide="facebook"></i>
                    </a>
                    <a href="${co.instagram}" aria-label="Instagram" target="_blank" rel="noopener">
                        <i data-lucide="instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>`;
}

// Initialize mobile menu functionality
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }
}

// Initialize nav scroll behavior
function initNavScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });
}

// Initialize all global components
async function initGlobalComponents() {
    await Promise.all([
        renderNav(),
        renderFooter()
    ]);

    // Re-initialize Lucide icons for the new elements
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Initialize functionality
    initMobileMenu();
    initNavScroll();
}

// Export for use
window.FlytrapComponents = {
    renderNav,
    renderFooter,
    initMobileMenu,
    initNavScroll,
    initGlobalComponents,
    loadCompanyData
};
