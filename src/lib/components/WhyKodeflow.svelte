<script>
  import TestimonialCard from './TestimonialCard.svelte';

  const testimonials = [
    {
      quote:
        "Kodeflow membantu kami mengembangkan aplikasi web yang powerful. Tim mereka sangat berpengalaman dalam SvelteKit dan Supabase.",
      author: 'Ahmad Rahman',
      role: 'Sales Manager',
      photo: 'https://images.unsplash.com/photo-1678474297909-ab847047b276?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      quote:
        "Yang sangat mengesankan adalah kemampuan mereka berpikir melampaui proyek langsung, berbagi pengetahuan yang menguntungkan perusahaan kami secara keseluruhan.",
      author: 'Sari Dewi',
      role: 'Product Manager, Digital Solutions',
      photo: 'https://plus.unsplash.com/premium_photo-1661592786989-e2ed11e74c91?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      quote:
        "Tim Kodeflow sangat responsif, perhatian, dan kolaboratif. Mereka mengajukan pertanyaan yang insightful, memberikan masukan, dan mengangkat keberatan ketika diperlukan.",
      author: 'Budi Santoso',
      role: 'Digital Marketing',
      photo: 'https://images.unsplash.com/photo-1583367707437-f50f3f9003d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
</script>

<section class="relative">


  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:w-[90%]">

    <!-- Heading -->
    <div class="relative mt-12 text-center">
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[--color-text]">
        Why clients <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="inline h-8 w-8 text-red-500 mx-1">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg> <span class="kodeflow-text-gradient">Kodeflow</span>
      </h2>
    </div>

    <!-- Cards -->
    <!-- Mobile: Horizontal Scroll -->
    <div class="mt-10 md:hidden">
      <div class="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4">
        {#each testimonials as t}
          <div class="flex-shrink-0">
            <TestimonialCard quote={t.quote} author={t.author} role={t.role} photo={t.photo} />
          </div>
        {/each}
      </div>
    </div>

    <!-- Desktop: Horizontal Layout -->
    <div class="mt-10 hidden md:flex md:justify-center md:items-center md:gap-6">
      {#each testimonials as t}
        <TestimonialCard quote={t.quote} author={t.author} role={t.role} photo={t.photo} />
      {/each}
    </div>

  </div>
</section>

<style>
  /* Hide scrollbar for mobile horizontal scroll */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }

  /* Smooth scrolling */
  .overflow-x-auto {
    scroll-behavior: smooth;
  }
</style>


