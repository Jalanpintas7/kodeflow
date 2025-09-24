<script>
  export let title = '';
  export let desc = '';
  export let iconSrc = '';
  export let iconBg = '';
</script>

<div class="relative w-full max-w-[344px] h-[342px] mx-auto rounded-[28px] bg-white border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,.06)] overflow-hidden group cursor-pointer">
  <div class="spotlight absolute inset-x-0 -top-2 h-28 pointer-events-none"></div>

  <div class="relative h-full flex flex-col items-center justify-center gap-6 pt-6">
    <div class="relative">
      <div class="halo absolute -inset-8 blur-xl {iconBg}"></div>
       <div class="relative w-35 h-35 grid place-items-center drop-shadow-[0_18px_24px_rgba(59,130,246,.30)] rotate-[-12deg] group-hover:scale-125 group-hover:rotate-[-6deg] transition-transform duration-500 ease-out">
        {#if iconSrc}
          <img src={iconSrc} alt={title} class="w-35 h-35" />
        {:else}
          <svg viewBox="0 0 64 64" class="w-35 h-35">
            <defs>
              <linearGradient id="body" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#b9d1ff"/>
                <stop offset="1" stop-color="#6aa5ff"/>
              </linearGradient>
              <linearGradient id="cap" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#dbe8ff"/>
                <stop offset="1" stop-color="#9cbcff"/>
              </linearGradient>
              <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stop-color="#87b1ff"/>
                <stop offset="1" stop-color="#5b95ff"/>
              </linearGradient>
            </defs>
            <rect x="22" y="6" width="20" height="10" rx="5" fill="url(#cap)"/>
            <path d="M32 8 L50 26 L40 56 L32 48 L24 56 L14 26 Z" fill="url(#body)"/>
            <path d="M32 8 L50 26 L47 34 L32 19 Z" fill="url(#edge)" opacity=".55"/>
            <path d="M32 8 L14 26 L17 34 L32 19 Z" fill="#9fc0ff" opacity=".45"/>
            <circle cx="32" cy="32" r="4.2" fill="#5c93ff" opacity=".9"/>
            <rect x="31.1" y="20" width="1.8" height="22" rx="0.9" fill="#487efc" opacity=".9"/>
          </svg>
        {/if}
      </div>
    </div>

    <div class="text-center px-4 pb-4">
      <div class="text-slate-900 font-semibold text-lg leading-tight mb-2">{title || 'UI/UX Design'}</div>
      <div class="text-slate-600 text-sm leading-relaxed">{desc || 'Expert Design Partners'}</div>
    </div>
  </div>
</div>

<style>
  .spotlight {
    background: radial-gradient(120px 60px at 50% -10px, rgba(59,130,246,.25), rgba(59,130,246,0) 65%);
  }
  .halo {
    background: radial-gradient(closest-side, rgba(59,130,246,.28), rgba(59,130,246,.14) 55%, transparent 75%);
  }
</style>


