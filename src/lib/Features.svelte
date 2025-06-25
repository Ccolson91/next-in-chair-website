<script lang="ts">
  interface Feature {
    icon: string;
    title: string;
    description: string;
    iconClass: string;
  }

  const features: Feature[] = [
    {
      icon: `<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
      </svg>`,
      title: "Click-to-launch websites",
      description: "Beautiful, mobile-responsive salon websites to showcase your work at the click of a button. No design skills needed - we handle everything.",
      iconClass: "salon-icon-blush"
    },
    {
      icon: `<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>`,
      title: "Marketing Funnels",
      description: "Automated client acquisition funnels that turn website visitors into booked appointments. Proven templates designed specifically for salons.",
      iconClass: "salon-icon-taupe"
    },
    {
      icon: `<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>`,
      title: "Email Campaigns",
      description: "Personalized email sequences for new clients, appointment reminders, and retention campaigns. Keep your chair full with automated follow-ups.",
      iconClass: "salon-icon-plum"
    },
    {
      icon: `<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>`,
      title: "Analytics & Reporting",
      description: "Track your marketing performance with salon-specific metrics. See which campaigns bring in the most valuable clients and highest retention.",
      iconClass: "salon-icon-emerald"
    },
    {
      icon: `<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>`,
      title: "Customer Acquisition",
      description: "Targeted social media campaigns and local SEO optimization to attract new clients in your area. Grow your client base consistently.",
      iconClass: "salon-icon-lavender"
    },
    {
      icon: `<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>`,
      title: "Complete Automation",
      description: "Set it and forget it marketing that works 24/7. From lead capture to appointment booking to follow-up - everything runs automatically.",
      iconClass: "salon-icon-rose"
    }
  ];
</script>

<section id="features" class="py-24 salon-bg-subtle">
  <div class="container mx-auto px-6">
    <div class="text-center mb-20">
      <h2 class="text-4xl md:text-6xl font-bold mb-6">
        <span class="salon-heading">Everything Your Salon Needs to</span><br>
        <span class="salon-text-warm">Attract & Retain Clients</span>
      </h2>
      <p class="text-xl salon-body-text max-w-3xl mx-auto leading-relaxed">
        Stop juggling multiple marketing tools. Our all-in-one platform handles every 
        aspect of your salon's marketing automatically.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {#each features as feature}
        <div class="salon-card rounded-2xl p-8 text-center group salon-hover-lift">
          <div class="w-16 h-16 {feature.iconClass} rounded-2xl flex items-center justify-center mx-auto mb-6 salon-hover-glow transition-all duration-300">
            {@html feature.icon}
          </div>
          <h3 class="text-xl font-bold salon-subheading mb-4">{feature.title}</h3>
          <p class="salon-body-text leading-relaxed">{feature.description}</p>
        </div>
      {/each}
    </div>
    
    <div class="text-center">
      <a 
        href="/pricing" 
        class="salon-button-primary px-10 py-5 rounded-xl text-lg font-semibold inline-flex items-center space-x-3 group salon-hover-lift"
      >
        <span>View Pricing Plans</span>
        <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </a>
    </div>
  </div>
</section>

