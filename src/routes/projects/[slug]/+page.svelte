<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  export let data;
  const { project } = data;
</script>

<div class="min-h-screen">
  <Navbar />

  <!-- Hero Section - Redesain mirip referensi -->
  <section class="relative md-w-[80%] sm:w-[90%] mx-auto py-8 sm:py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      

      <div class="mt-12">
        <a href="/projects" class="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700">
          <span>←</span>
          <span>back to all project</span>
        </a>
        <p class="text-center text-[11px] tracking-[0.20em] text-slate-400 mt-8 sm:mt-0">{project.title?.toUpperCase()}</p>
        <h1 class="mt-3 text-center text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-slate-900 max-w-4xl mx-auto">
          {project.excerpt}
        </h1>
      </div>

      <!-- Mockup Monitor Computer -->
      <div class="mt-10">
        <div class="mx-auto max-w-4xl ">
          <!-- Monitor Frame -->
          <div class="relative">
            <!-- Monitor Screen -->
            <div class="rounded-[20px] bg-gray-800 p-3 shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
              <!-- Screen Bezel -->
              <div class="rounded-[12px] bg-black p-2">
                <!-- Actual Screen Content -->
                <div class="rounded-[8px] overflow-hidden bg-black">
                  <img src={project.coverImage} alt={project.title} class="w-full md:h-[500px] h-[200px] object-cover" />
                </div>
              </div>
            </div>
            
            <!-- Monitor Stand -->
            <div class="flex justify-center mt-4">
              <div class="w-32 h-6 bg-gray-600 rounded-full shadow-lg"></div>
            </div>
            
            <!-- Monitor Base -->
            <div class="flex justify-center mt-2">
              <div class="w-48 h-3 bg-gray-700 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Info Ringkas di bawah hero -->
  <section class="md-w-[80%] sm:w-[90%] mx-auto py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 class="text-xl font-semibold text-slate-900">{project.title}</h2>
          <div class="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            {#each project.tags as tag}
              <span class="px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{tag}</span>
            {/each}
          </div>
        </div>
        {#if project.website}
          <a href={project.website} target="_blank" class="btn-website-link">
            {project.website}
          </a>
        {:else}
          <a href={`https://${project.slug}.com`} target="_blank" class="btn-website-link">
            {project.slug}.com
          </a>
        {/if}
      </div>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p class="text-[11px] uppercase tracking-wider text-slate-500">Deliverables</p>
          <ul class="mt-3 space-y-1 text-slate-700">
            {#each project.deliverables || ['Landing page', 'Web App'] as deliverable}
              <li>{deliverable}</li>
            {/each}
          </ul>
        </div>
        <div>
          <p class="text-[11px] uppercase tracking-wider text-slate-500">Project timeline</p>
          <p class="mt-3 text-slate-700">{project.projectTimeline || '2024'}</p>
        </div>
        <div>
          <p class="text-[11px] uppercase tracking-wider text-slate-500">What we do</p>
          <ul class="mt-3 space-y-1 text-slate-700">
            {#each project.whatWeDo || ['UX Research', 'UX Design', 'Frontend Development', 'Backend Development'] as service}
              <li>{service}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-12">
    <div class="md-w-[80%] sm:w-[90%] mx-auto">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 text-white px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 class="text-2xl font-semibold">Interested in building a similar project?</h2>
            <p class="text-white/80 mt-1">Contact our team to discuss the right solution for your business.</p>
          </div>
          <a href="/#contact" class="inline-flex items-center rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-medium shadow hover:opacity-90 transition">Start Consultation</a>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</div>

<style>
  /* Website Link Button Animation Styles (Same as Hero Button) */
  .btn-website-link {
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
    border: 1px solid #cbd5e1;
    outline: none;
    background-color: #fff;
    color: #334155;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 1;
  }

  .btn-website-link:hover {
    color: #fff;
    border-color: transparent;
  }

  /* Button hover animation - Shimmer effect */
  .btn-website-link::before {
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

  .btn-website-link:hover::before {
    left: 100%;
  }

  /* Button hover animation - Background fill */
  .btn-website-link::after {
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

  .btn-website-link:hover::after {
    width: 100%;
  }
</style>


