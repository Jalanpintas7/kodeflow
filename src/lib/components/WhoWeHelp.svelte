<script>
  import WhoWeHelpCard from './WhoWeHelpCard.svelte';
  import { onMount } from 'svelte';
  
  const items = [
    {
      title: 'Enterprise',
      desc: 'Tailor-made solutions at scale',
      iconType: 'enterprise',
      glow: 'from-[#b9b3ff]/40 via-[#cfd0ff]/30 to-transparent'
    },
    {
      title: 'E-commerce',
      desc: 'Performance & Personalisation',
      iconType: 'e-commerce',
      glow: 'from-[#a8d0ff]/40 via-[#c9e3ff]/30 to-transparent'
    },
    {
      title: 'Startup',
      desc: 'Disruption meets scalability',
      iconType: 'startup',
      glow: 'from-[#ffb6d5]/40 via-[#ffd3e6]/30 to-transparent'
    }
  ];

  let scrollContainer;
  let cardWidth = 0;
  let currentIndex = 0;

  onMount(() => {
    if (scrollContainer) {
      // Hitung lebar card + gap
      const firstCard = scrollContainer.querySelector('.card-item');
      if (firstCard) {
        const cardRect = firstCard.getBoundingClientRect();
        cardWidth = cardRect.width + 24; // 24px adalah gap-6 (1.5rem)
      }

      // Listen untuk scroll events untuk update current index
      scrollContainer.addEventListener('scroll', updateCurrentIndex);
    }
  });

  function updateCurrentIndex() {
    if (scrollContainer && cardWidth > 0) {
      const scrollLeft = scrollContainer.scrollLeft;
      currentIndex = Math.round(scrollLeft / cardWidth);
    }
  }

  function scrollToIndex(index) {
    if (scrollContainer && cardWidth > 0) {
      scrollContainer.scrollTo({ 
        left: index * cardWidth, 
        behavior: 'smooth' 
      });
    }
  }
</script>

<section class="py-16 sm:py-20 bg-white border border-black/10 shadow-sm mx-2 rounded-3xl">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[--color-text]">Who we help</h2>
    <p class="mt-3 text-[--color-text-2] max-w-3xl mx-auto text-sm sm:text-base">
      Our signature blend of
      <span class="mx-1 inline-flex items-center rounded-full border border-black/10 bg-white px-2 py-0.5 text-xs">design expertise</span>
      and
      <span class="mx-1 inline-flex items-center rounded-full border border-black/10 bg-white px-2 py-0.5 text-xs">tech innovation</span>
      – adapted to complement your business.
    </p>

    <!-- Responsive: Mobile scroll horizontal with snap, Desktop flex center -->
    <div class="mt-10 relative">
      <!-- Scroll Container -->
      <div 
        bind:this={scrollContainer}
        class="flex gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible px-4 md:px-0 pb-4 md:pb-0 scrollbar-hide md:justify-center mx-auto md:max-w-[1000px] snap-x snap-mandatory scroll-smooth"
      >
        {#each items as s, index}
          <div class="flex-shrink-0 card-item snap-start">
            <WhoWeHelpCard title={s.title} desc={s.desc} iconType={s.iconType} />
          </div>
        {/each}
      </div>

      <!-- Dot Indicators (Mobile Only) -->
      <div class="md:hidden flex justify-center gap-2 mt-4">
        {#each items as _, index}
          <button 
            on:click={() => scrollToIndex(index)}
            class="w-2 h-2 rounded-full transition-all duration-300 {currentIndex === index ? 'bg-purple-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'}"
            aria-label="Go to card {index + 1}"
          ></button>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .scrollbar-hide {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
</style>
