<script>
  export let titleTop = "About Us";
  export let titleMidLeft = "&";
  export let titleMidRight = "Team";
  import TechMarquee from "./TechMarquee.svelte";
</script>

<section class="relative overflow-hidden mt-20">
  <!-- Background concentric circular lines -->
  <div
    class="absolute inset-0 pointer-events-none flex items-center justify-center"
  >
    <div class="concentric-circles">
      <div class="circle-arc circle-4">
        <div class="arc-icon icon-5">⭐</div>
      </div>
      <div class="circle-arc circle-5">
        <div class="arc-icon icon-6">💡</div>
        <div class="arc-icon icon-7">🎯</div>
      </div>
      <div class="circle-arc circle-6">
        <div class="arc-icon icon-8">🔧</div>
      </div>
      <div class="circle-arc circle-7">
        <div class="arc-icon icon-9">📱</div>
        <div class="arc-icon icon-10">💻</div>
      </div>
    </div>
  </div>

  <div
    class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center relative z-10"
  >
    <h1
      class="mt-2 sm:mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
      style="color: var(--color-text)"
    >
      {titleTop}
    </h1>

    <div
      class="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[--color-text]"
    >
      <h1>{titleMidLeft}</h1>

      <h1>{titleMidRight}</h1>
      
    </div>

    <p
      class="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-[color:var(--color-text)/0.75] leading-relaxed px-4 sm:px-0"
    >
      <span class="inline">We are an experienced developer team dedicated to providing</span>
      <span class="mx-1 inline-flex rounded-lg px-2 py-0.5 text-xs sm:text-sm"
        style="background-color: var(--color-grey)">technology solutions</span
      >,
      <span class="mx-1 inline-flex rounded-lg px-2 py-0.5 text-xs sm:text-sm"
        style="background-color: var(--color-grey)">application development</span
      >
      and
      <span class="mx-1 inline-flex rounded-lg px-2 py-0.5 text-xs sm:text-sm"
        style="background-color: var(--color-grey)">digital consulting</span
      >.
    </p>

    <!-- Stats Card -->
    <div class="mt-8 sm:mt-12 flex justify-center">
      <div
        class="stats-card relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20 max-w-lg w-full mx-4"
      >
        <!-- Header -->
        <div class="flex items-center justify-between mb-3 sm:mb-4">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span class="text-xs sm:text-sm font-medium text-gray-700"
              >Kodeflow Impact</span
            >
          </div>
          <div class="text-xs text-gray-500 hidden sm:block">Always Flowing</div>
        </div>

        <!-- Main Stats -->
        <div
          class="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl p-3 sm:p-4 mb-3 sm:mb-4"
        >
          <div class="flex items-center gap-2 text-xs sm:text-sm mb-1 sm:mb-2">
            <span class="text-blue-400">✨</span>
            <span class="leading-tight"
              >Code with Purpose, Flow with Innovation. Built to Transform.</span
            >
          </div>
        </div>

        <!-- Flow Metrics -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 sm:gap-3">
            <div class="flex -space-x-1 sm:-space-x-2">
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white"
              >
                3Y
              </div>
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white"
              >
                25+
              </div>
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white"
              >
                50+
              </div>
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white"
              >
                ∞
              </div>
            </div>
          </div>

          <!-- Innovation Score -->
          <div class="text-xs sm:text-sm text-gray-600">
            <div class="flex items-center gap-1">
              <span class="text-blue-500">🚀</span>
              <span class="font-bold text-blue-600">∞</span>
            </div>
            <div class="text-xs text-gray-500">Innovation Flow</div>
          </div>

          <!-- Flow Builders - hidden on mobile, shown on desktop -->
          <div class="hidden sm:block text-xs sm:text-sm text-gray-600">
            <div class="font-medium">Flow Builders</div>
            <div class="text-xs text-gray-500">Digital Craftsmen</div>
          </div>
        </div>

        <!-- Floating elements -->
        <div
          class="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-bounce"
        ></div>
        <div
          class="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-500 rounded-full opacity-40 animate-pulse"
        ></div>
      </div>
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


  .circle-4 {
    width: 750px;
    height: 750px;
    border-left-color: rgba(59, 130, 246, 0.08);
    border-right-color: rgba(59, 130, 246, 0.08);
    animation-delay: -6s;
  }

  .circle-5 {
    width: 900px;
    height: 900px;
    border-left-color: rgba(99, 102, 241, 0.06);
    border-right-color: rgba(99, 102, 241, 0.06);
    animation-delay: -8s;
  }

  .circle-6 {
    width: 1050px;
    height: 1050px;
    border-left-color: rgba(139, 92, 246, 0.05);
    border-right-color: rgba(139, 92, 246, 0.05);
    animation-delay: -10s;
  }

  .circle-7 {
    width: 1200px;
    height: 1200px;
    border-left-color: rgba(59, 130, 246, 0.04);
    border-right-color: rgba(59, 130, 246, 0.04);
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
  .icon-5 {
    left: -20px;
    top: 60%;
    animation-delay: -4s;
  }
  .icon-6 {
    right: -20px;
    top: 40%;
    animation-delay: -5s;
  }
  .icon-7 {
    left: -20px;
    top: 40%;
    animation-delay: -6s;
  }
  .icon-8 {
    right: -20px;
    top: 60%;
    animation-delay: -7s;
  }
  .icon-9 {
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    animation-delay: -8s;
  }
  .icon-10 {
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    animation-delay: -9s;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.6;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.05);
      opacity: 0.3;
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  .stats-card {
    animation: cardFloat 6s ease-in-out infinite;
    transition: all 0.3s ease;
  }

  .stats-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  @keyframes cardFloat {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-3px);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .circle-4 {
      width: 500px;
      height: 500px;
    }
    .circle-5 {
      width: 600px;
      height: 600px;
    }
    .circle-6 {
      width: 700px;
      height: 700px;
    }
    .circle-7 {
      width: 800px;
      height: 800px;
    }

    .arc-icon {
      font-size: 12px;
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 480px) {
    .circle-4 {
      width: 360px;
      height: 360px;
    }
    .circle-5 {
      width: 430px;
      height: 430px;
    }
    .circle-6 {
      width: 500px;
      height: 500px;
    }
    .circle-7 {
      width: 570px;
      height: 570px;
    }

    .arc-icon {
      font-size: 10px;
      width: 20px;
      height: 20px;
    }
  }
</style>
