<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import ContentTypes from '$lib/components/ContentTypes.svelte';
  import ResourceCard from '$lib/components/ResourceCard.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { blogs } from '$lib/data/blogs.js';
  import { onMount } from 'svelte';

  // State untuk filtering
  let selectedCategory = '';
  let selectedTopic = '';
  
  // State untuk mobile menu
  let isMobileFilterOpen = false;

  // Function untuk handle filter category
  function handleCategoryFilter(category) {
    if (selectedCategory === category) {
      selectedCategory = ''; // Reset jika diklik lagi
    } else {
      selectedCategory = category;
    }
  }

  // Function untuk handle filter topic
  function handleTopicFilter(topic) {
    if (selectedTopic === topic) {
      selectedTopic = ''; // Reset jika diklik lagi
    } else {
      selectedTopic = topic;
    }
  }

  // Function untuk toggle mobile filter menu
  function toggleMobileFilter() {
    isMobileFilterOpen = !isMobileFilterOpen;
    // Prevent body scroll when menu is open
    if (isMobileFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function closeMobileFilter() {
    isMobileFilterOpen = false;
    document.body.style.overflow = '';
  }

  // Function untuk memfilter blogs berdasarkan category dan topic
  $: filteredBlogs = blogs.filter(blog => {
    const categoryMatch = !selectedCategory || blog.category === selectedCategory;
    const topicMatch = !selectedTopic || blog.topic === selectedTopic;
    return categoryMatch && topicMatch;
  });

  // Cleanup pada unmount
  onMount(() => {
    return () => {
      // Restore body overflow when component unmounts
      document.body.style.overflow = '';
    };
  });
</script>

<div class="min-h-screen mx-auto">
  <Navbar />
  
  <!-- Main Content Container with top padding for fixed navbar -->
  <div class="w-[90%] md:w-[80%] max-w-7xl mx-auto py-6 pt-28">
    <!-- Mobile Filter Button - Only visible on mobile, positioned at top left -->
    <div class="md:hidden w-full flex justify-start mb-6">
      <button 
        class="inline-flex h-12 w-auto px-4 items-center justify-center gap-2 rounded-full border border-black/10 bg-white shadow-lg" 
        aria-label="Toggle filter menu"
        on:click={toggleMobileFilter}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
          {#if isMobileFilterOpen}
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m0 6h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m0 6h9.75M10.5 18a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0m-3.75 0H7.5" />
          {/if}
        </svg>
        <span class="text-sm font-medium">Blogs</span>
      </button>
    </div>

    <!-- Desktop Layout -->
    <div class="hidden md:flex gap-6">
      <!-- Left Sidebar - Content Types (Desktop only) -->
      <aside class="w-[275px] sticky top-6 self-start">
        <ContentTypes 
          selectedCategory={selectedCategory}
          selectedTopic={selectedTopic}
          onCategoryClick={handleCategoryFilter}
          onTopicClick={handleTopicFilter}
        />
      </aside>

      <!-- Right Content - Blog Cards (Desktop) -->
      <main class="flex-1">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each filteredBlogs as blog}
            <a href={`/blogs/${blog.slug}`} class="block hover:scale-[1.02] transition-transform duration-200">
              <ResourceCard 
                title={blog.title}
                description={blog.description}
                category={blog.category}
                topic={blog.topic}
                date={blog.date}
                heroImage={blog.heroImage}
                heroImageAlt={blog.heroImageAlt}
              />
            </a>
          {/each}
        </div>
      </main>
    </div>

    <!-- Mobile Layout -->
    <div class="md:hidden">
      <div class="grid grid-cols-1 gap-8">
        {#each filteredBlogs as blog}
          <a href={`/blogs/${blog.slug}`} class="block hover:scale-[1.02] transition-transform duration-200">
            <ResourceCard 
              title={blog.title}
              description={blog.description}
              category={blog.category}
              topic={blog.topic}
              date={blog.date}
              heroImage={blog.heroImage}
              heroImageAlt={blog.heroImageAlt}
            />
          </a>
        {/each}
      </div>
    </div>
  </div>

  <!-- Mobile Filter Menu Sidebar -->
  <div class="md:hidden fixed top-0 left-0 bottom-0 w-80 bg-white/95 backdrop-blur-sm shadow-xl z-50 transform transition-transform duration-300 ease-in-out {isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'}">
    <div class="flex flex-col h-full min-h-screen">
      <!-- Mobile filter menu header -->
      <div class="flex items-center justify-between p-4 border-b border-gray-200 bg-white/90">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m0 6h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m0 6h9.75M10.5 18a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0m-3.75 0H7.5" />
          </svg>
          <span class="text-lg font-semibold">Blogs Filter</span>
        </div>
        <button 
          class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
          on:click={closeMobileFilter}
          aria-label="Close filter menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- Mobile filter content -->
      <div class="flex-1 px-4 py-6 bg-white/95 overflow-y-auto">
        <ContentTypes 
          selectedCategory={selectedCategory}
          selectedTopic={selectedTopic}
          onCategoryClick={(category) => { handleCategoryFilter(category); }}
          onTopicClick={(topic) => { handleTopicFilter(topic); }}
        />
      </div>
    </div>
  </div>

  <Footer />
</div>

<!-- Mobile filter menu overlay -->
{#if isMobileFilterOpen}
  <div 
    class="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-all duration-300"
    on:click={closeMobileFilter}
    role="button"
    tabindex="0"
    on:keydown={(e) => e.key === 'Escape' && closeMobileFilter()}
  ></div>
{/if}

