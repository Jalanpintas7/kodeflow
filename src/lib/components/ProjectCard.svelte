<script>
  export let title = '';
  export let description = '';
  export let tags = [];
  export let backgroundImage = '';
  export let screenshotImage = '';
  // Height fixed dan responsive: h-64 (256px) untuk mobile, h-80 (320px) untuk desktop
  export let href = '';
</script>

<a class="block group cursor-pointer" href={href}>
  <!-- Container Gambar -->
  <div
    class="relative h-50 sm:h-65 rounded-[26px] overflow-hidden border border-slate-200 shadow-[0_12px_32px_rgba(0,0,0,.07)] bg-center bg-cover transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_rgba(0,0,0,.15)]"
    style="background: {backgroundImage};">
    <!-- overlay warm -->
    <div class="absolute inset-0 bg-gradient-to-b from-orange-50/60 via-rose-50/50 to-white/30 transition-opacity duration-500 group-hover:opacity-80"></div>

    <!-- screenshot image -->
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[30%] w-[86%] h-[100%] bg-white border border-slate-200 rounded-xl shadow-[0_20px_36px_rgba(0,0,0,.18),0_2px_10px_rgba(0,0,0,.06)] overflow-hidden transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-[0_30px_60px_rgba(0,0,0,.25)] group-hover:-translate-y-[35%]">
      <img src={screenshotImage} alt={title} class="w-full h-full object-cover" />
      
      <!-- View Project Container -->
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <div class="border-2 border-white rounded-xl px-6 py-3 bg-white flex items-center gap-3">
          <span class="text-slate-900 font-semibold text-lg">View Project</span>
          <svg class="w-5 h-5 text-slate-900 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:rotate-0 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </div>
      </div>
    </div>

  </div>

  <!-- Teks di luar container gambar -->
  <div class="relative px-1 py-2">
    <!-- Background overlay yang muncul saat hover -->
    <div class="mt-2 absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" style="background-color: var(--color-primary-background);"></div>
    
    <!-- Content yang tetap di tempat -->
    <div class="relative px-3 py-4 group-hover:px-3 transition-all duration-500 ease-out">
      <h3 class="text-lg sm:text-xl font-semibold text-slate-900">{title}</h3>
      <p class="mt-1 text-slate-600 leading-5 sm:leading-6 text-sm sm:text-[15px]">
        {description}
      </p>
      <div class="mt-4 flex flex-wrap gap-2">
        {#each tags as tag}
          <span class="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm">{tag}</span>
        {/each}
      </div>
    </div>
  </div>
</a>
