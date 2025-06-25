<script lang="ts">
  import { onMount } from 'svelte';
  
  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<section class="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
  <!-- Background elements -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
  </div>

  <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="space-y-8">
      <!-- Main headline -->
      <div class="space-y-4">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Ready to Transform Your
          <span class="block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Appointment Business?
          </span>
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who have streamlined their operations and grown their business with Next in Chair.
        </p>
      </div>

      <!-- Benefits list -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div class="flex items-center justify-center space-x-3">
          <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-gray-300">Free 14-day trial</span>
        </div>
        <div class="flex items-center justify-center space-x-3">
          <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-gray-300">No credit card required</span>
        </div>
        <div class="flex items-center justify-center space-x-3">
          <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-gray-300">Setup in under 5 minutes</span>
        </div>
      </div>

      <!-- CTA buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a 
          href="#signup" 
          class="gradient-button px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 group"
        >
          <span>Start Your Free Trial</span>
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <a 
          href="#demo" 
          class="outline-button px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 group"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Schedule a Demo</span>
        </a>
      </div>

      <!-- Additional info -->
      <div class="pt-8 border-t border-gray-800">
        <p class="text-sm text-gray-400 mb-4">
          Questions? Our team is here to help.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
          <a href="mailto:support@nextinchair.com" class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>support@nextinchair.com</span>
          </a>
          <a href="tel:+1-555-123-4567" class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+1 (555) 123-4567</span>
          </a>
          <a href="#chat" class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>Live Chat</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes pulse {
    0%, 100% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.2;
    }
  }
  
  .animate-pulse {
    animation: pulse 4s ease-in-out infinite;
  }
  
  .delay-1000 {
    animation-delay: 1s;
  }
</style>

