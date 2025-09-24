<script>
  export let name;
  export let role;
  export let image;
  export let imageAlt = "";
</script>

<!-- CARD -->
<article class="group relative w-[320px] h-[207px] rounded-[22px] bg-white border border-slate-200 shadow-[0_10px_28px_rgba(0,0,0,.06)] overflow-visible [perspective:900px]">
  <!-- Dekorasi kotak-kotak transparan di kanan -->
  <div class="pointer-events-none absolute inset-0">
    <span class="absolute right-6 top-5 w-8 h-8 rounded-[10px] border border-slate-200/70 bg-slate-50/60"></span>
    <span class="absolute right-3 top-16 w-9 h-9 rounded-[12px] border border-slate-200/70 bg-slate-50/60"></span>
    <span class="absolute right-20 top-4 w-7 h-7 rounded-[10px] border border-slate-200/70 bg-slate-50/50"></span>
    <span class="absolute right-14 top-16 w-6 h-6 rounded-[10px] border border-slate-200/70 bg-slate-50/50"></span>
    <span class="absolute right-9 top-28 w-7 h-7 rounded-[10px] border border-slate-200/70 bg-slate-50/50"></span>
    <span class="absolute right-[76px] top-28 w-8 h-8 rounded-[12px] border border-slate-200/70 bg-slate-50/50"></span>
  </div>

  <!-- Konten -->
  <div class="relative p-4">
    <!-- Foto profil -->
    <img 
      src={image} 
      alt={imageAlt || name} 
      class="w-[88px] h-[88px] rounded-[14px] object-cover shadow-[0_10px_18px_rgba(0,0,0,.20)] ring-1 ring-white/70 grayscale group-hover:grayscale-0 cursor-pointer transform-gpu transition-all duration-500 ease-[cubic-bezier(.2,.6,.2,1)] will-change-transform group-hover:[transform:scale(1.35)] hover:[transform:scale(1.35)] group-hover:shadow-[0_22px_34px_rgba(0,0,0,.30)] group-hover:ring-2 group-hover:ring-white/90 group-hover:z-20"
      style="transform-origin: left bottom;" 
    />

    <!-- Teks -->
    <div class="mt-4">
      <h3 class="text-[18px] font-semibold text-slate-900 leading-none">{name}</h3>
      <p class="mt-1 text-slate-500 text-[13px]">{role}</p>
    </div>
  </div>
</article>

