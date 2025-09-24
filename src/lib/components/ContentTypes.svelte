<script>
  // Props dari parent component
  export let selectedCategory = '';
  export let selectedTopic = '';
  export let onCategoryClick = () => {};
  export let onTopicClick = () => {};

  // Content Types data
  const contentTypes = [
    {
      name: "Guides",
      icon: "book-open"
    },
    {
      name: "Insights", 
      icon: "target"
    }
  ];

  // Topics data
  const topics = [
    {
      name: "Web Development",
      icon: "code"
    },
    {
      name: "App Development",
      icon: "code"
    },
    {
      name: "AI & Automation",
      icon: "shopping-cart"
    },
    {
      name: "Course",
      icon: "building"
    },
    {
      name: "Supabase",
      icon: "building"
    },
    {
      name: "Others",
      icon: "grid"
    },

   ];

  // Icon components
  function getIcon(iconName) {
    const icons = {
      "book-open": `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 6c-2-1.2-4-1.2-6 0v12c2-1.2 4-1.2 6 0V6z"/>
        <path d="M12 6c2-1.2 4-1.2 6 0v12c-2-1.2-4-1.2-6 0V6z"/>
      </svg>`,
      "target": `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="7"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 5V3M5 12H3M12 21v-2M21 12h-2"/>
      </svg>`,
      "code": `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 9l-3 3 3 3"/>
        <path d="M16 9l3 3-3 3"/>
        <path d="M13 7l-2 10"/>
      </svg>`,
      "shopping-cart": `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 6h14l-1.2 7.2a2 2 0 01-2 1.8H9.4a2 2 0 01-2-1.4L5 3H3"/>
        <circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/>
      </svg>`,
      "building": `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="9" width="7" height="10" rx="1"/>
        <rect x="14" y="5" width="7" height="14" rx="1"/>
        <path d="M6.5 9v-2a2 2 0 012-2H14"/>
      </svg>`,
      "headless": `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="3"/>
        <rect x="8" y="13" width="8" height="6" rx="2"/>
        <path d="M12 5v1M12 19v1"/>
      </svg>`,
      "megaphone": `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 11v2l12 4V7L3 11z"/>
        <path d="M15 9l4-2v10l-4-2"/>
      </svg>`,
      "grid": `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>
      </svg>`,
      "puzzle": `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 2v6a3 3 0 106 0V2"/>
        <path d="M17 8h1a4 4 0 014 4 4 4 0 01-4 4h-6a4 4 0 01-4-4v-1"/>
      </svg>`,
      "mic": `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 14a3 3 0 003-3V7a3 3 0 10-6 0v4a3 3 0 003 3z"/>
        <path d="M8 21v-3a4 4 0 018 0v3"/>
      </svg>`,
      "user": `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="7" r="3"/>
        <path d="M5 20a7 7 0 0114 0"/>
      </svg>`,
      "wordpress": `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M5.5 8c1.2-.8 3.3-1.4 6.5-1.4 3.2 0 5.3.6 6.5 1.4M6 8l5 13M18 8l-4 13"/>
      </svg>`
    };
    return icons[iconName] || "";
  }
</script>

<div class="w-full space-y-4">
  <!-- ========= CARD: CONTENT TYPES ========= -->
  <section class="rounded-[22px] bg-white border border-slate-200 shadow-[0_10px_28px_rgba(0,0,0,.06)] overflow-hidden p-4">
    <header class="px-4 pt-4 pb-2 font-semibold tracking-widest text-slate-400 select-none text-sm">
      CONTENT TYPES
    </header>
    <ul class="px-2 pb-2">
      {#each contentTypes as item}
        <li class="list-none">
          <button 
            class="group w-full flex items-center gap-3 px-2 py-2 rounded-xl cursor-pointer transition-colors hover:bg-slate-50 {selectedCategory === item.name ? 'bg-blue-50 border border-blue-200' : ''}"
            on:click={() => onCategoryClick(item.name)}
            on:keydown={(e) => e.key === 'Enter' && onCategoryClick(item.name)}
            type="button"
          >
            <span class="w-8 h-8 grid place-items-center rounded-lg border border-slate-200 text-slate-500 {selectedCategory === item.name ? 'border-blue-300 text-blue-600' : ''}">
              {@html getIcon(item.icon)}
            </span>
            <span class="text-sm font-medium {selectedCategory === item.name ? 'text-blue-700' : 'text-slate-700'}">{item.name}</span>
          </button>
        </li>
      {/each}
    </ul>
  </section>

  <!-- ========= CARD: TOPICS ========= -->
  <section class="mt-4 rounded-[22px] bg-white border border-slate-200 shadow-[0_10px_28px_rgba(0,0,0,.06)] overflow-hidden p-4">
    <header class="px-4 pt-4 pb-2 text-sm font-semibold tracking-widest text-slate-400 select-none">
      TOPICS
    </header>
    <ul class="px-2 pb-3">
      {#each topics as item}
        <li class="list-none">
          <button 
            class="w-full flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors {selectedTopic === item.name ? 'bg-blue-50 border border-blue-200' : ''}"
            on:click={() => onTopicClick(item.name)}
            on:keydown={(e) => e.key === 'Enter' && onTopicClick(item.name)}
            type="button"
          >
            <span class="w-8 h-8 grid place-items-center rounded-lg border border-slate-200 text-slate-500 {selectedTopic === item.name ? 'border-blue-300 text-blue-600' : ''}">
              {@html getIcon(item.icon)}
            </span>
            <span class="text-sm font-medium {selectedTopic === item.name ? 'text-blue-700' : 'text-slate-700'}">{item.name}</span>
          </button>
        </li>
      {/each}
    </ul>
  </section>
</div>
