<script lang="ts">
  import { onMount } from 'svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Next in Chair - Automated Marketing for Hair Salons</title>
  <meta name="description" content="Automated marketing solutions designed specifically for hair salon owners. Grow your business while you focus on your craft." />
</svelte:head>

<section class="salon-bg-elegant min-h-screen flex items-center justify-center relative overflow-hidden">
  <!-- Elegant background pattern -->
  <div class="absolute inset-0 opacity-5">
    <div class="absolute top-20 left-20 w-32 h-32 rounded-full salon-icon-blush"></div>
    <div class="absolute top-40 right-32 w-24 h-24 rounded-full salon-icon-lavender"></div>
    <div class="absolute bottom-32 left-40 w-28 h-28 rounded-full salon-icon-taupe"></div>
    <div class="absolute bottom-20 right-20 w-36 h-36 rounded-full salon-icon-rose"></div>
  </div>
  
  <div class="container mx-auto px-6 py-20 text-center relative z-10">
    <div class="max-w-5xl mx-auto">
      <!-- Main headline with sophisticated styling -->
      <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
        <span class="salon-heading">Automated Marketing for</span><br>
        <span class="salon-text-warm text-6xl md:text-8xl">Busy Salon Owners</span>
      </h1>
      
      <!-- Elegant subheadline -->
      <div class="max-w-4xl mx-auto mb-12">
        <p class="text-xl md:text-2xl salon-body-text leading-relaxed">
          Stop struggling with DIY marketing tools. Next In Chair is your salon's 
          <span class="salon-text-warm font-semibold">all-in-one marketing system</span> 
          - automated and fully managed - just for you.
        </p>
      </div>
      
      <!-- Bright trust indicators for dark theme -->
      <div class="flex flex-wrap justify-center items-center gap-8 mb-16 text-sm md:text-base">
        <div class="flex items-center space-x-2 salon-body-text">
          <div class="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-orange-400"></div>
          <span class="font-medium">Easy to setup</span>
        </div>
        <div class="flex items-center space-x-2 salon-body-text">
          <div class="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-400"></div>
          <span class="font-medium">Affordable Monthly Plans</span>
        </div>
        <div class="flex items-center space-x-2 salon-body-text">
          <div class="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
          <span class="font-medium">No Technical Skills Required</span>
        </div>
      </div>
      
      <!-- Centered CTA button -->
      <div class="flex justify-center items-center mb-16">
        <a 
          href="/register" 
          class="salon-button-primary px-10 py-5 rounded-xl text-lg font-semibold inline-flex items-center space-x-3 group salon-hover-lift"
        >
          <span>Create Your Marketing System</span>
          <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
      </div>
      
      <!-- Social proof -->
      <div class="text-center">
        <p class="salon-subheading text-lg mb-8">Trusted by salon owners and stylists nationwide</p>
        
        <div class="flex flex-wrap justify-center items-center gap-6 opacity-70">
          <div class="salon-card px-6 py-3 rounded-lg">
            <span class="salon-text-elegant font-medium">Salon</span>
          </div>
          <div class="salon-card px-6 py-3 rounded-lg">
            <span class="salon-text-elegant font-medium">Suite</span>
          </div>
          <div class="salon-card px-6 py-3 rounded-lg">
            <span class="salon-text-elegant font-medium">Booth</span>
          </div>
          <div class="salon-card px-6 py-3 rounded-lg">
            <span class="salon-text-elegant font-medium">Spa</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Elegant scroll indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <svg class="w-6 h-6 salon-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
</section>

