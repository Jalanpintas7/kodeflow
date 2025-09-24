<script>
  let name = '';
  let email = '';
  let message = '';

  function handleSubmit(event) {
    event.preventDefault();
    // Placeholder submit handler
    const payload = { name, email, message };
    console.log('Booking form submitted:', payload);
    alert('Terima kasih! Pesan Anda sudah terkirim.');
    name = '';
    email = '';
    message = '';
  }
</script>

<section class="py-16 sm:py-20 w-full max-w-4xl mx-auto px-8 sm:px-6 lg:px-8 ">
  <div class="mx-auto max-w-7xl">
    <div class="text-center">
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[--color-text]">
        Get a free<br class="hidden sm:block" /> project check-up
      </h2>
      <p class="mt-3 text-[--color-text-2] max-w-3xl mx-auto text-sm sm:text-base">
        Drop us a message or book a quick call. Whether it’s revamping a full‑blown site or nurturing the kernel of an idea, we’re here to make it happen.
      </p>
    </div>

    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:items-stretch ">
      <!-- Left: Call card -->
      <div class="relative overflow-hidden rounded-3xl bg-white border border-black/10 shadow-sm p-6 sm:p-8 flex flex-col h-full">
        <div class="absolute inset-0 pointer-events-none grid-bg opacity-60"></div>
        <div class="relative flex flex-col h-full">
          <h3 class="text-[--color-text] text-2xl sm:text-3xl font-semibold leading-snug">
            Book a <span class=" bg-clip-text" style="color: var(--color-purple-primary)">30-min</span><br />Introduction Call
          </h3>
          <p class="mt-3 text-[--color-text-2] text-sm">
            Hop on a <span class="inline-flex items-center rounded-full border border-black/10 bg-white px-2 py-0.5 text-xs">quick call</span>
            and turn half an hour into the start of somethin <span class="inline-flex items-center rounded-full border border-black/10 bg-white px-2 py-0.5 text-xs">great</span>.
          </p>

          <div class="mt-8 flex-1 flex flex-col">
            <p class="text-sm text-[--color-text] font-medium">What we'll be doing for ~30 mins:</p>
            <ul class="mt-4 space-y-3 text-[--color-text] text-sm flex-1">
              <li class="flex items-start gap-3">
                <span class="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="h-3 w-3"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <span>A quick intro.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="h-3 w-3"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <span>Unpacking your project.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="h-3 w-3"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <span>Pinpoint how we can help.</span>
              </li>
            </ul>

            <div class="mt-auto pt-6">
              <a href="#contact" class="btn-primary-booking w-full inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium shadow-sm">
                <svg class="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 7V3h8v4M3 11h18v10H3z"/></svg>
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Form card -->
      <div class="rounded-3xl bg-white border border-black/10 shadow-sm p-6 sm:p-8">
        <form on:submit={handleSubmit} class="space-y-5">
          <div>
            <label for="name" class="block text-xs text-[--color-text-2] mb-2">Your name</label>
            <input
              id="name"
              class="w-full rounded-full border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Your name"
              bind:value={name}
              required
            />
          </div>
          <div>
            <label for="email" class="block text-xs text-[--color-text-2] mb-2">Email address</label>
            <input
              id="email"
              type="email"
              class="w-full rounded-full border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="you@example.com"
              bind:value={email}
              required
            />
          </div>
          <div>
            <label for="message" class="block text-xs text-[--color-text-2] mb-2">Project Description</label>
            <textarea
              id="message"
              rows="5"
              class="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none resize-y focus:ring-2 focus:ring-black/10"
              placeholder="What can we help you with?"
              bind:value={message}
              required
            ></textarea>
          </div>

          <div class="mt-auto pt-6">
              <button class="btn-primary-booking w-full inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium shadow-sm">
                <svg class="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 7V3h8v4M3 11h18v10H3z"/></svg>
                Send Now!
              </button>
            </div>
        </form>
      </div>
    </div>
  </div>
</section>

<style>
  .grid-bg {
    background-image:
      linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
      linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
      radial-gradient(45% 60% at 50% 100%, rgba(99,102,241,0.18), rgba(59,130,246,0.12), rgba(255,255,255,0.6));
    background-size: 24px 24px, 24px 24px, cover;
    background-position: 0 0, 0 0, bottom center;
  }

  /* Button Animation Styles (Same as Hero) */
  .btn-primary-booking {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    cursor: pointer;
    border: none;
    outline: none;
    z-index: 1;
  }

  .btn-primary-booking:hover {
    color: #fff;
  }

  /* Primary button hover animation */
  .btn-primary-booking::before {
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

  .btn-primary-booking:hover::before {
    left: 100%;
  }

  .btn-primary-booking::after {
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

  .btn-primary-booking:hover::after {
    width: 100%;
  }
</style>


