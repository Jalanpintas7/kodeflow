<script>
  export let imageUrl = '';
  export let imageAlt = '';
  export let label = '';
  export let title = '';
  export let episode = '';
  export let authorName = '';
  export let authorRole = '';
  export let authorImage = '';
  export let authorImageAlt = '';
</script>

<article class="w-[280px]">
  <div class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
    <!-- Header image with overlays -->
    <div class="relative">
      <img class="h-36 w-full object-cover" src={imageUrl} alt={imageAlt} />
      <!-- dark gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/35 to-transparent"></div>
      <!-- tiny label top-left -->
      {#if label}
        <span class="absolute left-2 top-2 inline-flex h-6 min-w-6 items-center justify-center rounded-[6px] bg-black/90 px-2 text-[10px] font-semibold tracking-wide text-white">
          {label}
        </span>
      {/if}
      <!-- Big stacked title -->
      <div class="absolute left-3 right-3 bottom-8">
        <h2 class="text-white font-medium leading-tight tracking-tight text-xl uppercase drop-shadow-md">
          {@html title}
        </h2>
      </div>
      <!-- Episode tag -->
      {#if episode}
        <div class="absolute left-4 bottom-3 flex items-center gap-2 text-white/90">
          <span class="text-sm font-semibold">//</span>
          <span class="text-[11px] tracking-widest font-semibold">{episode}</span>
        </div>
      {/if}
    </div>

    <!-- Author block -->
    {#if authorName}
      <div class="flex items-center gap-3 bg-white px-4 py-3">
        <img class="h-9 w-9 rounded-full ring-1 ring-zinc-200" src={authorImage} alt={authorImageAlt || authorName} />
        <div>
          <div class="text-[15px] font-medium text-zinc-900">{authorName}</div>
          <div class="text-xs text-zinc-500 leading-4">{authorRole}</div>
        </div>
      </div>
    {/if}
  </div>
</article>
