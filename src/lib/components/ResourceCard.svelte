<script>
  export let title = '';
  export let description = '';
  export let category = 'Guides'; // Untuk badge dan filter sidebar
  export let topic = 'Development'; // Untuk label di bawah title
  export let date = '';
  export let heroImage = '';
  export let heroImageAlt = '';

</script>

<article class="w-full max-w-[424px] mx-auto">
  <!-- IMAGE -->
  <div class="relative rounded-[22px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,.12)] group">
    <img
      src={heroImage}
      alt={heroImageAlt || title}
      loading="lazy"
      class="w-full h-[180px] object-cover bg-slate-100 transition-transform duration-300 group-hover:scale-105" />

    <!-- Hover overlay with arrow animation -->
    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <div class="flex items-center gap-2 text-white">
        <span class="text-sm font-medium">View Details</span>
        <svg 
          viewBox="0 0 24 24" 
          class="w-5 h-5 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:rotate-0 -rotate-45" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        >
          <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </div>
    </div>

    <!-- badge (Insights) -->
    <div class="absolute top-3 left-3 z-20">
      <span class="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white text-slate-900 text-sm font-medium backdrop-blur-sm border border-slate-200 shadow-lg">
        {category}
      </span>
    </div>
  </div>

  <!-- TEXTS -->
  <div class="px-1">
    <h3 class="mt-4 text-[22px] leading-[1.2] font-semibold text-slate-900">{title}</h3>
    <p class="mt-2 text-[15px] leading-6 text-slate-600">{description}</p>

    <!-- meta -->
    <div class="mt-4 flex items-center gap-3 text-slate-500">
      <span class="inline-flex items-center gap-1.5 text-[14px]">
        <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 9l-3 3 3 3"/>
          <path d="M16 9l3 3-3 3"/>
          <path d="M13 7l-2 10"/>
        </svg>
        {topic}
      </span>
      <span class="w-1 h-1 rounded-full bg-slate-300"></span>
      <span class="text-[14px]">{date}</span>
    </div>
  </div>
</article>
