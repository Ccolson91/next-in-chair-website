<script lang="ts">
  interface FooterLink {
    text: string;
    href: string;
    color: string;
  }

  interface FooterSection {
    title: string;
    links: FooterLink[];
  }

  const footerSections: FooterSection[] = [
    {
      title: "Product",
      links: [
        { text: "Features", href: "/#features", color: "hover:text-rose-400" },
        { text: "Pricing", href: "/pricing", color: "hover:text-pink-400" },
        { text: "About", href: "/about", color: "hover:text-purple-400" }
      ]
    },
    {
      title: "Company", 
      links: [
        { text: "About", href: "/about", color: "hover:text-emerald-400" },
        { text: "Contact", href: "/#contact", color: "hover:text-teal-400" },
        { text: "Support", href: "/#contact", color: "hover:text-cyan-400" }
      ]
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", href: "/#contact", color: "hover:text-amber-400" },
        { text: "Documentation", href: "/#features", color: "hover:text-orange-400" },
        { text: "Community", href: "/#contact", color: "hover:text-red-400" }
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy", href: "/#contact", color: "hover:text-violet-400" },
        { text: "Terms", href: "/#contact", color: "hover:text-indigo-400" },
        { text: "Security", href: "/#contact", color: "hover:text-blue-400" }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "#",
      icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
      </svg>`,
      gradient: "salon-icon-blush"
    },
    {
      name: "Instagram", 
      href: "#",
      icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"></path>
      </svg>`,
      gradient: "salon-icon-taupe"
    },
    {
      name: "Facebook",
      href: "#", 
      icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
      </svg>`,
      gradient: "salon-icon-plum"
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
      </svg>`,
      gradient: "salon-icon-emerald"
    }
  ];
</script>

<footer class="salon-bg-sophisticated text-white">
  <div class="container mx-auto px-6 py-16">
    <!-- Main footer content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
      <!-- Brand section -->
      <div class="lg:col-span-2">
        <div class="flex items-center space-x-3 mb-6">
          <img 
            src="/NIC_Logo.png" 
            alt="Next in Chair Logo" 
            class="h-8 w-auto"
          />
        </div>
        <p class="text-gray-300 leading-relaxed mb-6">
          Automated marketing solutions designed specifically for hair salon owners. 
          <span class="salon-text-warm font-medium">Grow your business while you focus on your craft.</span>
        </p>
        
        <!-- Social media links -->
        <div class="flex space-x-4">
          {#each socialLinks as social}
            <a 
              href={social.href}
              class="w-10 h-10 {social.gradient} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 salon-hover-glow"
              aria-label={social.name}
            >
              {@html social.icon}
            </a>
          {/each}
        </div>
      </div>
      
      <!-- Footer links -->
      {#each footerSections as section}
        <div>
          <h3 class="font-semibold text-lg mb-4 salon-text-warm">{section.title}</h3>
          <ul class="space-y-3">
            {#each section.links as link}
              <li>
                <a 
                  href={link.href} 
                  class="text-gray-300 {link.color} transition-colors duration-200 hover:underline"
                >
                  {link.text}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
    
    <!-- Newsletter signup -->
    <div class="salon-card-featured rounded-2xl p-8 mb-12">
      <div class="text-center">
        <h3 class="text-2xl font-bold salon-subheading mb-4">Stay Updated</h3>
        <p class="salon-body-text mb-6 max-w-2xl mx-auto">
          Get the latest salon marketing tips, industry insights, and Next in Chair updates delivered to your inbox.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
          />
          <button class="salon-button-primary px-6 py-3 rounded-lg font-medium whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    
    <!-- Bottom bar -->
    <div class="border-t border-gray-700 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
          © 2024 Next in Chair. All rights reserved.
        </p>
        <div class="flex space-x-6 text-sm">
          <a href="/#contact" class="text-gray-400 hover:text-rose-400 transition-colors">Privacy Policy</a>
          <a href="/#contact" class="text-gray-400 hover:text-rose-400 transition-colors">Terms of Service</a>
          <a href="/#contact" class="text-gray-400 hover:text-rose-400 transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>

