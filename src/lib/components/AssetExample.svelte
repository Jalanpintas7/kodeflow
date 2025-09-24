<script>
  // Contoh cara menggunakan data dari assets di komponen Svelte
  
  // 1. Import data dari file projects.js
  import { projects } from '$lib/data/projects.js';
  
  // 2. Import assets langsung jika diperlukan
  import logo from '$lib/assets/logo.png';
  import dashboardImage from '$lib/assets/project-images/dashboard-rayhar.png';
  
  // 3. Filter project yang menggunakan assets lokal
  const localAssetProjects = projects.filter(project => 
    typeof project.coverImage === 'string' && 
    !project.coverImage.startsWith('http')
  );
</script>

<div class="p-8 max-w-4xl mx-auto">
  <h1 class="text-3xl font-bold mb-6">Cara Menampilkan Data dari Assets</h1>
  
  <!-- Contoh 1: Menggunakan data dari projects.js -->
  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">1. Data dari projects.js</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each projects as project}
        <div class="border rounded-lg p-4 bg-white shadow-sm">
          <h3 class="text-lg font-semibold mb-2">{project.title}</h3>
          <p class="text-gray-600 mb-3">{project.excerpt}</p>
          
          <!-- Menampilkan gambar dari coverImage -->
          <div class="mb-3">
            <img 
              src={project.coverImage} 
              alt={project.title}
              class="w-full h-32 object-cover rounded"
            />
          </div>
          
          <!-- Menampilkan tags -->
          <div class="flex flex-wrap gap-2">
            {#each project.tags as tag}
              <span class="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                {tag}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Contoh 2: Menggunakan import langsung -->
  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">2. Import Langsung dari Assets</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="border rounded-lg p-4 bg-white shadow-sm">
        <h3 class="text-lg font-semibold mb-2">Logo Kodeflow</h3>
        <img src={logo} alt="Logo Kodeflow" class="w-32 h-32 object-contain" />
      </div>
      
      <div class="border rounded-lg p-4 bg-white shadow-sm">
        <h3 class="text-lg font-semibold mb-2">Dashboard Image</h3>
        <img src={dashboardImage} alt="Dashboard" class="w-full h-32 object-cover rounded" />
      </div>
    </div>
  </section>

  <!-- Contoh 3: Project dengan Assets Lokal -->
  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">3. Project dengan Assets Lokal</h2>
    <div class="space-y-4">
      {#each localAssetProjects as project}
        <div class="border rounded-lg p-6 bg-gradient-to-r from-blue-50 to-purple-50">
          <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
          <p class="text-gray-700 mb-4">{project.description}</p>
          
          <div class="flex flex-col md:flex-row gap-4">
            <!-- Cover Image -->
            <div class="flex-shrink-0">
              <img 
                src={project.coverImage} 
                alt={project.title}
                class="w-48 h-32 object-cover rounded-lg shadow-md"
              />
            </div>
            
            <!-- Project Details -->
            <div class="flex-1">
              <h4 class="font-semibold mb-2">What We Do:</h4>
              <ul class="list-disc list-inside mb-3 text-sm">
                {#each project.whatWeDo as item}
                  <li>{item}</li>
                {/each}
              </ul>
              
              <h4 class="font-semibold mb-2">Metrics:</h4>
              <div class="flex gap-4 text-sm">
                {#each project.metrics as metric}
                  <div class="bg-white px-3 py-1 rounded-full shadow-sm">
                    <span class="font-semibold">{metric.value}</span>
                    <span class="text-gray-600 ml-1">{metric.label}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

<style>
  /* Custom styles untuk tampilan yang lebih baik */
  section {
    scroll-margin-top: 2rem;
  }
</style>
