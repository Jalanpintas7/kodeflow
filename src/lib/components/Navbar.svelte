<script>
  import logo from '$lib/assets/logo&teks.png';
  import { onMount } from 'svelte';
  
  let links = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blogs', href: '/blogs' }
  ];

  let isNavbarVisible = true;
  let isMobileMenuOpen = false;
  let lastScrollY = 0;
  let scrollTimeout;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    // Prevent body scroll when menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  onMount(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Clear previous timeout
      clearTimeout(scrollTimeout);
      
      // Set timeout untuk delay sedikit sebelum hide navbar
      scrollTimeout = setTimeout(() => {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & passed threshold
          isNavbarVisible = false;
        } else {
          // Scrolling up or at top
          isNavbarVisible = true;
        }
        lastScrollY = currentScrollY;
      }, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      // Restore body overflow when component unmounts
      document.body.style.overflow = '';
    };
  });
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out {isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}">
  <div class="max-w-7xl mx-auto backdrop-blur bg-primary-background/95">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-20 items-center justify-between">
      <a href="/" class="flex items-center">
        <img src={logo} alt="Kodeflow Logo" class="h-10 w-auto" />
      </a>

      <div class="hidden md:flex items-center gap-2 text-sm" style="color: var(--color-text-2)">
        {#each links as link}
          <a class="nav-link" href={link.href}>{link.label}</a>
        {/each}
      </div>

      <div class="flex items-center gap-3">
        <a href="/contact" class="nav-btn-primary">Book a Call</a>

        <button 
          class="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white" 
          aria-label="Toggle mobile menu"
          on:click={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
            {#if isMobileMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            {/if}
          </svg>
        </button>
      </div>
      </div>
    </div>
    

    <!-- Mobile menu sidebar -->
    <div class="md:hidden fixed top-0 right-0 bottom-0 w-80 bg-white/95 backdrop-blur-sm shadow-xl z-50 transform transition-transform duration-300 ease-in-out {isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}">
      <div class="flex flex-col h-full min-h-screen">
        <!-- Mobile menu header -->
        <div class="flex items-center justify-between p-4 bg-white/90">
          <img src={logo} alt="Kodeflow Logo" class="h-10 w-auto " />
          <button 
            class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
            on:click={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-gray-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Mobile menu links -->
        <div class="flex-1 px-4 py-6 space-y-4 bg-white/95">
          {#each links as link}
            <a 
              class="block py-3 text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors duration-200" 
              href={link.href}
              on:click={closeMobileMenu}
            >
              {link.label}
            </a>
          {/each}
        </div>
        
        <!-- Mobile menu footer -->
        <div class="p-4 border-t border-gray-200 bg-white/90">
          <a 
            href="/contact" 
            class="nav-btn-primary-mobile w-full text-center"
            on:click={closeMobileMenu}
          >
            Book a Call
          </a>
        </div>
      </div>
    </div>
    
    <!-- Border dotted container -->
    <div class="max-w-7xl mx-auto">
      <div class="h-2 bg-primary-background relative">
        <div class="absolute top-0 left-0 right-0 h-2" style="background-image: radial-gradient(circle, var(--color-border-dotted) 1px, transparent 1px); background-size: 6px 6px; background-repeat: repeat-x; background-position: 0 50%;"></div>
      </div>
    </div>
  </div>
</nav>

<!-- Mobile menu overlay (outside navbar) -->
{#if isMobileMenuOpen}
  <div 
    class="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-all duration-300"
    on:click={closeMobileMenu}
    role="button"
    tabindex="0"
    on:keydown={(e) => e.key === 'Escape' && closeMobileMenu()}
  ></div>
{/if}

<style>
  /* Navigation Link Styles */
  .nav-link {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    border-radius: 24px;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid transparent;
    color: var(--color-text-2);
  }

  /* Navigation link hover animation */
  .nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
  }

  .nav-link:hover::before {
    left: 100%;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, #f3f4f6, #e5e7eb, #d1d5db);
    transition: width 0.3s ease;
    z-index: -1;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .nav-link:hover {
    border-color: rgba(0,0,0,0.1);
  }

  /* Navigation Button Primary (Desktop) */
  .nav-btn-primary {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    text-decoration: none;
    display: none;
    align-items: center;
    border-radius: 9999px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #000;
    color: #fff;
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
    z-index: 1;
  }

  @media (min-width: 768px) {
    .nav-btn-primary {
      display: inline-flex;
    }
  }

  /* Primary button hover animation */
  .nav-btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
    border-radius: 9999px;
    z-index: 1;
  }

  .nav-btn-primary:hover::before {
    left: 100%;
  }

  .nav-btn-primary::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, var(--color-purple-primary), var(--color-purple-light));
    transition: width 0.3s ease;
    z-index: -1;
    border-radius: 9999px;
  }

  .nav-btn-primary:hover::after {
    width: 100%;
  }

  .nav-btn-primary:hover {
    color: #fff;
  }

  /* Navigation Button Primary (Mobile) */
  .nav-btn-primary-mobile {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    border-radius: 9999px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #000;
    color: #fff;
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
    z-index: 1;
  }

  /* Mobile button hover animation */
  .nav-btn-primary-mobile::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
    border-radius: 9999px;
    z-index: 1;
  }

  .nav-btn-primary-mobile:hover::before {
    left: 100%;
  }

  .nav-btn-primary-mobile::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, var(--color-purple-primary), var(--color-purple-light));
    transition: width 0.3s ease;
    z-index: -1;
    border-radius: 9999px;
  }

  .nav-btn-primary-mobile:hover::after {
    width: 100%;
  }

  .nav-btn-primary-mobile:hover {
    color: #fff;
  }
</style>


