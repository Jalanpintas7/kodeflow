<script>
  import TeamCard from './TeamCard.svelte';

  // Team members data
  const teamMembers = [
    {
      name: "Ahmad Boestomi",
      role: "UI/UX Designer",
      image: "/src/lib/assets/team/tomi.jpg"
    },
    {
      name: "Bagus Tio Budi", 
      role: "Product Manager",
      image: "/src/lib/assets/team/bagus.jpg"
    },
    {
      name: "Mukhammad Taufiqurrochman",
      role: "System Architectur & Dev Ops", 
      image: "/src/lib/assets/team/taufiq.jpeg"
    },
    {
      name: "Muhammad Rafif",
      role: "System Analyst",
      image: "/src/lib/assets/team/rafif.jpg"
    },
    {
      name: "Asmaul Husna",
      role: "Penestration Tester",
      image: "/src/lib/assets/team/maul.jpg"
    },
    {
      name: "Muhammad Fayyih",
      role: "UI/UX Designer", 
      image: "/src/lib/assets/team/fayi.jpg"
    },
    {
      name: "Muhammad Rafiqhul Akhiro",
      role: "Automation",
      image: "/src/lib/assets/team/rafi.jpg"
    },
    {
      name: "Muhammad Murtadho",
      role: "Back-End Developer",
      image: "/src/lib/assets/team/tado.jpg"
    },
    {
      name: "Farhan Alfaraby",
      role: "Front-End Developer",
      image: "/src/lib/assets/team/farhan.jpg"
    }

  ];
</script>

<!-- Team Section -->
<section class="py-16 sm:py-24 bg-white border border-black/10 shadow-sm mx-2 rounded-3xl">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
      <div class="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
        <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        Our Team
      </div>
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
        Meet the team
      </h2>
      <p class="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
        It's not just what we do - it's who we are. Meet the exceptional people that make it all happen.
      </p>
    </div>
    
    <div class="mx-auto mt-16 flex flex-wrap justify-center gap-8">
      {#each teamMembers as member}
        <TeamCard 
          name={member.name}
          role={member.role}
          image={member.image}
          imageAlt={member.name}
        />
      {/each}
    </div>
  </div>
</section>
