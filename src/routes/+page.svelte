<script lang="ts">
  import Header from '$lib/Header.svelte';
  import Hero from '$lib/Hero.svelte';
  import TestimonialsSection from '$lib/TestimonialsSection.svelte';
  import Features from '$lib/Features.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
  <title>Next in Chair - Automated Marketing for Small Businesses</title>
  <meta name="description" content="Fully automated marketing platform for small businesses. Auto-provisioned websites, marketing funnels, email campaigns, and more. No technical skills required." />
  <meta name="keywords" content="automated marketing, small business marketing, marketing automation, auto-provisioned websites, email marketing, marketing funnels, small business growth" />
  <meta property="og:title" content="Next in Chair - Automated Marketing for Small Businesses" />
  <meta property="og:description" content="Stop struggling with DIY marketing tools. Next in Chair auto-provisions your entire marketing system so you can focus on running your business." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/NIC_Logo.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Next in Chair" />
  <link rel="canonical" href="https://nextinchair.com" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Next in Chair",
    "description": "Fully automated marketing platform for small businesses",
    "url": "https://nextinchair.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "97",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "2500"
    }
  }
  </script>
</svelte:head>

<div class="min-h-screen salon-bg-elegant">
  <Header />
  
  <main class="pt-20">
    <Hero />
    <Features />
    <TestimonialsSection />
  </main>
  
  <Footer />
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
</style>

