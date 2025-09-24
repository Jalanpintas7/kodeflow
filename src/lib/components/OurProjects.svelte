<script>
  import ProjectCard from './ProjectCard.svelte';

  import { projects as source } from '$lib/data/projects.js';
  const projects = [
    ...source.map((p) => ({
      title: p.title,
      description: p.excerpt,
      tags: p.tags,
      image: p.coverImage,
      backgroundGradient: p.heroGradient,
      height: 'h-[280px]',
      slug: p.slug
    }))
  ];
</script>

<section class="py-16 sm:py-20 rounded-3xl bg-white border border-black/10 shadow-sm mx-2">
  <div class="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 md:w-[80%]">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
      <div class="lg:flex-1">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[--color-text] mb-4">
          Our Projects
        </h2>
        <p class="text-base text-[--color-text-muted] max-w-2xl">
          The Drewl Hall of Fame: Featuring brands from around the world and projects of all shapes and sizes.
        </p>
      </div>
      
      <div class="mt-6 lg:mt-0 lg:ml-8">
        <a href="/projects" class="btn-view-projects">
          View All Projects
        </a>
      </div>
    </div>

    <!-- Projects Masonry (columns) -->
    <div class="columns-1 md:columns-2 gap-8 [column-fill:_balance]">
      {#each projects as project}
        <div class="mb-8 break-inside-avoid">
          <ProjectCard 
            title={project.title}
            description={project.description}
            tags={project.tags}
            backgroundImage={project.backgroundGradient}
            screenshotImage={project.image}
            height={project.height}
            href={`/projects/${project.slug}`}
          />
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* View Projects Button Styles */
  .btn-view-projects {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    border-radius: 9999px;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #000;
    color: #fff;
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
    z-index: 1;
  }

  /* Button hover animation */
  .btn-view-projects::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
    border-radius: 9999px;
    z-index: 1;
  }

  .btn-view-projects:hover::before {
    left: 100%;
  }

  .btn-view-projects::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, var(--color-purple-primary), var(--color-purple-light));
    transition: width 0.3s ease;
    z-index: -1;
    border-radius: 9999px;
  }

  .btn-view-projects:hover::after {
    width: 100%;
  }

  .btn-view-projects:hover {
    color: #fff;
  }
</style>

