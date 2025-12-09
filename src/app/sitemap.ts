import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.drasyrafazizan.com'
  
  // Static pages
  const routes = [
    { url: '', priority: 1.0 },
    { url: '/about', priority: 0.8 },
    { url: '/blog', priority: 0.8 },
    { url: '/appointment', priority: 0.8 },
    { url: '/services', priority: 0.8 },
    { url: '/services/details', priority: 0.8 },
    { url: '/doctors/details', priority: 0.8 },
    { url: '/contact', priority: 0.8 },
  ]

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route.priority,
  }))

  // Blog posts
  const blogSlugs = [
    'kanser-ginekologi-saringan-faktor-risiko-pengesanan-awal',
    'kesuburan-pembekuan-telur-perancangan-masa-depan',
    'endometriosis-kesakitan-senyap-perjuangan-tersembunyi',
    'kemajuan-pembedahan-ginekologi-teknik-minimal-invasif-robotik-dan-tanpa-parut-yang-mengubah-penjagaan-kesihatan-wanita',
    'sindrom-ovari-polisistik-pcos-apa-yang-perlu-diketahui-dijangka-cara-menguruskannya-setiap-hari',
    'simptom-red-flag-dalam-kalangan-wanita-bila-perlu-jumpa-pakar-ginekologi-dengan-segera',
    'menopause-dan-perimenopause-lebih-dari-sekadar-klise',
    'ketidakcukupan-serviks-cervical-insufficiency-cerclage-perlindungan-kehamilan-anda',
    'prolaps-organ-pelvis-peranakan-jatuh-apa-wanita-perlu-tahu',
  ]

  const blogPosts = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPosts]
}