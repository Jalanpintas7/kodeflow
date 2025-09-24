<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import ProjectHero from '$lib/components/ProjectHero.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { projects } from '$lib/data/projects.js';
  import BookingSection from '$lib/components/BookingSection.svelte';
</script>

<div class="min-h-screen">
  <Navbar />
  <ProjectHero />

  <!-- Projects Grid Section -->
  <section class="py-16 sm:py-24 md:w-[80%]  mx-auto">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each projects as project}
          <ProjectCard 
            title={project.title}
            description={project.excerpt}
            tags={project.tags}
            backgroundImage={project.heroGradient}
            screenshotImage={project.coverImage}
            href={`/projects/${project.slug}`}
          />
        {/each}
      </div>
    </div>
  </section>
  <BookingSection />
  <Footer />
</div>
