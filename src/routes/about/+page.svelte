<script lang="ts">
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';

  interface Stat {
    number: string;
    label: string;
    description: string;
  }

  interface Value {
    icon: string;
    title: string;
    description: string;
  }

  const stats: Stat[] = [
    {
      number: "15+",
      label: "Years of Experience",
      description: "Deep expertise in salon marketing"
    },
    {
      number: "100s",
      label: "Salons Helped",
      description: "Successful partnerships across the US"
    },
    {
      number: "6-Figure",
      label: "Growth Achieved",
      description: "Some clients see massive growth in 3 years"
    },
    {
      number: "Above Average",
      label: "Results Delivered",
      description: "Bookings and retention rates exceed industry standards"
    }
  ];

  const values: Value[] = [
    {
      icon: "⏰",
      title: "Time is Precious",
      description: "We understand that salon owners are the busiest people in their business. Every minute counts when you're serving clients, managing staff, and running operations."
    },
    {
      icon: "🎯",
      title: "Industry Expertise",
      description: "Founded by a hair stylist and salon owner, we know the unique challenges of the beauty industry from the inside out."
    },
    {
      icon: "🚀",
      title: "Automation That Works",
      description: "Our systems are pre-designed based on what actually works for salons. No guesswork, no trial and error - just proven results."
    },
    {
      icon: "💰",
      title: "Affordable Excellence",
      description: "Professional marketing shouldn't cost more than you can afford. We bridge the gap between expensive consultants and ineffective DIY solutions."
    }
  ];
</script>

<svelte:head>
  <title>About Us - Next in Chair | Hair Salon Marketing Experts</title>
  <meta name="description" content="Founded by salon professionals with 15+ years of experience. We solve the time and attention problem for busy salon owners with automated marketing systems." />
  <meta name="keywords" content="hair salon marketing, salon automation, beauty industry experts, salon marketing consultants, automated salon marketing" />
  <meta property="og:title" content="About Next in Chair - Hair Salon Marketing Experts" />
  <meta property="og:description" content="15+ years helping salon owners grow their business. Founded by industry insiders who understand your challenges." />
</svelte:head>

