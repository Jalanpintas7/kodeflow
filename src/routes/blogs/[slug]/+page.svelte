<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ResourceDetail from '$lib/components/ResourceDetail.svelte';
  import CardThumbnail from '$lib/components/ThumbnailCard.svelte';

  let { data } = $props();
  const { resource } = data;

  // Sample data for episode points (bisa diambil dari resource data atau API)

  // Format title untuk CardThumbnail (split by space untuk multi-line)
  const formatTitleForCard = (title) => {
    const words = title.split(' ');
    if (words.length > 3) {
      const mid = Math.ceil(words.length / 2);
      return words.slice(0, mid).join(' ') + '<br/>' + words.slice(mid).join(' ');
    }
    return title;
  };
</script>

<div class="min-h-screen mx-auto overflow-x-hidden">
  <Navbar />
  
  <!-- Main Content: Responsive Layout -->
  <div class="w-[95%] md:w-[80%] max-w-7xl mx-auto pt-28 pb-10 px-4 md:px-0">
    <!-- Desktop Layout: Two Column -->
    <div class="hidden md:flex gap-10">
      <!-- LEFT: Card Thumbnail (Sticky) - Desktop Only -->
      <aside class="w-[300px] sticky top-24 self-start">
        <!-- Back button (Sticky) -->
        <div class="mb-6">
          <a href="/blogs" class="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm">
            <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            Kembali ke Blogs
          </a>
        </div>
        <CardThumbnail 
          imageUrl={resource.heroImage}
          imageAlt={resource.heroImageAlt || resource.title}
          label={resource.category.toUpperCase()}
          title={formatTitleForCard(resource.title)}
          episode="EP01"
          authorName="Kodeflow Team"
          authorRole="Content Creator"
          authorImage="/src/lib/assets/logo.png"
          authorImageAlt="Kodeflow Team"
        />
      </aside>

      <!-- RIGHT: Blog Detail Content - Desktop -->
      <main class="flex-1">
        <ResourceDetail 
          title={resource.title}
          description={resource.description}
          category={resource.category}
          topic={resource.topic}
          date={resource.date}
          lastUpdated={resource.date}
          heroImage={resource.heroImage}
          heroImageAlt={resource.heroImageAlt}
          content={resource.content}
          videoUrl=""
          videoTitle=""
          ctaText="Subscribe to our"
          ctaLink="#"
          footerText="© 2025 Kodeflow"
          compact={true}
        />
      </main>
    </div>

    <!-- Mobile Layout: Single Column, Full Screen -->
    <div class="md:hidden overflow-x-hidden">
      <!-- Back button (Mobile) -->
      <div class="mb-6">
        <a href="/blogs" class="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm">
          <svg viewBox="0 0 24 24" class="w-4 h-4" flex-shrink-0 fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          Kembali ke Blogs
        </a>
      </div>

      <!-- Blog Detail Content - Mobile Full Screen -->
      <main class="w-full min-w-0 overflow-x-hidden">
        <ResourceDetail 
          title={resource.title}
          description={resource.description}
          category={resource.category}
          topic={resource.topic}
          date={resource.date}
          lastUpdated={resource.date}
          heroImage={resource.heroImage}
          heroImageAlt={resource.heroImageAlt}
          content={resource.content}
          videoUrl=""
          videoTitle=""
          ctaText="Subscribe to our"
          ctaLink="#"
          footerText="© 2025 Kodeflow"
          compact={true}
        />
      </main>
    </div>
  </div>

  <Footer />
</div>

