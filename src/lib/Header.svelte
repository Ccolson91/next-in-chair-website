<script lang="ts">
  import { onMount } from 'svelte';
  
  let mobileMenuOpen = false;
  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<header class="fixed top-0 left-0 right-0 z-50 salon-bg-sophisticated backdrop-blur-sm border-b border-pink-500/30 shadow-lg">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <div class="flex items-center">
        <a href="/" class="flex items-center space-x-3 group">
          <img 
            src="/NIC_Logo.png" 
            alt="Next in Chair Logo" 
            class="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
          />
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-8">
          <a href="#features" class="salon-body-text hover:text-pink-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Features
          </a>
          <a href="/pricing" class="salon-body-text hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Pricing
          </a>
          <a href="/about" class="salon-body-text hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
            About
          </a>
          <a href="#contact" class="salon-body-text hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Contact
          </a>
        </div>
      </div>

      <!-- Desktop CTA Buttons -->
      <div class="hidden md:flex items-center space-x-4">
        <a href="/login" class="salon-body-text hover:text-pink-400 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          <span>Login</span>
        </a>
        <a href="/register" class="salon-button-primary px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200">
          Get Started
        </a>
        <a href="#demo" class="salon-button-secondary px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200">
          Book a Demo
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          on:click={toggleMobileMenu}
          class="salon-body-text hover:text-pink-400 p-2 rounded-md transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {#if mobileMenuOpen}
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden border-t border-pink-500/30 salon-bg-sophisticated backdrop-blur-sm">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a 
            href="#features" 
            class="salon-body-text hover:text-pink-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
            on:click={closeMobileMenu}
          >
            Features
          </a>
          <a 
            href="/pricing" 
            class="salon-body-text hover:text-purple-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
            on:click={closeMobileMenu}
          >
            Pricing
          </a>
          <a 
            href="/about" 
            class="salon-body-text hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
            on:click={closeMobileMenu}
          >
            About
          </a>
          <a 
            href="#contact" 
            class="salon-body-text hover:text-emerald-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
            on:click={closeMobileMenu}
          >
            Contact
          </a>
          <div class="border-t border-pink-500/30 pt-4 pb-3">
            <div class="flex flex-col space-y-3">
              <a 
                href="/login" 
                class="salon-body-text hover:text-pink-400 px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center space-x-2"
                on:click={closeMobileMenu}
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>Login</span>
              </a>
              <a 
                href="/register" 
                class="salon-button-primary px-4 py-2 rounded-lg text-base font-semibold transition-all duration-200 text-center"
                on:click={closeMobileMenu}
              >
                Get Started
              </a>
              <a 
                href="#demo" 
                class="salon-button-secondary px-4 py-2 rounded-lg text-base font-semibold transition-all duration-200 text-center"
                on:click={closeMobileMenu}
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </nav>
</header>

<style>
  /* Ensure dropdowns appear above other content */
  .group:hover .absolute {
    z-index: 50;
  }
</style>

