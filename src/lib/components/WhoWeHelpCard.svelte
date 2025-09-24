<script>
  export let title = 'Enterprise';
  export let desc = 'Tailor-made solutions at scale';
  export let iconType = 'enterprise';
  
  import enterpriseIcon from '$lib/assets/icons/enterprise.png';
  import ecommerceIcon from '$lib/assets/icons/e-commerce.png';
  import startupIcon from '$lib/assets/icons/startup.png';
  
  const iconMap = {
    'enterprise': enterpriseIcon,
    'e-commerce': ecommerceIcon,
    'startup': startupIcon,

  };
</script>

<div class="relative w-[298px] h-[335px] mx-auto rounded-[28px]    overflow-hidden group cursor-pointer" style="background-color: var(--color-primary-background);">
  <div class="absolute inset-0 gridBg gridMask opacity-60 pointer-events-none"></div>

  <div class="pt-6 text-center select-none">
    <div class="text-slate-900 font-semibold text-[18px] leading-tight">{title}</div>
    <div class="text-slate-500 text-sm">{desc}</div>
  </div>

  <div class="relative mx-auto mt-5 w-[245px] h-[185px] bg-white/95 backdrop-blur rounded-3xl border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,.08),_0_2px_8px_rgba(0,0,0,.04)] group-hover:rotate-8 transition-transform duration-500 ease-out">
    <div class="absolute top-3 left-3 flex gap-1.5">
      <span class="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
      <span class="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
      <span class="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
    </div>

    <div class="purpleGlow absolute inset-0"></div>

    <div class="absolute inset-0 flex items-center justify-center">
      <div class="drop-shadow-[0_18px_28px_rgba(147,106,255,.45)]">
        <img src={iconMap[iconType] || iconMap['enterprise']} alt={title} class="w-[120px] h-[120px] object-contain" />
      </div>
    </div>
  </div>
</div>

<style>
  .gridBg {
    background-image:
      linear-gradient(0deg, rgb(113, 32, 155) 1px, transparent 1px),
      linear-gradient(90deg, rgb(113, 32, 155) 1px, transparent 1px);
    background-size: 24px 24px;
  }
  .gridMask {
    -webkit-mask-image: radial-gradient(160px 120px at 50% 52%, #b88ea7 55%, transparent 90%);
            mask-image: radial-gradient(160px 120px at 50% 52%, #1b2668 55%, transparent 90%);
  }
  .purpleGlow {
    background: radial-gradient(60px 30px at 50% 70%, rgba(71, 2, 136, 0.35), rgba(168,85,247,0) 65%);
    filter: blur(6px);
  }
</style>


