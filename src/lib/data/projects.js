// Import gambar dari assets
import dashboardAdmin from '$lib/assets/project-images/dashboard-rayhar.png';
import formBooking from '$lib/assets/project-images/form-booking.png';
import sosialMediaManager from '$lib/assets/project-images/sosial-media.png';
import foodReview from '$lib/assets/project-images/food-review.png';
import ljss from '$lib/assets/project-images/ljss.png';
import logo from '$lib/assets/logo.png';
import favicon from '$lib/assets/favicon.png';
export const projects = [
  {
    slug: 'dashboard-admin',
    title: 'Dashboard Admin',
    excerpt: 'Dashboard Admin untuk manajemen sistem',
    description:
      'Website dashboard admin ini adalah website yang digunakan untuk mengelola data atau melihat data dari berbagai data yang masuk, dengan website ini admin dapat mengetahui apa saja paket paket yang terlaris dan jumlah penjualan dari berbagai paket dan masih banyak lagi',
    tags: ['SvelteKit', 'Supabase', 'Tailwind'],
    whatWeDo: ['Frontend Development', 'Backend Development'],
    deliverables: ['Admin Dashboard', 'Database Integration'],
    projectTimeline: '2025',
    heroGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    coverImage: dashboardAdmin,
    website: 'https://rayhar-dashboard-admin.netlify.app/'
  },
  {
    slug: 'form-booking',
    title: 'Form Booking',
    excerpt: 'Website untuk booking paket umrah dan liburan',
    description:
      'Website Form Booking untuk Pemesanan paket yang terintegrasi dengan database dan AI Automation',
    tags: ['SvelteKit', 'Supabase', 'N8N', 'Whatsapp API'],
    whatWeDo: ['Frontend Development', 'Backend Development', 'AI Automation'],
    deliverables: ['Form Booking','Backend API'],
    projectTimeline: '2025',
    heroGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    coverImage: formBooking,
    website: 'https://form-booking-rayhar.netlify.app/',
  },
  {
    slug: 'Prototype-website-sosial-media-manager',
    title: 'Prototype Website Sosial Media Manager',
    excerpt: 'Website untuk manajemen sosial media',
    description:
      'Website untuk manajemen sosial media yang terintegrasi dengan database dan AI Automation',
    tags: ['React Js', 'Tailwind'],
    whatWeDo: ['UI/UX Design', 'Frontend Development'],
    deliverables: ['Dashboard Admin'],
    projectTimeline: '2025',
    heroGradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    coverImage: sosialMediaManager,
    website: 'https://prototype-ui.netlify.app/',
  },
    {
    slug: 'system-akuntansi-trucking-kapal',
    title: 'System Akuntansi Trucking Kapal',
    excerpt: 'System Akuntansi Trucking Kapal untuk manajemen order',
    description:
      'Website ini berfungsi untuk memanagement order pada perusahaan trucking kapal',
    tags: ['SvelteKit', 'Supabase', 'Tailwind'],
    whatWeDo: ['Frontend Development', 'Backend Development'],
    deliverables: ['Dashboard Admin'],
    projectTimeline: '2025',
    heroGradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    coverImage: ljss,
    website: 'https://ljss-test.netlify.app/',
  },
    {
    slug: 'food-review',
    title: 'Food Review',
    excerpt: 'Website untuk review makanan dan coffee shop populer di malaysia',
    description:
      'Sebuah website yang berfungsi untuk memberikan review terhadap berbagai macam makanan, minuman, cafe, event, dan resep masakan yang terkenal dan popular',
    tags: ['SvelteKit', 'Supabase', 'Tailwind'],
    whatWeDo: ['Frontend Development', 'Backend Development'],
    deliverables: ['Landing Page'],
    projectTimeline: '2025',
    heroGradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    coverImage: foodReview,
    website: 'https://kelantan.netlify.app/',
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

