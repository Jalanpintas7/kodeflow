<script>
  import TechMarquee from './TechMarquee.svelte';
</script>

<section class="relative overflow-hidden">
  <!-- Background concentric circular lines -->
  <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
    <div class="concentric-circles">
      
      <div class="circle-arc circle-3">
        <div class="arc-icon icon-3">⚡</div>
        <div class="arc-icon icon-4">🎯</div>
      </div>
      <div class="circle-arc circle-4">
        <div class="arc-icon icon-5">📱</div>
      </div>

      <div class="circle-arc circle-6">
        <div class="arc-icon icon-8">⭐</div>
      </div>
      <div class="circle-arc circle-7">
        <div class="arc-icon icon-9">🌐</div>
        <div class="arc-icon icon-10">💡</div>
      </div>
    </div>
  </div>
  
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 text-center relative z-10 mt-20">
    <h1 class="mt-2 sm:mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight" style="color: var(--color-text)">
      Our Services
    </h1>

    <div class="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[--color-text]">
      <h1>&</h1>
      <h1>Solutions</h1>
    </div>

    <p class="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-[color:var(--color-text)/0.75] leading-relaxed">
      <span class="inline">Complete solutions for building impactful digital products. We provide</span>
      <span class="mx-1 inline-flex rounded-lg px-2 py-1 text-xs sm:text-sm" style="background-color: var(--color-grey)">web development</span>,
      <span class="mx-1 inline-flex rounded-lg px-2 py-1 text-xs sm:text-sm" style="background-color: var(--color-grey)">app development</span>,
      <span class="mx-1 inline-flex rounded-lg px-2 py-1 text-xs sm:text-sm" style="background-color: var(--color-grey)">automation</span>
      and
      <span class="mx-1 inline-flex rounded-lg px-2 py-1 text-xs sm:text-sm" style="background-color: var(--color-grey)">training</span>.
    </p>

    <div class="mt-8 flex items-center justify-center gap-3 mb-5">
      <a href="/about" class="btn-primary">About Us</a>
      <a href="#booking" class="btn-secondary">Get Started</a>
    </div>
  </div>

  <TechMarquee />
</section>

<style>
  .concentric-circles {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle-arc {
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: pulse 15s ease-in-out infinite;
    border: 1px solid transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
  }


  .circle-3 {
    width: 600px;
    height: 600px;
    border-left-color: rgba(139, 92, 246, 0.25);
    border-right-color: rgba(139, 92, 246, 0.25);
    animation-delay: -4s;
  }

  .circle-4 {
    width: 750px;
    height: 750px;
    border-left-color: rgba(59, 130, 246, 0.22);
    border-right-color: rgba(59, 130, 246, 0.22);
    animation-delay: -6s;
  }


  .circle-6 {
    width: 1050px;
    height: 1050px;
    border-left-color: rgba(139, 92, 246, 0.15);
    border-right-color: rgba(139, 92, 246, 0.15);
    animation-delay: -10s;
  }

  .circle-7 {
    width: 1200px;
    height: 1200px;
    border-left-color: rgba(59, 130, 246, 0.12);
    border-right-color: rgba(59, 130, 246, 0.12);
    animation-delay: -12s;
  }

  .arc-icon {
    position: absolute;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    animation: float 12s ease-in-out infinite;
  }

  /* Icon positioning */
  .icon-3 { left: -20px; top: 30%; animation-delay: -2s; }
  .icon-4 { right: -20px; top: 70%; animation-delay: -3s; }
  .icon-5 { left: -20px; top: 60%; animation-delay: -4s; }
  .icon-8 { right: -20px; top: 60%; animation-delay: -7s; }
  .icon-9 { left: -20px; top: 50%; transform: translateY(-50%); animation-delay: -8s; }
  .icon-10 { right: -20px; top: 50%; transform: translateY(-50%); animation-delay: -9s; }

  @keyframes pulse {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.6;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.05);
      opacity: 0.3;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  /* Button Styles */
  .btn-primary, .btn-secondary {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    border-radius: 9999px;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    outline: none;
    z-index: 1;
  }

  .btn-primary {
    background-color: #000;
    color: #fff;
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
  }

  .btn-primary:hover {
    color: #fff;
  }

  .btn-secondary {
    background-color: #fff;
    color: #000;
    border: 1px solid rgba(0,0,0,0.1);
  }

  /* Hover effects - text remains stationary */

  /* Primary button hover animation */
  .btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
    border-radius: 9999px;
    z-index: 1;
  }

  .btn-primary:hover::before {
    left: 100%;
  }

  .btn-primary::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, var(--color-purple-primary), var(--color-purple-light));
    transition: width 0.3s ease;
    z-index: -1;
    border-radius: 9999px;
  }

  .btn-primary:hover::after {
    width: 100%;
  }

  /* Secondary button hover animation */
  .btn-secondary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
    transition: left 0.5s ease;
    border-radius: 9999px;
    z-index: 1;
  }

  .btn-secondary:hover::before {
    left: 100%;
  }

  .btn-secondary::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, var(--color-purple-primary), var(--color-purple-dark));
    transition: width 0.3s ease;
    z-index: -1;
    border-radius: 9999px;
  }

  .btn-secondary:hover::after {
    width: 100%;
  }

  .btn-secondary:hover {
    color: #fff;
    border-color: transparent;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .circle-3 { width: 400px; height: 400px; }
    .circle-4 { width: 500px; height: 500px; }
    .circle-6 { width: 700px; height: 700px; }
    .circle-7 { width: 800px; height: 800px; }
    
    .arc-icon {
      font-size: 12px;
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 480px) {
    .circle-3 { width: 290px; height: 290px; }
    .circle-4 { width: 360px; height: 360px; }
    .circle-6 { width: 500px; height: 500px; }
    .circle-7 { width: 570px; height: 570px; }
    
    .arc-icon {
      font-size: 10px;
      width: 20px;
      height: 20px;
    }
  }
</style>
