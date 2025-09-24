<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import WhyKodeflow from '$lib/components/WhyKodeflow.svelte';
  import OurProjects from '$lib/components/OurProjects.svelte';
  import WhatWeDo from '$lib/components/WhatWeDo.svelte';
  import WhoWeHelp from '$lib/components/WhoWeHelp.svelte';
  import BookingSection from '$lib/components/BookingSection.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen">
  <Navbar />
  <Hero />
  <WhyKodeflow />
  <OurProjects />
  <WhatWeDo />
  <WhoWeHelp />
  <BookingSection />
  
  <Footer />
</div>