<div class="min-h-screen salon-bg-elegant">
  <Header />
   <main class="pt-20 pb-16">
    <!-- Hero Section -->
    <section class="py-16 salon-bg-sophisticated">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold salon-heading mb-6">
          Built by Salon Owners,
          <span class="block salon-text-warm">
            For Salon Owners
          </span>
        </h1>
        <p class="text-xl salon-body-text max-w-3xl mx-auto mb-8">
          We understand the unique challenges of running a salon because we've been there. 
          After 15+ years in the industry, we created the marketing solution we wished existed.
        </p>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 salon-bg-warm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {#each stats as stat}
            <div class="text-center">
              <div class="text-4xl lg:text-5xl font-bold salon-text-warm mb-2">
                {stat.number}
              </div>
              <div class="text-xl font-semibold salon-heading mb-2">{stat.label}</div>
              <div class="salon-text-muted text-sm">{stat.description}</div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-16 bg-black">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Problem We Solve
          </h2>
          <p class="text-xl text-gray-300">
            Every salon owner faces the same impossible choice
          </p>
        </div>

        <div class="space-y-8 text-lg text-gray-300 leading-relaxed">
          <p>
            Today's salon owners face an unprecedented challenge: <strong class="text-white">time and attention</strong>. 
            In an industry where people have shifted to the internet as their source of truth, and social proof 
            plays a crucial role in choosing a new salon, marketing has become more important than ever.
          </p>

          <p>
            Yet salon owners are often the busiest people in their business. Between serving clients, 
            running operations, answering phones, and managing staff, there's simply no time left for the 
            comprehensive marketing their business needs to thrive.
          </p>

          <div class="bg-gray-900 rounded-2xl p-8 border border-gray-700 my-8">
            <h3 class="text-2xl font-bold text-white mb-4">The Impossible Choice</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-3">
                <h4 class="text-lg font-semibold text-red-400">Option 1: Do It Yourself</h4>
                <ul class="text-gray-400 space-y-1">
                  <li>• Design marketing materials</li>
                  <li>• Come up with campaign ideas</li>
                  <li>• Follow up with clients</li>
                  <li>• Manage social media</li>
                  <li>• Send personalized emails</li>
                  <li>• Track and analyze results</li>
                </ul>
                <p class="text-sm text-gray-500 italic">Result: Marketing gets pushed aside at the end of long days</p>
              </div>
              <div class="space-y-3">
                <h4 class="text-lg font-semibold text-red-400">Option 2: Hire Someone</h4>
                <ul class="text-gray-400 space-y-1">
                  <li>• High consultant costs</li>
                  <li>• Typically unaffordable for most salons</li>
                  <li>• Still requires your time to manage</li>
                  <li>• Generic solutions that don't understand salons</li>
                </ul>
                <p class="text-sm text-gray-500 italic">Result: Too expensive for most salon budgets</p>
              </div>
            </div>
          </div>

          <p>
            <strong class="text-white">That's where our moment of realization came:</strong> There were no good options 
            left for salon owners who didn't have time to do their own marketing and couldn't afford expensive services.
          </p>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Solution
          </h2>
          <p class="text-xl text-gray-300">
            Marketing systems that work together, designed specifically for salons
          </p>
        </div>

        <div class="space-y-8 text-lg text-gray-300 leading-relaxed">
          <p>
            We created Next in Chair to solve this exact problem: <strong class="text-white">comprehensive marketing 
            systems that are simple and work together</strong> to cover every aspect of a salon's marketing needs 
            for one low monthly price.
          </p>

          <div class="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 rounded-2xl p-8 border border-orange-500/20">
            <h3 class="text-2xl font-bold text-white mb-4">Our Secret Sauce</h3>
            <p class="text-lg">
              <strong class="text-orange-400">We solve the problem of time and attention.</strong> Salon owners don't have to 
              design and customize marketing materials with Next in Chair. Everything is already designed based on 
              what we know works from 15+ years in the industry. You simply provide your specific information 
              (business info, media files, campaign type) and we do the rest.
            </p>
          </div>

          <p>
            You have control over what you choose to market, but you can feel good knowing you don't have to 
            manage any of it. <strong class="text-white">Automated marketing is crucial for salon owners</strong> because 
            you don't have time to do it yourself, don't have enough money to hire someone to do it, and don't 
            have time to maintain or keep up with it.
          </p>

          <p class="text-xl font-semibold text-white">
            That's what Next in Chair does - we manage it all for you.
          </p>
        </div>
      </div>
    </section>

    <!-- Founder Story -->
    <section class="py-16 bg-black">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            Founded by Industry Insiders
          </h2>
          <p class="text-xl text-gray-300">
            We're not just marketers - we're salon professionals who lived these challenges
          </p>
        </div>

        <div class="bg-gray-900 rounded-2xl p-8 border border-gray-700">
          <div class="text-center mb-8">
            <div class="w-24 h-24 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Our Founding Team</h3>
          </div>
          
          <div class="space-y-6 text-lg text-gray-300">
            <p>
              Next in Chair was founded by a unique combination: <strong class="text-white">a hair stylist and salon owner</strong> 
              who understood the daily challenges of running a salon, partnered with <strong class="text-white">a salon marketing 
              expert who is also a software engineer and digital marketing guru</strong>.
            </p>
            
            <p>
              This combination gives us something no other marketing company has: <strong class="text-orange-400">real, 
              lived experience in the salon industry</strong> combined with deep technical expertise in marketing automation 
              and software development.
            </p>
            
            <p>
              We've been where you are. We've felt the frustration of knowing your salon needs marketing but not having 
              the time or resources to do it properly. That's why we built Next in Chair - it's the solution we wished 
              existed when we were in your shoes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Drives Us
          </h2>
          <p class="text-xl text-gray-300">
            The values that guide everything we do
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each values as value}
            <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
              <div class="text-4xl mb-4">{value.icon}</div>
              <h3 class="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p class="text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section class="py-16 bg-black">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            Real Results for Real Salons
          </h2>
          <p class="text-xl text-gray-300">
            Over 15 years, we've helped hundreds of salons across the United States
          </p>
        </div>

        <div class="space-y-8">
          <div class="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-500/20">
            <h3 class="text-2xl font-bold text-white mb-4">Typical Results</h3>
            <p class="text-lg text-gray-300 mb-4">
              Our clients consistently see <strong class="text-green-400">above-average bookings and retention rates</strong> 
              compared to current industry standards. We don't just help you get new clients - we help you keep them coming back.
            </p>
          </div>

          <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-500/20">
            <h3 class="text-2xl font-bold text-white mb-4">Success Stories</h3>
            <p class="text-lg text-gray-300">
              Some of our clients have achieved <strong class="text-yellow-400">6-figure growth</strong> over their first 
              3 years working with us. From single-chair stylists to multi-chair salon owners, we've helped businesses 
              of all sizes reach their potential.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Location & Team -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            Remote-First, Colorado-Based
          </h2>
          <p class="text-xl text-gray-300">
            Serving salon owners nationwide from the heart of Colorado
          </p>
        </div>

        <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-2xl font-bold text-white mb-4">Our Approach</h3>
              <div class="space-y-4 text-gray-300">
                <p>
                  <strong class="text-white">Remote-first company</strong> based in Colorado, allowing us to work 
                  with salon owners across the entire United States.
                </p>
                <p>
                  We specialize in <strong class="text-orange-400">hair salon owners and independent hair stylists</strong> - 
                  particularly booth renters and salon suite owners who need professional marketing but don't have 
                  the time or budget for traditional solutions.
                </p>
                <p>
                  Our team combines <strong class="text-white">industry experience with technical expertise</strong>, 
                  ensuring every solution we create actually works in the real world of salon operations.
                </p>
              </div>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p class="text-lg text-gray-300">
                <strong class="text-white">Colorado-Based</strong><br>
                Serving Salons Nationwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-black">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Focus on What You Do Best?
        </h2>
        <p class="text-xl text-gray-300 mb-8">
          Let us handle your marketing so you can focus on your clients and growing your salon
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/pricing" class="gradient-button px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2">
            <span>Start Your Marketing System</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="#contact" class="outline-button px-8 py-4 rounded-lg text-lg font-semibold">
            Learn More About Our Story
          </a>
        </div>
      </div>
    </section>
  </main>
  
  <Footer />
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>

