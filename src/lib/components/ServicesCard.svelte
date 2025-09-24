<script>
  export let title = '';
  export let description = '';
  export let icon = '';
  export let iconAlt = '';
  export let accent = 'from-sky-400/30 via-cyan-400/20 to-transparent';
  export let chip = 'from-sky-500 to-cyan-500';
  export let details = '';
  export let bullets = [];
  export let deliverables = [];
  export let stack = [];
  export let showDetails = false; // Untuk mengontrol apakah menampilkan detail lengkap
</script>

<article class="group relative">
  <!-- gradient border wrapper -->
  <div class="rounded-3xl p-[1px] bg-gradient-to-tr from-slate-200 via-white to-slate-100 transition-colors duration-500 group-hover:from-slate-300 group-hover:via-white group-hover:to-slate-200">
    <!-- card surface -->
    <div class="relative rounded-[inherit] overflow-hidden bg-white/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md border border-slate-200 shadow-[0_12px_30px_rgba(0,0,0,.06)] transition-all duration-500 group-hover:shadow-[0_24px_60px_rgba(0,0,0,.12)]">
      <!-- soft accent glow -->
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-tr {accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

       <div class="relative p-6 md:p-8 flex flex-col items-center justify-center">
         <!-- icon with colored shadow -->
         <div class="relative">
           <div class="halo absolute -inset-16 blur-3xl {chip}"></div>
           <div class="relative w-40 h-40 grid place-items-center drop-shadow-[0_24px_40px_rgba(59,130,246,.40)] rotate-[-12deg] group-hover:scale-125 group-hover:rotate-[-6deg] transition-transform duration-500 ease-out">
             <img src={icon} alt={iconAlt || title} class="w-30 h-30 object-contain" />
           </div>
         </div>

        <h3 class="mt-4 text-[22px] font-semibold text-slate-900 text-center">{title}</h3>
        <p class="mt-2 text-[15px] leading-7 text-slate-600 text-center">{description}</p>

        <!-- bottom row CTA -->
        <div class="mt-5 flex items-center justify-between">
          <div class="inline-flex items-center gap-2 text-slate-900 font-medium">
            <span>Learn more</span>
            <svg class="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:rotate-0 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>

          <!-- circular arrow button -->
          
        </div>

        <!-- Long details content (conditional) -->
        {#if showDetails && details}
          <div class="mt-8 pt-6 border-t border-slate-200">
            <p class="text-[15px] leading-7 text-slate-700">{details}</p>

            {#if bullets && bullets.length > 0}
              <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {#each bullets as b}
                  <div class="flex items-start gap-3">
                    <span class="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                      <svg viewBox="0 0 24 24" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    </span>
                    <span class="text-[15px] leading-7 text-slate-700">{b}</span>
                  </div>
                {/each}
              </div>
            {/if}

            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {#if deliverables && deliverables.length > 0}
                <div>
                  <h4 class="text-sm font-semibold text-slate-900">Deliverables</h4>
                  <div class="mt-2 flex flex-wrap gap-2">
                    {#each deliverables as d}
                      <span class="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm">{d}</span>
                    {/each}
                  </div>
                </div>
              {/if}
              
              {#if stack && stack.length > 0}
                <div>
                  <h4 class="text-sm font-semibold text-slate-900">Technology</h4>
                  <div class="mt-2 flex flex-wrap gap-2">
                    {#each stack as t}
                      <span class="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm">{t}</span>
                    {/each}
                  </div>
                </div>
              {/if}
            </div>

            <div class="mt-6">
              <h4 class="text-sm font-semibold text-slate-900">Quick Process</h4>
              <ol class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li class="flex items-start gap-3">
                  <span class="mt-0.5 w-6 h-6 rounded-full bg-slate-900 text-white grid place-items-center text-xs">1</span>
                  <span class="text-[15px] leading-7 text-slate-700">Discovery & scope – understand goals and priorities</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-0.5 w-6 h-6 rounded-full bg-slate-900 text-white grid place-items-center text-xs">2</span>
                  <span class="text-[15px] leading-7 text-slate-700">Design & architecture – define technical foundation</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-0.5 w-6 h-6 rounded-full bg-slate-900 text-white grid place-items-center text-xs">3</span>
                  <span class="text-[15px] leading-7 text-slate-700">Iterative implementation – build, review, improve</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-0.5 w-6 h-6 rounded-full bg-slate-900 text-white grid place-items-center text-xs">4</span>
                  <span class="text-[15px] leading-7 text-slate-700">Launch & handover – documentation, training, and support</span>
                </li>
              </ol>
            </div>
          </div>
        {/if}
      </div>
    </div>
   </div>
 </article>

<style>
  .halo {
    background: radial-gradient(closest-side, rgba(59,130,246,.35), rgba(59,130,246,.20) 45%, rgba(59,130,246,.08) 65%, transparent 85%);
  }
</style>
