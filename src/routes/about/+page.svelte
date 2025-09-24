<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import AboutHero from '$lib/components/AboutHero.svelte';
  import TeamSection from '$lib/components/TeamSection.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen">
  <Navbar />
  <AboutHero />
  
  <!-- About Us Content Section -->
  <section class="py-16 sm:py-24 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-pink-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header Section -->
      <div class="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
        <div class="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          About Kodeflow
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
          Who We Are?
        </h2>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
          Kodeflow is a technology company focused on web and mobile application development, 
          as well as providing technology consulting services for various industries. We believe that 
          the right technology can transform how businesses operate and provide significant added value.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Vision Card -->
        <div class="vision-card group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Our Vision</h3>
            </div>
            <p class="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              To become the leading technology partner that helps businesses achieve their maximum potential through innovative and sustainable digital solutions.
            </p>
          </div>
        </div>

        <!-- Mission Card -->
        <div class="mission-card group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Our Mission</h3>
            </div>
            <p class="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              To provide high-quality technology solutions with a personal, innovative, and results-oriented approach.
            </p>
          </div>
        </div>

        <!-- Values Card -->
        <div class="values-card group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Our Values</h3>
            </div>
            <p class="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Integrity, innovation, collaboration, and commitment to delivering the best value to every client who entrusts their projects to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <TeamSection />

  <Footer />
</div>

<style>
  /* Custom animations and effects */
  .vision-card, .mission-card, .values-card {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
    transform: translateY(30px);
  }
  
  .vision-card {
    animation-delay: 0.1s;
  }
  
  .mission-card {
    animation-delay: 0.2s;
  }
  
  .values-card {
    animation-delay: 0.3s;
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Hover effects for cards */
  .vision-card:hover {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05));
  }
  
  .mission-card:hover {
    background: linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05));
  }
  
  .values-card:hover {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(20, 184, 166, 0.05));
  }
  
  /* Gradient text animation */
  .bg-gradient-to-r {
    background-size: 200% 200%;
    animation: gradientShift 3s ease infinite;
  }
  
  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .vision-card, .mission-card, .values-card {
      padding: 1.5rem;
    }
    
    .values-card {
      grid-column: span 1;
    }
  }
  
  /* Enhanced backdrop blur for better readability */
  .backdrop-blur-sm {
    backdrop-filter: blur(8px);
  }
</style>
