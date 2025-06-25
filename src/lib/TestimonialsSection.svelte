<script lang="ts">
  interface Testimonial {
    id: number;
    content: string;
    author: string;
    salonName: string;
    rating: number;
    photo: string;
  }

  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "This company has helped my salon and staff gain growth in many ways. We have received amazing clients that have become loyal customers. I highly recommend this company to any business looking to expand their client base and build their business.",
      author: "Nicole David",
      salonName: "Mon Reve Salon",
      rating: 5,
      photo: "/nicole-david.jpg"
    },
    {
      id: 2,
      content: "They do what we don't have time to do! Since partnering with Next In Chair we have had over 300 new guests sent to us. All we have to do is what we do best, hair and retain them through a great experience.",
      author: "Lee Caro",
      salonName: "A Lee Caro Salon",
      rating: 5,
      photo: "/lee-caro.jpg"
    },
    {
      id: 3,
      content: "Working with Next In Chair is an amazing experience! Our salon has really benefited from all the new guests they send us!",
      author: "Nicole Millet",
      salonName: "Nicole Millet Salon",
      rating: 5,
      photo: "/nicole-millet.jpg"
    }
  ];
</script>

<!-- Customer Reviews Section -->
<section class="py-16 salon-bg-warm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header with Consistent Styling -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">
        What <span class="salon-text-warm">Salon Owners</span> Are Saying
      </h2>
      <p class="text-xl md:text-2xl salon-subheading max-w-3xl mx-auto leading-relaxed">
        Real results from real salon owners who've transformed their business with Next In Chair
      </p>
    </div>

    <!-- Testimonials Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each testimonials as testimonial}
        <div class="salon-card p-8 rounded-xl relative overflow-hidden group hover:scale-105 transition-all duration-300">
          <!-- Quote Icon -->
          <div class="absolute top-4 right-4 opacity-20">
            <svg class="w-8 h-8 salon-text-warm" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>

          <!-- Testimonial Content -->
          <div class="relative z-10">
            <!-- Enhanced 5-Star Rating -->
            <div class="flex items-center mb-6">
              {#each Array(testimonial.rating) as _, i}
                <svg class="w-6 h-6 text-yellow-400 mr-1 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              {/each}
            </div>

            <p class="salon-body-text text-base leading-relaxed mb-6 italic">
              "{testimonial.content}"
            </p>
            
            <!-- Author with Real Photo -->
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-pink-500/30">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.author}
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <p class="salon-heading font-semibold">- {testimonial.author}</p>
                <p class="salon-text-muted text-sm">{testimonial.salonName}</p>
              </div>
            </div>
          </div>

          <!-- Gradient Border Effect -->
          <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/20 via-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      {/each}
    </div>

    <!-- Call-to-Action with Consistent Styling -->
    <div class="text-center mt-16">
      <p class="text-xl md:text-2xl salon-subheading mb-8 leading-relaxed">
        Ready to join these <span class="salon-text-warm">successful salon owners?</span>
      </p>
      <a 
        href="/pricing" 
        class="salon-button-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center space-x-3 group salon-hover-lift"
      >
        <span>Start Your Success Story</span>
        <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </a>
    </div>
  </div>
</section>

