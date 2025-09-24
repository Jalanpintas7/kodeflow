<script>
  import TechMarquee from './TechMarquee.svelte';
</script>

<section class="relative overflow-hidden">
  <!-- Background project grid pattern -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <!-- Grid Background -->
    <div class="project-grid">
      <!-- Code blocks -->
      <div class="code-block block-1">
        <div class="code-line"></div>
        <div class="code-line"></div>
        <div class="code-line short"></div>
      </div>
      
      <div class="code-block block-2">
        <div class="bracket">&#123;</div>
      </div>
      
      <div class="code-block block-3">
        <div class="project-icon">💻</div>
      </div>
      
      <div class="code-block block-4">
        <div class="code-line"></div>
        <div class="code-line medium"></div>
      </div>
      
      <div class="code-block block-5">
        <div class="bracket">&#125;</div>
      </div>
      
      <div class="code-block block-6">
        <div class="project-icon">🎨</div>
      </div>
      
      <div class="code-block block-7">
        <div class="code-line short"></div>
        <div class="code-line"></div>
        <div class="code-line medium"></div>
      </div>
      
      <div class="code-block block-8">
        <div class="project-icon">⚡</div>
      </div>
      
      <div class="code-block block-9">
        <div class="bracket">&amp;lt;</div>
      </div>
      
      <div class="code-block block-10">
        <div class="project-icon">📱</div>
      </div>
      
      <div class="code-block block-11">
        <div class="code-line medium"></div>
        <div class="code-line short"></div>
      </div>
      
      <div class="code-block block-12">
        <div class="bracket">&amp;gt;</div>
      </div>
    </div>
    
    <!-- Floating geometric shapes -->
    <div class="geometric-shapes">
      <div class="shape shape-square shape-1"></div>
      <div class="shape shape-circle shape-2"></div>
      <div class="shape shape-triangle shape-3"></div>
      <div class="shape shape-diamond shape-4"></div>
      <div class="shape shape-hexagon shape-5"></div>
    </div>
  </div>
  
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 text-center relative z-10 mt-20">
    <h1 class="mt-2 sm:mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight" style="color: var(--color-text)">
      Our Projects
    </h1>

    <div class="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[--color-text]">
      <h1>&</h1>
      <h1>Portfolio</h1>
    </div>

    <p class="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-[color:var(--color-text)/0.75] leading-relaxed">
      <span class="inline">Discover how we enhance our clients' digital presence through</span>
      <span class="mx-1 inline-flex rounded-lg px-2 py-1 text-xs sm:text-sm" style="background-color: var(--color-grey)">innovative</span>,
      <span class="mx-1 inline-flex rounded-lg px-2 py-1 text-xs sm:text-sm" style="background-color: var(--color-grey)">scalable</span>,
      <span class="mx-1 inline-flex rounded-lg px-2 py-1 text-xs sm:text-sm" style="background-color: var(--color-grey)">modern</span>
      and
      <span class="mx-1 inline-flex rounded-lg px-2 py-1 text-xs sm:text-sm" style="background-color: var(--color-grey)">impactful</span>
      solutions.
    </p>

    <div class="mt-8 flex items-center justify-center gap-3 mb-5">
      <a href="/about" class="btn-primary">About Us</a>
      <a href="#booking" class="btn-secondary">Start Project</a>
    </div>
  </div>

  <TechMarquee />
</section>

