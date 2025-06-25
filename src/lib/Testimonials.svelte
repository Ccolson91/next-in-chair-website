<script lang="ts">
  interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
    rating: number;
  }

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Martinez",
      role: "Restaurant Owner",
      company: "Bella Vista Bistro",
      content: "Next in Chair completely transformed our marketing. We went from struggling to get customers to having a waitlist every weekend. The automated system brought in 40% more customers in just 3 months, and I didn't have to learn any complicated software.",
      avatar: "SM",
      rating: 5
    },
    {
      name: "Mike Thompson",
      role: "Fitness Studio Owner",
      company: "Peak Performance Gym",
      content: "I was spending hours every week trying to manage our social media and website. Next in Chair automated everything - our membership signups increased by 60% and I got my evenings back. The ROI has been incredible.",
      avatar: "MT",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Boutique Owner",
      company: "Urban Style Boutique",
      content: "As a small business owner, I couldn't afford a marketing agency. Next in Chair gave me professional-level marketing automation at a fraction of the cost. Our online sales tripled and we're attracting customers from neighboring cities.",
      avatar: "LC",
      rating: 5
    },
    {
      name: "David Rodriguez",
      role: "Auto Repair Shop Owner",
      company: "Rodriguez Auto Care",
      content: "I'm a mechanic, not a marketer. Next in Chair handles all our marketing while I focus on fixing cars. Our customer base has grown by 50% and we're booked solid. The automated follow-ups keep customers coming back.",
      avatar: "DR",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      role: "Salon Owner",
      company: "Glamour Hair Studio",
      content: "The marketing funnels Next in Chair created for us are amazing. New clients find us online every day, and the automated email campaigns keep our existing clients engaged. We've never been busier, and I love that it all runs automatically.",
      avatar: "JW",
      rating: 5
    },
    {
      name: "Carlos Mendez",
      role: "Landscaping Business",
      company: "Green Thumb Landscaping",
      content: "I used to rely on word-of-mouth and yellow pages. Next in Chair brought my business into the digital age. The website they created looks amazing, and the lead generation system brings in 3-4 new customers every week.",
      avatar: "CM",
      rating: 5
    }
  ];

  let currentIndex = 0;
  let autoplayInterval: number;

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
  }

  function prevTestimonial() {
    currentIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  }

  function goToTestimonial(index: number) {
    currentIndex = index;
  }

  // Auto-play functionality
  function startAutoplay() {
    autoplayInterval = setInterval(nextTestimonial, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Start autoplay when component mounts
  import { onMount, onDestroy } from 'svelte';
  
  onMount(() => {
    startAutoplay();
  });

  onDestroy(() => {
    stopAutoplay();
  });
</script>

<section class="py-20 bg-gray-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        Real Results from
        <span class="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Real Businesses
        </span>
      </h2>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">
        See how small business owners are growing their customer base and increasing revenue with automated marketing.
      </p>
    </div>

    <!-- Testimonials carousel -->
    <div class="relative max-w-4xl mx-auto">
      <div 
        class="overflow-hidden rounded-2xl bg-gray-800 border border-gray-700"
        on:mouseenter={stopAutoplay}
        on:mouseleave={startAutoplay}
      >
        <div 
          class="flex transition-transform duration-500 ease-in-out"
          style="transform: translateX(-{currentIndex * 100}%)"
        >
          {#each testimonials as testimonial, index}
            <div class="w-full flex-shrink-0 p-8 md:p-12">
              <div class="text-center">
                <!-- Stars -->
                <div class="flex justify-center mb-6">
                  {#each Array(testimonial.rating) as _, i}
                    <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  {/each}
                </div>

                <!-- Quote -->
                <blockquote class="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <!-- Author -->
                <div class="flex items-center justify-center space-x-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span class="text-white font-semibold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div class="text-left">
                    <div class="text-white font-semibold">{testimonial.name}</div>
                    <div class="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Navigation arrows -->
      <button 
        on:click={prevTestimonial}
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors duration-200"
        aria-label="Previous testimonial"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        on:click={nextTestimonial}
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors duration-200"
        aria-label="Next testimonial"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Dots indicator -->
      <div class="flex justify-center mt-8 space-x-2">
        {#each testimonials as _, index}
          <button
            on:click={() => goToTestimonial(index)}
            class="w-3 h-3 rounded-full transition-colors duration-200"
            class:bg-gradient-to-r={currentIndex === index}
            class:from-red-500={currentIndex === index}
            class:via-orange-500={currentIndex === index}
            class:to-yellow-500={currentIndex === index}
            class:bg-gray-600={currentIndex !== index}
            aria-label="Go to testimonial {index + 1}"
          ></button>
        {/each}
      </div>
    </div>

    <!-- Stats section -->
    <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div class="text-center">
        <div class="text-3xl md:text-4xl font-bold text-white mb-2">2,500+</div>
        <div class="text-gray-400">Small Businesses</div>
      </div>
      <div class="text-center">
        <div class="text-3xl md:text-4xl font-bold text-white mb-2">150%</div>
        <div class="text-gray-400">Avg. Customer Growth</div>
      </div>
      <div class="text-center">
        <div class="text-3xl md:text-4xl font-bold text-white mb-2">$2.5M+</div>
        <div class="text-gray-400">Revenue Generated</div>
      </div>
      <div class="text-center">
        <div class="text-3xl md:text-4xl font-bold text-white mb-2">4.9/5</div>
        <div class="text-gray-400">Customer Rating</div>
      </div>
    </div>
  </div>
</section>

