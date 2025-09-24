// Shared blogs data with slugs for list and detail pages
export const blogs = [
  
  {
    slug: "svelte-framework-compiler",
    title: "Svelte.js: ketika “framework” justru memilih jadi compiler",
    description: "Svelte memindahkan kerja berat framework ke tahap build, hasilnya runtime kecil, start cepat, dan update DOM yang jujur—tanpa VDOM dan hook dance.",
    category: "Insights",
    topic: "Web Development",
    date: "September 23, 2025",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1400&auto=format&fit=crop",
    heroImageAlt: "Svelte Compiler First",
    content: `
      <p>Aku pertama kali jatuh hati ke Svelte bukan karena demo yang flashy, tapi karena satu ide sederhana: bagaimana kalau kerjaan berat framework dipindahkan ke tahap build? Di React atau Vue, kamu membawa mesin besar ke browser: runtime, virtual DOM, diffing tree, reconciliation, semua ikut. Di Svelte, komponenmu dibaca, dianalisis, lalu "dipecah-pecah" menjadi JavaScript imperatif yang tepat sasaran. Hasilnya? Bundle yang lebih kecil, start lebih cepat, dan update DOM yang terasa… jujur.</p>

      <h2>Ceritanya begini</h2>
      <p>Kamu menulis:</p>
      <pre><code>&lt;script&gt;
  let count = 0;
&lt;/script&gt;

&lt;button on:click={() =&gt; count++}&gt;Klik {count}&lt;/button&gt;</code></pre>
      
      <p>Waktu build, Svelte menghasilkan fungsi kecil yang tahu persis node mana yang harus disentuh saat count berubah. Tak ada VDOM, tak ada diff global—hanya perubahan minimal ke text node pada tombol. Kalau kamu pernah mengoptimasi performa dengan useMemo atau shouldComponentUpdate, di sini sebagian besar "keribetan" itu tak lagi relevan: Svelte sudah memotong jalan untukmu.</p>

      <h2>Reaktivitas yang Natural</h2>
      <p>Di Svelte, reaktivitas terasa natural: assignment adalah sinyal. <code>count++</code> berarti "UI, tolong sinkron ya." Jika ingin komputasi turunan, cukup <code>$: total = a + b</code>. Tidak ada hook dance, tidak ada dependency array yang salah satu elemennya ketinggalan bikin bug hantu.</p>

      <h2>SvelteKit: Tukang Jahit yang Rapi</h2>
      <p>Di level aplikasi, SvelteKit seperti tukang jahit yang rapi: SSR, prefetch link, form actions, hingga adapter ke Node/Edge/Static. Migrasi dari SPA ke SSR bukan lagi proyek sampingan yang bikin migrain. Dan bila kamu peduli soal CSS, scoping terjadi otomatis; selector diberi hash, tak perlu takut bentrok global. Transisi? Ada bawaan (fade, fly, scale) yang bisa kamu sematkan langsung di markup.</p>

      <h2>Perbandingan dengan React/Vue</h2>
      <p>Apakah React/Vue kalah total? Nggak juga. React memenangi kategori ekosistem: UI kit segudang, tooling matang, dan community support yang masif. Vue punya kombo template + reactivity yang elegan. Tapi kalau prioritasmu adalah kecepatan muat, jejak runtime kecil, dan DX yang no nonsense, Svelte menggoda. Ia mengingatkan kita bahwa banyak "abstraksi besar" di frontend bisa diselesaikan lebih awal—di compiler—bukan ditinggalkan untuk ditanggung browser.</p>

      <h2>Kapan Svelte Paling "Klik"?</h2>
      <ul>
        <li>Landing page yang ngebut</li>
        <li>Dashboard ringan dengan interaksi tajam</li>
        <li>Widget yang disisipkan di halaman lain</li>
        <li>PWA yang butuh TTI kilat</li>
      </ul>
      
      <p><strong>Kapan menahan diri?</strong> Saat timmu hidup-mati di ekosistem React (misalnya depend pada komponen enterprise khusus) atau kamu butuh plugin eksotik yang hanya ada di sana.</p>

      <h2>Kesimpulan</h2>
      <p>Pada akhirnya, Svelte bukan sekadar proyek keren; ini adalah argumen berani bahwa masa depan frontend mungkin lebih compiler-first daripada runtime-first. Dan buatku, argumen itu terasa sangat masuk akal.</p>
    `
  },
  {
    slug: "flutter-satu-codebase-mesin-render",
    title: "Flutter: satu codebase, satu mesin render, dan UI yang konsisten",
    description: "Flutter menggambar UI sendiri lewat Skia: performa tinggi, konsistensi lintas platform, dan kontrol penuh atas layout/paint.",
    category: "Insights",
    topic: "App Development",
    date: "September 23, 2025",
    heroImage: "https://palcomtech.ac.id/wp-content/uploads/2023/10/60bb4a2e143f632da3e56aea_Flutter-app-development-2.png",
    heroImageAlt: "Flutter Rendering Engine",
    content: `
      <p>Ada momen ketika kamu membangun fitur di Android, menyalinnya ke iOS, lalu memperbaiki satu per satu keanehan kecil yang tak mau sama—gesture berbeda, font rendering sedikit meleset, komponen native yang tak seragam. Flutter masuk seperti pemain baru yang bilang: "bagaimana kalau kita gambar semuanya sendiri?" Bukan lewat WebView, bukan jembatan JavaScript ke native, tapi mesin render (Skia) yang menggambar piksel demi piksel.</p>

      <h2>Bedanya yang Paling Terasa</h2>
      <p>Di React Native, kamu bernegosiasi dengan komponen native melalui bridge. Performanya bisa bagus, tapi selalu ada potensi bottleneck komunikasi. Flutter memotong negosiasi itu: widget → Skia → GPU. Saat kamu bikin animasi 60/120 fps, kamu merasakan kontrol penuh atas layout/paint. Hasilnya seragam—Android, iOS, web, desktop—karena aturan mainnya kamu yang bawa.</p>

      <h2>Di Balik Layar</h2>
      <p>Flutter mengompilasi Dart ke dua mode: JIT untuk hot reload (developer senang, iterasi cepat) dan AOT untuk rilis (startup tajam, performa stabil). Untuk kerjaan berat, kamu punya Isolates (mirip thread tapi memori terpisah) dan FFI bila perlu menyentuh pustaka C/C++. Butuh memanggil fitur native? Platform Channels membuka pintu ke Swift/Kotlin untuk hal-hal seperti NFC, ARKit, atau low-level sensor.</p>

      <h2>State Management dan Testing</h2>
      <p>State management? Pilih racunmu: Provider yang sederhana, Riverpod yang compile-safe, BLoC untuk alur event yang rapi. Navigator 2.0 memuaskan penggila routing deklaratif dan deep-link rumit. Testing? Dari unit sampai golden test snapshot UI, semuanya terasa "resmi" dan terintegrasi.</p>

      <h2>Dibanding Kompetitor</h2>
      <p>Flutter seperti chef yang bawa kompor sendiri. Ionic/Cordova mengandalkan WebView—cukup untuk CRUD sederhana, tapi gestur/animasi sering terasa "web-ish". React Native menang ekosistem JavaScript dan kematangan community, namun bridge bisa jadi batu sandungan di fitur tertentu. Flutter komprominya jelas: performa tinggi dan UI konsisten sebagai bawaan, dengan harga berupa ukuran binary yang sedikit lebih besar dan tampilan yang "Flutter-ish" (yang, jujur, kini bisa di-styling mendekati native).</p>

      <h2>Kapan Memilih Flutter</h2>
      <p>Kalau kamu startup yang mengejar time-to-market tanpa menggadaikan halusnya UI, Flutter menawarkan jalur lurus: satu codebase, rilis ke mana pun. Dan buat produk yang visual-first—dashboard interaktif, aplikasi finansial dengan animasi mulus, hingga desain sistem kustom—itulah habitat alaminya.</p>
    `
  },
  {
    slug: "n8n-automation-saas-ai-rapi",
    title: "n8n: merangkai SaaS dan AI seperti menyambung kabel, tapi rapi",
    description: "n8n adalah kanvas workflow open-source untuk mengorkestrasi SaaS dan AI dengan kontrol, skalabilitas, dan biaya yang rasional.",
    category: "Insights",
    topic: "AI & Automation",
    date: "September 23, 2025",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop",
    heroImageAlt: "n8n Workflow Automation",
    content: `
      <p>Automation sering terasa seperti menumpuk tempelan: Zapier untuk ini, cron untuk itu, skrip Node yang kamu tulis tengah malam untuk "sementara" tapi tinggal bertahun-tahun. n8n menawarkan cara lain: papan kanvas tempat kamu menggambar alur—trigger, transform, aksi—lalu membiarkan mesin menjalankan dan mengawasi semuanya. Dan yang bikin menarik, ia open-source dan self-hostable.</p>

      <h2>Contoh Pipeline Konkret</h2>
      <p>Bayangkan kamu membangun pipeline ringkas: webhook terima form pelanggan, node AI merangkum dan memberi label emosi, query ke vector DB mencari jawaban serupa, lalu kirim ringkasan ke Slack dan tiket ke Zendesk. Semua itu bisa dibangun drag-and-drop, dengan ruang untuk menyisipkan JavaScript di Function Node ketika kamu perlu logika spesifik.</p>

      <h2>RAG dan Integrasi</h2>
      <p>Butuh RAG? Sambungkan ke PGVector/Pinecone/Weaviate: ingest → chunk → embed → upsert → semantic search → compose prompt. Tak ada "penjara vendor"—model bisa OpenAI, bisa lokal, bisa yang besok rilis.</p>

      <h2>Operational Maturity</h2>
      <p>Yang sering dilupakan: operational maturity. n8n punya kredensial terenkripsi, retry dengan backoff, batasan concurrency, sampai variable environment untuk menjaga perbedaan staging–prod. Di deployment, Docker/Kubernetes bikin skalanya tidak menakutkan. Kamu bisa memecah workflow besar menjadi sub-workflow, mengecek execution log per node, sampai menyalakan notifikasi saat ada kegagalan yang perlu intervensi manual.</p>

      <h2>Perbandingan Platform</h2>
      <p>Bandingkan dengan Zapier/Make: keduanya nyaman untuk memulai, tapi model harga per-task membuatmu was-was saat trafik naik. Integrasi AI ada, tapi biasanya "dibingkai" sesuai platform. Airflow? Mantap untuk batch/data engineering, namun terlalu berat untuk integrasi SaaS yang event-driven. Temporal? Luar biasa untuk orkestrasi deterministik via kode, tapi ekspektasi skill dev-nya berbeda.</p>

      <p>n8n berdiri di tengah: visual-first untuk tim ops/biz, namun memberi pintu keluar bagi dev yang ingin menulis node TypeScript kustom.</p>

      <h2>Kunci Sukses</h2>
      <p>Kuncinya tetap sama: pikirkan idempotensi (hindari duplikasi saat retry), hormati rate limit API, gunakan dead-letter untuk kasus gagal permanen, dan perlakukan secrets seperti secrets. Dengan disiplin kecil itu, automation-mu bukan lagi tumpukan kabel semrawut—tapi panel kontrol yang kamu percaya.</p>
    `
  },
  {
    slug: "flutterflow-no-code-pintu-keluar",
    title: "Flutterflow: no-code yang tak mengunci pintu keluar",
    description: "Bangun cepat dengan builder visual, lalu ekspor ke kode Flutter asli saat butuh kontrol penuh—tanpa jalan buntu.",
    category: "Guides",
    topic: "App Development",
    date: "September 23, 2025",
    heroImage: "https://cdn.prod.website-files.com/66b33f0fd430d8b41d25ad4c/66e53a4df0ccaa6615d3de90_Social%20Share%20Image-min.png",
    heroImageAlt: "FlutterFlow No-code",
    content: `
      <p>No-code sering menjanjikan kecepatan, lalu menagihnya kembali saat kamu ingin hal yang "tidak standar". Flutterflow mengambil rute berbeda: berikan builder yang cepat, tapi izinkan kamu mengekspor kode Flutter asli. Jadi, kamu bisa mulai tanpa kode, dan berakhir dengan proyek yang bisa dipegang developer sungguhan. Ini bukan jalan buntu—ini jalan tol dengan pintu keluar yang jelas.</p>

      <h2>Rasanya Begini</h2>
      <p>Kamu mendesain layar dengan drag-and-drop, menyetel state lokal dan global, menyambungkan aksi ke tombol—navigasi, panggil REST, tulis ke Firestore/Supabase, unggah file ke storage. Untuk logika unik, sisipkan Custom Action/ Custom Function berbasis Dart. Mau autentikasi? Pilih provider, boom. Mau rules? Atur RLS di Supabase atau aturan Firestore dan Flutterflow tinggal mengikuti.</p>

      <h2>Design System yang Serius</h2>
      <p>Di proyek yang lebih serius, kamu mulai memikirkan design system. Flutterflow mengakomodasi: theme global, design tokens, komponen reusable dengan parameter. Di sinilah muncul perbedaan penting dibanding Bubble/Adalo/Glide: output-mu bukan sekotak hitam yang hanya hidup di platform mereka; kamu bisa export source, lanjut menulis widget kustom, menambah FFI, bahkan menyentuh Platform Channels jika perlu Bluetooth/NFC/ML lokal.</p>

      <h2>Kapan Menekan "Export"</h2>
      <p>Apakah Flutterflow sempurna? Tidak. Ada titik di mana kamu ingin kontrol penuh atas arsitektur, state lifecycle, atau optimasi mikro. Di sana, tombol "Export" menjadi penyelamat. Kamu memulai cepat untuk validasi pasar, lalu bertransisi mulus ke Flutter murni ketika skala dan kompleksitas menuntutnya. Tidak ada migrasi menyakitkan; hanya melanjutkan pekerjaan di repositori yang sama.</p>

      <h2>Kurikulum Kursus</h2>
      <p>Untuk kurikulum kursus, aku selalu menyusun jalur: paham dasar widget & state di Flutterflow, mengerti implikasi keamanan (OAuth, RLS), membuat komponen reusable, menata error handling untuk API, lalu menutup dengan rilis ke Play/App Store dan sedikit CI (Codemagic/Fastlane). Targetnya bukan hanya "bisa klik", tapi paham mengapa sesuatu dirancang begitu—supaya ketika kamu mengekspor kode, kamu tidak kebingungan di hutan Flutter.</p>
    `
  },
  {
    slug: "supabase-rasa-firebase-jiwa-postgresql",
    title: "Supabase: rasa Firebase, jiwa PostgreSQL",
    description: "BaaS dengan inti Postgres: Auth JWT/OAuth, PostgREST, Realtime, Storage, dan Edge Functions—plus RLS sebagai senjata utama.",
    category: "Guides",
    topic: "Supabase",
    date: "September 23, 2025",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEV7m_YeePwDXJPjm06_7PvrzI2vFMa2lnQ&s",
    heroImageAlt: "Supabase PostgreSQL",
    content: `
      <p>Aku suka menyebut Supabase sebagai "Firebase yang berbicara SQL". Di inti, ada PostgreSQL—sistem yang matang, bertenaga, dengan ekosistem ekstensi yang luas. Di sekelilingnya, Supabase menempelkan komponen yang membuat Postgres terasa seperti layanan modern: Auth berbasis JWT/OAuth, PostgREST untuk API otomatis dari skema, Realtime via logical replication, Storage untuk objek, dan Edge Functions di tepi jaringan.</p>

      <h2>Row Level Security (RLS)</h2>
      <p>Cerita favoritku tentang Supabase selalu kembali ke Row Level Security (RLS). Alih-alih menulis logic otorisasi di middleware, kamu menuliskan kebijakan di level tabel: siapa boleh melihat baris mana, berdasarkan auth.uid(). API apa pun yang kamu gunakan—REST otomatis dari PostgREST, atau klien resmi—akan patuh pada kebijakan itu. Sentral, eksplisit, dan audit-able. Untuk banyak aplikasi multi-tenant, ini game changer.</p>

      <h2>Kekuatan Postgres</h2>
      <p>Di sisi performa, kamu memegang semua alat Postgres: indeks BTREE untuk pencarian umum, GIN untuk JSON/Full-Text, partial/index covering untuk kueri yang tajam, materialized view untuk agregasi yang sering dipakai. Realtime? Perubahan di tabel bisa meluncur via websockets ke klien—bagus untuk chat, papan kanban, atau metrik yang berdetak.</p>

      <h2>Perbandingan dengan Alternatif</h2>
      <p>Dibanding Firebase, perdebatan sering berakhir di model data: SQL vs dokumen. Firestore mudah diraba di awal, tetapi komposisi kueri yang kompleks kadang terasa melawan arus. Supabase (Postgres) memberi kamu JOIN, transaksi, window function, dan alat-alat yang membuat laporan dan analitik tidak menjadi proyek terpisah. Hasura? Ia ahli di GraphQL di atas Postgres, tetapi tidak menyediakan paket all-in-one (auth, storage, edge) seterkenal Supabase. AWS Amplify? Kekuatan raksasa, namun kompleksitasnya sering membuat tim kecil kepayahan.</p>

      <h2>Praktik Produksi</h2>
      <p>Di proyek nyata, aku mulai dari skema dan kebijakan: normalisasi yang sehat, constraint jelas, migrasi yang ditulis rapi (CLI), lalu menambah policy RLS secukupnya sampai least privilege benar-benar tercapai. Setelah itu baru bicara DX: seed data, fixtures untuk testing, dan skrip kecil untuk rotasi kunci. Begitu pondasi ini kokoh, Supabase memberi sensasi "backend yang tak terlihat"—cukup kuat untuk dilupakan, sampai kamu butuh dia.</p>

      <h2>Kesimpulan</h2>
      <p>Kalau kamu menginginkan backend yang cepat disentuh, tidak mengunci, dan tetap serius saat skala membesar, Supabase adalah pasangan yang menyenangkan. Kamu mendapatkan kecepatan BaaS, tanpa kehilangan kekayaan SQL.</p>
    `
  }
];