<style>
  /* Project Grid Background */
  .project-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 2rem;
    padding: 2rem;
    opacity: 0.6;
  }

  .code-block {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: codeFloat 8s ease-in-out infinite;
    transition: all 0.3s ease;
  }

  .code-block:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(139, 92, 246, 0.2);
  }

  .code-line {
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, rgba(139, 92, 246, 0.6), rgba(99, 102, 241, 0.4));
    border-radius: 1px;
    margin: 2px 0;
    animation: codePulse 3s ease-in-out infinite;
  }

  .code-line.short {
    width: 60%;
  }

  .code-line.medium {
    width: 80%;
  }

  .bracket {
    font-size: 1.5rem;
    font-weight: bold;
    color: rgba(139, 92, 246, 0.8);
    font-family: 'Courier New', monospace;
    animation: bracketGlow 4s ease-in-out infinite;
  }

  .project-icon {
    font-size: 1.2rem;
    animation: iconBounce 6s ease-in-out infinite;
  }

  /* Block Positioning */
  .block-1 { grid-column: 1; grid-row: 1; animation-delay: 0s; }
  .block-2 { grid-column: 3; grid-row: 1; animation-delay: -1s; }
  .block-3 { grid-column: 6; grid-row: 1; animation-delay: -2s; }
  .block-4 { grid-column: 8; grid-row: 2; animation-delay: -3s; }
  .block-5 { grid-column: 7; grid-row: 3; animation-delay: -4s; }
  .block-6 { grid-column: 4; grid-row: 3; animation-delay: -5s; }
  .block-7 { grid-column: 1; grid-row: 4; animation-delay: -6s; }
  .block-8 { grid-column: 2; grid-row: 5; animation-delay: -7s; }
  .block-9 { grid-column: 5; grid-row: 5; animation-delay: -8s; }
  .block-10 { grid-column: 7; grid-row: 6; animation-delay: -9s; }
  .block-11 { grid-column: 3; grid-row: 6; animation-delay: -10s; }
  .block-12 { grid-column: 8; grid-row: 4; animation-delay: -11s; }

  /* Geometric Shapes */
  .geometric-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .shape {
    position: absolute;
    opacity: 0.1;
    animation: shapeFloat 12s linear infinite;
  }

  .shape-square {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.3));
    border-radius: 4px;
  }

  .shape-circle {
    width: 35px;
    height: 35px;
    background: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3));
    border-radius: 50%;
  }

  .shape-triangle {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 35px solid rgba(99, 102, 241, 0.3);
  }

  .shape-diamond {
    width: 30px;
    height: 30px;
    background: rgba(139, 92, 246, 0.3);
    transform: rotate(45deg);
  }

  .shape-hexagon {
    width: 30px;
    height: 26px;
    background: rgba(59, 130, 246, 0.3);
    position: relative;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }

  /* Shape Positioning */
  .shape-1 { top: 10%; left: 15%; animation-delay: 0s; }
  .shape-2 { top: 25%; right: 20%; animation-delay: -3s; }
  .shape-3 { bottom: 30%; left: 10%; animation-delay: -6s; }
  .shape-4 { top: 60%; right: 15%; animation-delay: -9s; }
  .shape-5 { bottom: 15%; right: 30%; animation-delay: -12s; }

  /* Animations */
  @keyframes codeFloat {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(1deg);
    }
  }

  @keyframes codePulse {
    0%, 100% {
      opacity: 0.6;
      transform: scaleX(1);
    }
    50% {
      opacity: 1;
      transform: scaleX(1.05);
    }
  }

  @keyframes bracketGlow {
    0%, 100% {
      color: rgba(139, 92, 246, 0.8);
      text-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
    }
    50% {
      color: rgba(99, 102, 241, 1);
      text-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
    }
  }

  @keyframes iconBounce {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  @keyframes shapeFloat {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-20px) rotate(90deg);
    }
    50% {
      transform: translateY(0px) rotate(180deg);
    }
    75% {
      transform: translateY(-10px) rotate(270deg);
    }
    100% {
      transform: translateY(0px) rotate(360deg);
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
    .project-grid {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(8, 1fr);
      gap: 1rem;
      padding: 1rem;
    }
    
    .code-block {
      padding: 0.5rem;
    }
    
    .bracket {
      font-size: 1.2rem;
    }
    
    .project-icon {
      font-size: 1rem;
    }
    
    .code-line {
      height: 1.5px;
    }
    
    /* Reposition blocks for mobile */
    .block-1 { grid-column: 1; grid-row: 1; }
    .block-2 { grid-column: 3; grid-row: 1; }
    .block-3 { grid-column: 5; grid-row: 1; }
    .block-4 { grid-column: 6; grid-row: 2; }
    .block-5 { grid-column: 4; grid-row: 3; }
    .block-6 { grid-column: 2; grid-row: 3; }
    .block-7 { grid-column: 1; grid-row: 4; }
    .block-8 { grid-column: 3; grid-row: 5; }
    .block-9 { grid-column: 5; grid-row: 5; }
    .block-10 { grid-column: 6; grid-row: 6; }
    .block-11 { grid-column: 2; grid-row: 7; }
    .block-12 { grid-column: 4; grid-row: 7; }
    
    .shape {
      opacity: 0.08;
    }
    
    .shape-square, .shape-circle, .shape-diamond, .shape-hexagon {
      width: 25px;
      height: 25px;
    }
    
    .shape-triangle {
      border-left-width: 15px;
      border-right-width: 15px;
      border-bottom-width: 25px;
    }
  }

  @media (max-width: 480px) {
    .project-grid {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(10, 1fr);
      gap: 0.8rem;
      padding: 0.8rem;
    }
    
    .code-block {
      padding: 0.3rem;
    }
    
    .bracket {
      font-size: 1rem;
    }
    
    .project-icon {
      font-size: 0.8rem;
    }
    
    .code-line {
      height: 1px;
      margin: 1px 0;
    }
    
    /* Further reposition blocks for small mobile */
    .block-1 { grid-column: 1; grid-row: 1; }
    .block-2 { grid-column: 3; grid-row: 1; }
    .block-3 { grid-column: 4; grid-row: 2; }
    .block-4 { grid-column: 2; grid-row: 3; }
    .block-5 { grid-column: 1; grid-row: 4; }
    .block-6 { grid-column: 3; grid-row: 4; }
    .block-7 { grid-column: 4; grid-row: 5; }
    .block-8 { grid-column: 1; grid-row: 6; }
    .block-9 { grid-column: 2; grid-row: 7; }
    .block-10 { grid-column: 4; grid-row: 8; }
    .block-11 { grid-column: 3; grid-row: 9; }
    .block-12 { grid-column: 1; grid-row: 10; }
    
    .shape {
      opacity: 0.05;
    }
    
    .shape-square, .shape-circle, .shape-diamond, .shape-hexagon {
      width: 20px;
      height: 20px;
    }
    
    .shape-triangle {
      border-left-width: 10px;
      border-right-width: 10px;
      border-bottom-width: 18px;
    }
  }
</style>
