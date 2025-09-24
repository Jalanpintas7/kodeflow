<script>
  export let title = '';
  export let description = '';
  export let category = '';
  export let topic = '';
  export let date = '';
  export let lastUpdated = '';
  export let heroImage = '';
  export let heroImageAlt = '';
  export let videoUrl = '';
  export let videoTitle = '';
  export let episodePoints = [];
  export let ctaText = '';
  export let ctaLink = '';
  export let footerText = '';
  export let compact = false; // Untuk layout dua kolom
  export let content = '';
</script>

<main class="{compact ? 'overflow-x-hidden' : 'max-w-3xl mx-auto px-5 py-10 md:py-14 overflow-x-hidden'}">
  <!-- Top badges -->
  <div class="flex flex-wrap items-center gap-2 text-sm text-zinc-600">
    <span class="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1">
      <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>
        <path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      {category}
    </span>
    <span class="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1">
      <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 10v6a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <rect x="9" y="6" width="6" height="12" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
        <path d="M18 10v6a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      {topic}
    </span>
  </div>

  <!-- Title -->
  <h1 class="mt-4 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight break-words">
    {title}
  </h1>

  <!-- Meta line -->
  <div class="mt-3 flex flex-wrap items-center gap-2 text-sm text-zinc-600">
    <span>{date}</span>
    <span aria-hidden="true">•</span>
    <span class="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2.5 py-1">
      <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 3v4M7 3v4M4 9h16M5 12h14M5 16h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <span class="font-medium">Last Updated:</span>
      <span>{lastUpdated || date}</span>
    </span>
  </div>

  <!-- Intro paragraph -->
  <p class="mt-6 text-base leading-relaxed text-zinc-700 break-words">
    {description}
  </p>

  <!-- Video or Image -->
  <div class="mt-6">
    {#if videoUrl}
      <div class="relative w-full overflow-hidden rounded-xl border border-zinc-200 shadow-sm bg-black">
        <!-- 16:9 aspect ratio without plugins -->
        <div class="pb-[56.25%]"></div>
        <iframe
          class="absolute inset-0 h-full w-full"
          src={videoUrl}
          title={videoTitle || title}
          loading="lazy"
        ></iframe>
      </div>
    {:else}
      <div class="relative w-full overflow-hidden rounded-xl border border-zinc-200 shadow-sm">
        <img 
          src={heroImage} 
          alt={heroImageAlt || title}
          class="w-full md:h-[400px] h-[200px] object-cover"
        />
      </div>
    {/if}
  </div>

  {#if content}
  <div class="mt-8 space-y-6 text-zinc-800 leading-relaxed overflow-x-hidden break-words">
    {@html content}
  </div>
  {/if}


  <!-- Divider + footer note -->
  {#if footerText}
    <div class="mt-10 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
      {footerText}
    </div>
  {/if}
</main>
