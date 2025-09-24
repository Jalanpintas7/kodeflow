<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CardServices from '$lib/components/ServicesCard.svelte';
  import ServicesHero from '$lib/components/ServicesHero.svelte';
  import BookingSection from '$lib/components/BookingSection.svelte';
  import webIcon from '$lib/assets/icons/web-dev.png';
  import appIcon from '$lib/assets/icons/app-dev.png';
  import n8n from '$lib/assets/icons/n8n.png';
  import courseIcon from '$lib/assets/icons/course.png';

  const services = [
    {
      key: 'web-dev',
      title: 'Web Development',
      description:
        'Fast, secure, and SEO-friendly websites using SvelteKit/Next.js, Tailwind, and modern performance practices.',
      icon: webIcon,
      accent: 'from-sky-400/30 via-cyan-400/20 to-transparent',
      chip: 'from-sky-500 to-cyan-500',
    },
    {
      key: 'app-dev',
      title: 'App Development',
      description:
        'Smooth and scalable mobile/desktop applications. Focus on UX, stability, and rapid releases.               ',
      icon: appIcon,
      accent: 'from-fuchsia-400/30 via-violet-400/20 to-transparent',
      chip: 'from-violet-500 to-fuchsia-500',
    },
    {
      key: 'n8n-automation',
      title: 'n8n Automation',
      description:
        'End-to-end workflow automation: API integration and business processes without excessive coding.',
      icon: n8n,
      accent: 'from-emerald-400/30 via-teal-400/20 to-transparent',
      chip: 'from-emerald-500 to-teal-500',
    },
    {
      key: 'courses',
      title: 'Online / Offline Course',
      description:
        'Intensive and practical classes for teams/individuals: web dev, automation, and engineering best practices.',
      icon: courseIcon,
      accent: 'from-amber-400/30 via-orange-400/20 to-transparent',
      chip: 'from-amber-500 to-orange-500',
    },
  ];
</script>

<div class="min-h-screen mx-auto">
  <Navbar />

  <!-- Hero Section -->
  <ServicesHero />

  <!-- Services Grid - modern cards -->
  <section class="w-[80%] max-w-7xl mx-auto py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
      {#each services as s}
        <CardServices 
          title={s.title}
          description={s.description}
          icon={s.icon}
          iconAlt={s.title}
          accent={s.accent}
          chip={s.chip}
          showDetails={false}
        />
      {/each}
    </div>
  </section>
  <BookingSection />
  <Footer />
</div>


