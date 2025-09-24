<script>
  export let quote = '';
  export let author = '';
  export let role = '';
  export let photo = '';
</script>

<div class="w-[320px] h-[260px] md:w-[362px] md:h-[290px] mx-auto rounded-[26px] bg-white border border-slate-200 soft-shadow overflow-hidden">
  <div class="h-full p-4 md:p-6 flex flex-col">
    <!-- Logo kecil di kiri atas -->
    <div class="h-5 flex items-center text-slate-400">
      <svg class="w-7 h-5" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 20c0-6.6 5.4-12 12-12" stroke="#cbd5e1" stroke-width="3.2" stroke-linecap="round"/>
        <path d="M12 20c0-10 8-18 18-18" stroke="#cbd5e1" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M6 20C6 6 17  -2 30  -2" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/>

      </svg>
    </div>

    <!-- Testimonial text -->
    <p class="mt-3 text-[14px] md:text-[15px] leading-6 md:leading-7 text-slate-600">
      {quote || "What's particularly impressive is their ability to think beyond just the immediate project, sharing knowledge that benefits our company as a whole."}
    </p>

    <!-- Divider dashed -->
    <div class="my-3 md:my-4 border-t border-dashed border-slate-200"></div>

    <!-- Footer: avatar + name -->
    <div class="mt-auto flex items-center gap-2 md:gap-3">
      <!-- Avatar -->
      <div class="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden ring-1 ring-slate-200">
        {#if photo}
          <img src={photo} alt={author} class="w-full h-full object-cover" />
        {:else}
          <svg viewBox="0 0 56 56" class="w-full h-full">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#d1d5db"/>
                <stop offset="1" stop-color="#9ca3af"/>
              </linearGradient>
            </defs>
            <circle cx="28" cy="20" r="10" fill="url(#g)"/>
            <rect x="8" y="30" width="40" height="20" rx="10" fill="#bfbfbf"/>
          </svg>
        {/if}
      </div>
      <div>
        <div class="text-[14px] md:text-[15px] font-semibold text-slate-800">{author || 'Silas Gregory'}</div>
        <div class="text-[12px] md:text-[13px] text-slate-500">{role || 'Marketing Manager, ACS'}</div>
      </div>
    </div>
  </div>
</div>

<style>
  .soft-shadow { 
    box-shadow: 0 10px 30px rgba(0,0,0,.06); 
  }
</style>


