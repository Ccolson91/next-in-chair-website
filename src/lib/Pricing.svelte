<script lang="ts">
  interface PricingFeature {
    text: string;
    included: boolean;
  }

  interface PricingPlan {
    name: string;
    price: string;
    period: string;
    description: string;
    features: PricingFeature[];
    buttonText: string;
    buttonStyle: string;
    popular?: boolean;
    badge?: string;
  }

  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: "$97",
      period: "per month",
      description: "Perfect for solo entrepreneurs and small businesses just getting started with automated marketing.",
      features: [
        { text: "Auto-provisioned website", included: true },
        { text: "Basic marketing funnel", included: true },
        { text: "Email newsletter automation", included: true },
        { text: "Customer database (up to 500)", included: true },
        { text: "Basic analytics dashboard", included: true },
        { text: "Email support", included: true },
        { text: "Advanced funnels", included: false },
        { text: "SMS campaigns", included: false },
        { text: "Priority support", included: false },
        { text: "Custom integrations", included: false }
      ],
      buttonText: "Start Your Marketing System",
      buttonStyle: "outline-button"
    },
    {
      name: "Professional",
      price: "$197",
      period: "per month",
      description: "Ideal for growing businesses that need comprehensive marketing automation and advanced features.",
      features: [
        { text: "Everything in Starter", included: true },
        { text: "Advanced marketing funnels", included: true },
        { text: "SMS campaign automation", included: true },
        { text: "Unlimited customer database", included: true },
        { text: "Advanced analytics & reporting", included: true },
        { text: "A/B testing tools", included: true },
        { text: "Priority email & chat support", included: true },
        { text: "Custom branding options", included: true },
        { text: "API access", included: false },
        { text: "Dedicated account manager", included: false }
      ],
      buttonText: "Upgrade to Professional",
      buttonStyle: "gradient-button",
      popular: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "$397",
      period: "per month",
      description: "For established businesses requiring custom solutions, advanced integrations, and dedicated support.",
      features: [
        { text: "Everything in Professional", included: true },
        { text: "Custom marketing automation", included: true },
        { text: "Advanced integrations", included: true },
        { text: "White-label options", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Phone support", included: true },
        { text: "Custom training sessions", included: true },
        { text: "API access & webhooks", included: true },
        { text: "Custom reporting", included: true },
        { text: "SLA guarantee", included: true }
      ],
      buttonText: "Contact Sales",
      buttonStyle: "outline-button"
    }
  ];

  let billingCycle: 'monthly' | 'yearly' = 'monthly';

  function toggleBilling() {
    billingCycle = billingCycle === 'monthly' ? 'yearly' : 'monthly';
  }

  function getPrice(plan: PricingPlan) {
    if (billingCycle === 'yearly') {
      const monthlyPrice = parseInt(plan.price.replace('$', ''));
      const yearlyPrice = Math.floor(monthlyPrice * 12 * 0.8); // 20% discount
      return `$${Math.floor(yearlyPrice / 12)}`;
    }
    
    return plan.price;
  }

  function getPeriod(plan: PricingPlan) {
    return billingCycle === 'yearly' ? 'per month, billed yearly' : 'per month';
  }

  function getYearlySavings(plan: PricingPlan) {
    if (billingCycle === 'yearly') {
      const monthlyPrice = parseInt(plan.price.replace('$', ''));
      const yearlySavings = monthlyPrice * 12 * 0.2; // 20% savings
      return Math.floor(yearlySavings);
    }
    return 0;
  }
</script>

<section id="pricing" class="py-20 bg-black">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        Choose Your
        <span class="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Marketing Plan
        </span>
      </h2>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        Affordable monthly plans designed for small businesses. No setup fees, no long-term contracts. Cancel anytime.
      </p>
      
      <!-- Billing toggle -->
      <div class="flex items-center justify-center space-x-4">
        <span class="text-gray-300" class:text-white={billingCycle === 'monthly'}>Monthly</span>
        <button 
          on:click={toggleBilling}
          class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          class:bg-gradient-to-r={billingCycle === 'yearly'}
          class:from-red-500={billingCycle === 'yearly'}
          class:via-orange-500={billingCycle === 'yearly'}
          class:to-yellow-500={billingCycle === 'yearly'}
        >
          <span 
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
            class:translate-x-6={billingCycle === 'yearly'}
            class:translate-x-1={billingCycle === 'monthly'}
          ></span>
        </button>
        <span class="text-gray-300 flex items-center" class:text-white={billingCycle === 'yearly'}>
          Yearly
          <span class="ml-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
            Save 20%
          </span>
        </span>
      </div>
    </div>

    <!-- Pricing cards -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {#each pricingPlans as plan, index}
        <div class="relative">
          {#if plan.popular}
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {plan.badge}
              </span>
            </div>
          {/if}
          
          <div 
            class="bg-gray-900 rounded-2xl p-8 h-full border transition-all duration-300 hover:transform hover:scale-105"
            class:border-gray-700={!plan.popular}
            class:border-orange-500={plan.popular}
            class:shadow-2xl={plan.popular}
            class:shadow-orange-400={plan.popular}
          >
            <!-- Plan header -->
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div class="mb-4">
                <span class="text-4xl font-bold text-white">{getPrice(plan)}</span>
                <span class="text-gray-400">/{getPeriod(plan)}</span>
                {#if billingCycle === 'yearly' && getYearlySavings(plan) > 0}
                  <div class="text-green-400 text-sm mt-1">
                    Save ${getYearlySavings(plan)} per year
                  </div>
                {/if}
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">{plan.description}</p>
            </div>

            <!-- Features list -->
            <div class="mb-8">
              <ul class="space-y-3">
                {#each plan.features as feature}
                  <li class="flex items-start space-x-3">
                    <div class="flex-shrink-0 mt-0.5">
                      {#if feature.included}
                        <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      {:else}
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      {/if}
                    </div>
                    <span 
                      class="text-sm"
                      class:text-white={feature.included}
                      class:text-gray-500={!feature.included}
                    >
                      {feature.text}
                    </span>
                  </li>
                {/each}
              </ul>
            </div>

            <!-- CTA button -->
            <div class="mt-auto">
              <a 
                href={plan.name === 'Enterprise' ? '#contact' : '#signup'}
                class="{plan.buttonStyle} w-full px-6 py-3 rounded-lg text-center font-semibold transition-all duration-200 block"
              >
                {plan.buttonText}
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Bottom section -->
    <div class="text-center mt-16">
      <div class="bg-gray-900 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
        <h3 class="text-2xl font-bold text-white mb-4">
          Why Choose Next in Chair?
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="text-white font-semibold mb-2">Fully Automated</h4>
            <p class="text-gray-300 text-sm">No design or technical skills required</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h4 class="text-white font-semibold mb-2">Affordable</h4>
            <p class="text-gray-300 text-sm">Fraction of the cost of hiring an agency</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-r from-yellow-500 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="text-white font-semibold mb-2">Complete Solution</h4>
            <p class="text-gray-300 text-sm">Everything you need in one platform</p>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#demo" 
            class="outline-button px-6 py-3 rounded-lg font-semibold inline-flex items-center space-x-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>See How It Works</span>
          </a>
          <a 
            href="#contact" 
            class="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Have questions? Contact our team →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

