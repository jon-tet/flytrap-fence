// Shared Navigation and Footer Components
// Flytrap Fence Company

(function() {
    // Current page detection
    const currentPath = window.location.pathname;
    const isAboutPage = currentPath.includes('about');
    const isHomePage = currentPath === '/' || currentPath.includes('index');

    // Navigation HTML
    const navHTML = `
        <nav class="nav" id="mainNav">
            <div class="nav-container">
                <a href="/" class="logo">
                    <img src="https://static.wixstatic.com/media/59f101_063e0164581d4bd99618bbc958cc6cdb~mv2.png" alt="Flytrap Fence Company" class="logo-img">
                </a>
                <ul class="nav-links">
                    <li><a href="/#services"${isHomePage ? '' : ''}>Services</a></li>
                    <li><a href="/#gallery">Our Work</a></li>
                    <li><a href="/#reviews">Reviews</a></li>
                    <li><a href="/about.html"${isAboutPage ? ' class="active"' : ''}>About</a></li>
                    <li><a href="/#contact" class="nav-cta">Get a Free Quote</a></li>
                </ul>
                <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
        <div class="mobile-nav" id="mobileNav">
            <ul class="mobile-nav-links">
                <li><a href="/#services">Services</a></li>
                <li><a href="/#gallery">Our Work</a></li>
                <li><a href="/#reviews">Reviews</a></li>
                <li><a href="/about.html"${isAboutPage ? ' class="active"' : ''}>About</a></li>
                <li><a href="/#contact" class="nav-cta-mobile">Get a Free Quote</a></li>
            </ul>
        </div>
    `;

    // Footer HTML
    const footerHTML = `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-main">
                    <div class="footer-brand">
                        <img src="https://static.wixstatic.com/media/59f101_063e0164581d4bd99618bbc958cc6cdb~mv2.png" alt="Flytrap Fence Company" class="footer-logo-img">
                        <p>Professional fence installation serving Wilmington and the Cape Fear region. Quality craftsmanship backed by a 5-year warranty.</p>
                    </div>
                    <div class="footer-section">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="/#services">Wood Fences</a></li>
                            <li><a href="/#services">Vinyl Fences</a></li>
                            <li><a href="/#services">Aluminum Fences</a></li>
                            <li><a href="/#services">Chain Link Fences</a></li>
                            <li><a href="/#services">Fence Repair</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Service Areas</h4>
                        <ul id="footer-areas">
                            <li><a href="/#contact">Wilmington</a></li>
                            <li><a href="/#contact">Leland</a></li>
                            <li><a href="/#contact">Hampstead</a></li>
                            <li><a href="/#contact">Wrightsville Beach</a></li>
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
                    <p>&copy; ${new Date().getFullYear()} Flytrap Fence Company, LLC. All rights reserved.</p>
                    <p>Proudly serving the Cape Fear region</p>
                </div>
            </div>
        </footer>
    `;

    // Shared CSS for nav and footer (injected once)
    const sharedStyles = `
        /* NAVIGATION */
        .nav {
            position: fixed;
            top: 0; left: 0; right: 0;
            z-index: 1000;
            padding: 1rem 2rem;
            transition: all 0.3s ease;
        }
        .nav.scrolled {
            background: rgba(253, 252, 250, 0.95);
            backdrop-filter: blur(20px);
            box-shadow: 0 4px 30px rgba(26, 51, 41, 0.08);
            padding: 0.75rem 2rem;
        }
        .nav-container {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo { display: flex; align-items: center; text-decoration: none; }
        .logo-img { height: 52px; width: auto; transition: height 0.3s ease; }
        .nav.scrolled .logo-img { height: 44px; }
        .nav-links {
            display: flex;
            align-items: center;
            gap: 2rem;
            list-style: none;
        }
        .nav-links a {
            text-decoration: none;
            color: var(--text-dark);
            font-family: var(--font-heading);
            font-weight: 600;
            font-size: 1rem;
            padding: 0.5rem 0;
            transition: color 0.2s ease;
            text-transform: uppercase;
        }
        .nav-links a:not(.nav-cta):hover { color: var(--green-600); }
        .nav-links a.active { color: var(--green-600); }
        .nav-cta {
            background: var(--green-700);
            color: white !important;
            padding: 0.75rem 1.5rem !important;
            border-radius: var(--radius-sm);
            font-weight: 700 !important;
            transition: background 0.2s ease !important;
        }
        .nav-cta:hover { background: var(--green-800); }

        /* MOBILE MENU BUTTON */
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
            flex-direction: column;
            gap: 5px;
            z-index: 1002;
            position: relative;
        }
        .mobile-menu-btn span {
            display: block;
            width: 26px;
            height: 2px;
            background: var(--green-700);
            border-radius: 2px;
            transition: all 0.3s ease;
        }
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }

        /* MOBILE NAV OVERLAY */
        .mobile-nav {
            display: none;
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: var(--cream-50);
            z-index: 1001;
            padding: 7rem 2rem 2rem;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        .mobile-nav.active {
            transform: translateX(0);
        }
        .mobile-nav-links {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        .mobile-nav-links a {
            font-family: var(--font-heading);
            font-size: 1.75rem;
            font-weight: 600;
            color: var(--green-800);
            text-decoration: none;
            text-transform: uppercase;
            transition: color 0.2s ease;
        }
        .mobile-nav-links a:hover,
        .mobile-nav-links a.active { color: var(--green-600); }
        .mobile-nav-links .nav-cta-mobile {
            display: inline-block;
            background: var(--green-700);
            color: white !important;
            padding: 1rem 2rem;
            border-radius: var(--radius-sm);
            margin-top: 1rem;
            font-size: 1.25rem;
        }

        /* FOOTER */
        .footer {
            background: var(--green-900);
            color: white;
            padding: 4rem 2rem 1.5rem;
        }
        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .footer-main {
            display: grid;
            grid-template-columns: 1.5fr repeat(3, 1fr);
            gap: 3rem;
            margin-bottom: 2rem;
        }
        .footer-logo-img {
            height: 48px;
            width: auto;
            filter: brightness(0) invert(1);
            opacity: 0.95;
            margin-bottom: 0.5rem;
        }
        .footer-brand p {
            margin-top: 1rem;
            color: var(--green-200);
            font-size: 0.9375rem;
            line-height: 1.6;
            max-width: 280px;
        }
        .footer-section h4 {
            font-family: var(--font-heading);
            font-size: 1.125rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: white;
            text-transform: uppercase;
        }
        .footer-section ul { list-style: none; }
        .footer-section li { margin-bottom: 0.625rem; }
        .footer-section a {
            color: var(--green-200);
            text-decoration: none;
            font-size: 0.9375rem;
            transition: color 0.2s ease;
        }
        .footer-section a:hover { color: white; }
        .footer-bottom {
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }
        .footer-bottom p {
            color: var(--green-300);
            font-size: 0.875rem;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
            .footer-main { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
            .nav-links { display: none; }
            .mobile-menu-btn { display: flex; }
            .mobile-nav { display: block; }
            .footer-main { grid-template-columns: 1fr; text-align: center; gap: 2rem; }
            .footer-brand p { max-width: 100%; margin-left: auto; margin-right: auto; }
            .footer-bottom { justify-content: center; text-align: center; }
        }
    `;

    // Inject styles
    function injectStyles() {
        const styleEl = document.createElement('style');
        styleEl.id = 'flytrap-components-styles';
        styleEl.textContent = sharedStyles;
        document.head.appendChild(styleEl);
    }

    // Inject navigation
    function injectNav() {
        const navPlaceholder = document.getElementById('nav-placeholder');
        if (navPlaceholder) {
            navPlaceholder.outerHTML = navHTML;
        } else {
            document.body.insertAdjacentHTML('afterbegin', navHTML);
        }
    }

    // Inject footer
    function injectFooter() {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.outerHTML = footerHTML;
        } else {
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    }

    // Initialize mobile menu
    function initMobileMenu() {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');

        if (menuBtn && mobileNav) {
            menuBtn.addEventListener('click', function() {
                menuBtn.classList.toggle('active');
                mobileNav.classList.toggle('active');
                document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
            });

            // Close menu when clicking a link
            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function() {
                    menuBtn.classList.remove('active');
                    mobileNav.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }
    }

    // Initialize scroll behavior
    function initScrollBehavior() {
        const nav = document.getElementById('mainNav');
        if (nav) {
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            });
            // Check on load
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            }
        }
    }

    // Initialize everything when DOM is ready
    function init() {
        injectStyles();
        injectNav();
        injectFooter();
        initMobileMenu();
        initScrollBehavior();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
