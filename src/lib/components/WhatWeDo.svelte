<script>
  import WhatWeDoCard from './WhatWeDoCard.svelte';
  import webDevIcon from '$lib/assets/icons/web-dev.png';
  import n8n from '$lib/assets/icons/n8n.png';
  import courseIcon from '$lib/assets/icons/course.png';

  const services = [
    {
      iconBg: 'from-[#b3a6ff]/40 via-[#c9bfff]/30 to-transparent',
      iconSrc: webDevIcon,
      title: 'Web & Mobile Development',
      desc: 'Build your own website or mobile app'
    },
    {
      iconBg: 'from-[#8ea6ff]/40 via-[#b6c2ff]/30 to-transparent',
      iconSrc: n8n,
      title: 'N8N Automation',
      desc: 'Automate your workflows and processes'
    },
    {
      iconBg: 'from-[#f0a3ff]/40 via-[#f7c6ff]/30 to-transparent',
      iconSrc: courseIcon,
      title: 'Online & Offline Course',
      desc: "Learn from the best"
    }
  ];

  const bullets = [
    // Web & Mobile Development
    { icon: 'monitor', title: 'Responsive Design', desc: 'Perfect on all devices and screen sizes' },
    { icon: 'zap', title: 'Fast Performance', desc: 'Optimized for speed and user experience' },
    
    // n8n automation
    { icon: 'workflow', title: 'Workflow Automation', desc: 'Streamline your business processes' },
    { icon: 'link', title: 'API Integration', desc: 'Connect all your tools seamlessly' },
    
    // Online & Offline Course
    { icon: 'book-open', title: 'Expert Mentorship', desc: 'Learn from industry professionals' },
    { icon: 'target', title: 'Hands-on Projects', desc: 'Real-world experience and portfolio building' }
  ];

  // Icon components
  function getIcon(iconName) {
    const icons = {
      "monitor": `<svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>`,
      "zap": `<svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
      </svg>`,
      "workflow": `<svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="9" cy="9" r="2"/>
        <circle cx="9" cy="15" r="2"/>
        <circle cx="15" cy="9" r="2"/>
        <circle cx="15" cy="15" r="2"/>
        <line x1="9" y1="9" x2="15" y2="9"/>
        <line x1="9" y1="15" x2="15" y2="15"/>
        <line x1="9" y1="9" x2="9" y2="15"/>
        <line x1="15" y1="9" x2="15" y2="15"/>
      </svg>`,
      "link": `<svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>`,
      "book-open": `<svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 6c-2-1.2-4-1.2-6 0v12c2-1.2 4-1.2 6 0V6z"/>
        <path d="M12 6c2-1.2 4-1.2 6 0v12c-2-1.2-4-1.2-6 0V6z"/>
      </svg>`,
      "target": `<svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="7"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 5V3M5 12H3M12 21v-2M21 12h-2"/>
      </svg>`
    };
    return icons[iconName] || "";
  }

  const bulletColumns = [
    bullets.slice(0, 2),
    bullets.slice(2, 4),
    bullets.slice(4, 6)
  ];
</script>

<section class="py-16 sm:py-20 md:w-[90%] mx-auto">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[--color-text]">What we do...</h2>
    <p class="mt-3 text-[--color-text-2] max-w-3xl mx-auto text-sm sm:text-base">
      All the digital solutions you need... in one agency. We work with you from concept to
      launch, and beyond, bringing your ideas to life and driving measurable results.
    </p>

    <!-- Services with Bullets -->
    <div class="mt-10 mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {#each services as service, index}
        <div class="flex flex-col">
          <!-- Main Card (keep original style) -->
          <WhatWeDoCard title={service.title} desc={service.desc} iconSrc={service.iconSrc} iconBg={service.iconBg} />
          
          <!-- Bullet Points Below Card -->
          <div class="mt-6 rounded-[16px] p-4 flex flex-col gap-3 max-w-[344px] mx-auto">
            {#each bulletColumns[index] as bullet}
              <div class="bullet-item flex items-start gap-3 p-3 rounded-lg">
                <div class="icon-container mt-0.5 h-6 w-6 shrink-0 inline-flex items-center justify-center rounded-md bg-slate-200 text-slate-600">
                  {@html getIcon(bullet.icon)}
                </div>
                <div class="content flex-1">
                  <h3 class="text-sm font-semibold text-slate-800 mb-0.5">
                    {bullet.title}
                  </h3>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    {bullet.desc}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .bullet-item {
    position: relative;
    overflow: hidden;
    background: transparent;
    border: none;
    border-radius: 8px;
  }
  
  .icon-container {
    position: relative;
    z-index: 1;
  }
  
  .content {
    position: relative;
    z-index: 1;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .bullet-item {
      padding: 0.5rem;
    }
    
    .icon-container {
      height: 1.5rem;
      width: 1.5rem;
    }
    
    .content h3 {
      font-size: 0.875rem;
    }
    
    .content p {
      font-size: 0.75rem;
    }
  }
</style>
