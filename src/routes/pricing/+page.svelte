<script lang="ts">
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';

  interface PricingFeature {
    text: string;
    starter: boolean;
    professional: boolean;
    enterprise: boolean;
    tooltip?: string;
  }

  interface FAQ {
    question: string;
    answer: string;
  }

  const detailedFeatures: PricingFeature[] = [
    {
      text: "Auto-Provisioned Website",
      starter: true,
      professional: true,
      enterprise: true,
      tooltip: "Professional website automatically created and customized for your business"
    },
    {
      text: "Custom Domain Setup",
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      text: "SSL Certificate & Security",
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      text: "Mobile Responsive Design",
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      text: "Basic Marketing Funnel",
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      text: "Advanced Marketing Funnels",
      starter: false,
      professional: true,
      enterprise: true,
      tooltip: "Multiple funnel types: lead generation, sales, webinar, and more"
    },
    {
      text: "A/B Testing for Funnels",
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      text: "Email Newsletter Automation",
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      text: "SMS Campaign Automation",
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      text: "Advanced Email Sequences",
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      text: "Customer Database (500 contacts)",
      starter: true,
      professional: false,
      enterprise: false
    },
    {
      text: "Customer Database (Unlimited)",
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      text: "Basic Analytics Dashboard",
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      text: "Advanced Analytics & Reporting",
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      text: "Custom Reporting",
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      text: "Social Media Integration",
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      text: "Google Analytics Integration",
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      text: "Facebook Pixel Integration",
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      text: "Custom Branding Options",
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      text: "White-Label Options",
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      text: "API Access",
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      text: "Webhook Integration",
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      text: "Email Support",
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      text: "Priority Chat Support",
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      text: "Phone Support",
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      text: "Dedicated Account Manager",
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      text: "Custom Training Sessions",
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      text: "SLA Guarantee",
      starter: false,
      professional: false,
      enterprise: true
    }
  ];

  const faqs: FAQ[] = [
    {
      question: "How quickly can I get started?",
      answer: "Once you sign up and provide your business information, we can have your marketing system auto-provisioned within 24-48 hours. This includes your website, initial marketing funnel, and email campaigns."
    },
    {
      question: "Do I need any technical skills?",
      answer: "Absolutely not! That's the whole point of Next in Chair. We handle all the technical aspects - website creation, funnel setup, email automation, and more. You just provide your business information and we do the rest."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your marketing materials will remain active until the end of your current billing period."
    },
    {
      question: "What if I want to upgrade or downgrade my plan?",
      answer: "You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle. We'll help migrate your data and ensure a smooth transition."
    },
    {
      question: "Do you provide the content for my marketing materials?",
      answer: "We provide the framework and automation, but you'll need to provide your business-specific content like your value proposition, services, pricing, and brand messaging. We'll guide you through what's needed."
    },
    {
      question: "How is this different from DIY platforms like Wix or Squarespace?",
      answer: "Unlike DIY platforms where you have to design and build everything yourself, Next in Chair auto-provisions your entire marketing system. We create your website, set up your funnels, configure your email campaigns, and manage the technical aspects so you can focus on running your business."
    },
    {
      question: "What kind of results can I expect?",
      answer: "While results vary by business and industry, our clients typically see a 40-60% increase in leads within the first 3 months and a 25-40% increase in customer acquisition. We provide detailed analytics so you can track your progress."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees! Your monthly subscription covers everything including the initial setup and ongoing management of your marketing system."
    }
  ];

  let billingCycle: 'monthly' | 'yearly' = 'monthly';
  let openFAQ: number | null = null;

  function toggleBilling() {
    billingCycle = billingCycle === 'monthly' ? 'yearly' : 'monthly';
  }

  function toggleFAQ(index: number) {
    openFAQ = openFAQ === index ? null : index;
  }

  function getPrice(basePrice: number) {
    if (billingCycle === 'yearly') {
      return Math.floor(basePrice * 0.8); // 20% discount
    }
    return basePrice;
  }

  function getYearlySavings(basePrice: number) {
    return Math.floor(basePrice * 12 * 0.2); // 20% savings
  }
</script>

<svelte:head>
  <title>Pricing - Next in Chair | Automated Marketing Plans</title>
  <meta name="description" content="Choose the perfect automated marketing plan for your small business. Starter at $97/month, Professional at $197/month, Enterprise at $397/month. No setup fees." />
  <meta name="keywords" content="marketing automation pricing, small business marketing plans, automated marketing cost, marketing platform pricing" />
  <meta property="og:title" content="Pricing - Next in Chair | Automated Marketing Plans" />
  <meta property="og:description" content="Affordable monthly plans for automated marketing. From $97/month with no setup fees or long-term contracts." />
</svelte:head>

