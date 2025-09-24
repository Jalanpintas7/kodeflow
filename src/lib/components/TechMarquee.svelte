<script>
  export let logos = [
    'https://cdn.simpleicons.org/svelte/ff3e00',
    'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    'https://cdn.simpleicons.org/node.js/339933',
    'https://cdn.simpleicons.org/typescript/3178C6',
    'https://cdn.simpleicons.org/react/61DAFB',
    'https://cdn.simpleicons.org/nextdotjs/000000',
    'https://cdn.simpleicons.org/supabase/3FCF8E',
    'https://cdn.simpleicons.org/postgresql/4169E1',
    'https://cdn.simpleicons.org/vercel/000000',
    'https://cdn.simpleicons.org/firebase/FFCA28',
    'https://cdn.simpleicons.org/docker/2496ED',
    'https://cdn.simpleicons.org/flutter/02569B',
    'https://cdn.brandfetch.io/id209IGdxm/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B'
  ];
</script>

<section class="w-full select-none">
  <div class="mx-auto w-[80%] sm:w-[70%] md:w-[60%] overflow-hidden fadeMask relative">
    <div class="marquee flex items-center gap-10">
      {#each [...logos, ...logos] as logo, i}
        <img src={logo} alt="tech logo" class="h-8 md:h-10 opacity-80" loading="lazy"/>
      {/each}
    </div>
  </div>
  
</section>

<style>
  .marquee {
    width: max-content;
    animation: marquee 28s linear infinite;
  }
  .fadeMask {
    -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%);
  }
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
</style>