<div class="min-h-screen salon-bg-elegant">
  <Header />
   <main class="pt-20 pb-16">
    <!-- Hero Section -->
    <section class="py-16 salon-bg-sophisticated">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold salon-heading mb-6">
          Simple, Transparent
          <span class="block salon-text-warm">
            Pricing
          </span>
        </h1>
        <p class="text-xl salon-body-text max-w-3xl mx-auto mb-8">
          Choose the plan that fits your business needs. All plans include auto-provisioned marketing materials, no setup fees, and no long-term contracts.
        </p>
             <!-- Billing toggle -->
        <div class="flex items-center justify-center space-x-4 mb-12">
          <span class="salon-body-text" class:salon-heading={billingCycle === 'monthly'}>Monthly</span>
          <button 
            on:click={toggleBilling}
            class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            class:salon-gradient-primary={billingCycle === 'yearly'}
            class:from-pink-500={billingCycle === 'yearly'}
            class:to-orange-500={billingCycle === 'yearly'}
          >
            <span class="sr-only">Toggle billing cycle</span>
            <span 
              class="inline-block h-4 w-4 transform rounded-full bg-white transition"
              class:translate-x-6={billingCycle === 'yearly'}
              class:translate-x-1={billingCycle === 'monthly'}
            ></span>
          </button>
          <span class="salon-body-text" class:salon-heading={billingCycle === 'yearly'}>
            Yearly 
            <span class="salon-text-warm font-semibold">(Save 20%)</span>
          </span>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Starter Plan -->
          <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-white mb-2">Starter</h3>
              <div class="mb-4">
                <span class="text-4xl font-bold text-white">${getPrice(97)}</span>
                <span class="text-gray-400">/{billingCycle === 'yearly' ? 'month, billed yearly' : 'month'}</span>
                {#if billingCycle === 'yearly'}
                  <div class="text-green-400 text-sm mt-1">
                    Save ${getYearlySavings(97)} per year
                  </div>
                {/if}
              </div>
              <p class="text-gray-300 text-sm">Perfect for solo entrepreneurs and small businesses just getting started</p>
            </div>
            <a href="#signup" class="outline-button w-full px-6 py-3 rounded-lg text-center font-semibold transition-all duration-200 block mb-8">
              Start with Starter
            </a>
          </div>

          <!-- Professional Plan -->
          <div class="relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div class="bg-gray-800 rounded-2xl p-8 border border-orange-500 shadow-2xl shadow-orange-400 hover:scale-105 transition-all duration-300">
              <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-white mb-2">Professional</h3>
                <div class="mb-4">
                  <span class="text-4xl font-bold text-white">${getPrice(197)}</span>
                  <span class="text-gray-400">/{billingCycle === 'yearly' ? 'month, billed yearly' : 'month'}</span>
                  {#if billingCycle === 'yearly'}
                    <div class="text-green-400 text-sm mt-1">
                      Save ${getYearlySavings(197)} per year
                    </div>
                  {/if}
                </div>
                <p class="text-gray-300 text-sm">Ideal for growing businesses that need comprehensive marketing automation</p>
              </div>
              <a href="#signup" class="gradient-button w-full px-6 py-3 rounded-lg text-center font-semibold transition-all duration-200 block mb-8">
                Upgrade to Professional
              </a>
            </div>
          </div>

          <!-- Enterprise Plan -->
          <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <div class="mb-4">
                <span class="text-4xl font-bold text-white">${getPrice(397)}</span>
                <span class="text-gray-400">/{billingCycle === 'yearly' ? 'month, billed yearly' : 'month'}</span>
                {#if billingCycle === 'yearly'}
                  <div class="text-green-400 text-sm mt-1">
                    Save ${getYearlySavings(397)} per year
                  </div>
                {/if}
              </div>
              <p class="text-gray-300 text-sm">For established businesses requiring custom solutions and dedicated support</p>
            </div>
            <a href="#contact" class="outline-button w-full px-6 py-3 rounded-lg text-center font-semibold transition-all duration-200 block mb-8">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Comparison Table -->
    <section class="py-16 bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            Compare All Features
          </h2>
          <p class="text-xl text-gray-300">
            See exactly what's included in each plan
          </p>
        </div>

        <div class="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-800">
                <tr>
                  <th class="px-6 py-4 text-left text-white font-semibold">Features</th>
                  <th class="px-6 py-4 text-center text-white font-semibold">Starter</th>
                  <th class="px-6 py-4 text-center text-white font-semibold">Professional</th>
                  <th class="px-6 py-4 text-center text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {#each detailedFeatures as feature, index}
                  <tr class="border-t border-gray-700" class:bg-gray-850={index % 2 === 0}>
                    <td class="px-6 py-4 text-gray-300">
                      {feature.text}
                      {#if feature.tooltip}
                        <span class="ml-2 text-gray-500 text-sm">ⓘ</span>
                      {/if}
                    </td>
                    <td class="px-6 py-4 text-center">
                      {#if feature.starter}
                        <svg class="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      {:else}
                        <svg class="w-5 h-5 text-gray-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      {/if}
                    </td>
                    <td class="px-6 py-4 text-center">
                      {#if feature.professional}
                        <svg class="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      {:else}
                        <svg class="w-5 h-5 text-gray-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      {/if}
                    </td>
                    <td class="px-6 py-4 text-center">
                      {#if feature.enterprise}
                        <svg class="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      {:else}
                        <svg class="w-5 h-5 text-gray-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      {/if}
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-300">
            Everything you need to know about our pricing and plans
          </p>
        </div>

        <div class="space-y-4">
          {#each faqs as faq, index}
            <div class="bg-gray-800 rounded-lg border border-gray-700">
              <button 
                on:click={() => toggleFAQ(index)}
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-750 transition-colors duration-200"
              >
                <span class="text-white font-semibold">{faq.question}</span>
                <svg 
                  class="w-5 h-5 text-gray-400 transition-transform duration-200"
                  class:rotate-180={openFAQ === index}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {#if openFAQ === index}
                <div class="px-6 pb-4">
                  <p class="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-black">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Automate Your Marketing?
        </h2>
        <p class="text-xl text-gray-300 mb-8">
          Join thousands of small businesses that have automated their marketing with Next in Chair
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#signup" class="gradient-button px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2">
            <span>Start Your Free Trial</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="#contact" class="outline-button px-8 py-4 rounded-lg text-lg font-semibold">
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  </main>
  
  <Footer />
</div>

<style>
  .bg-gray-850 {
    background-color: #1f2937;
  }
  
  .bg-gray-750 {
    background-color: #374151;
  }
</style>

