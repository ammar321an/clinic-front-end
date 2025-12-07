import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.drasyrafazizan.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/blog',
    '/appointment',
    '/services/details',
    '/doctors/details',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Blog posts
  const blogPosts = [
    'kanser-ginekologi-saringan-faktor-risiko-pengesanan-awal',
    'kesuburan-pembekuan-telur-perancangan-masa-depan',
    'endometriosis-kesakitan-senyap-perjuangan-tersembunyi',
    'kemajuan-pembedahan-ginekologi-teknik-minimal-invasif-robotik-dan-tanpa-parut-yang-mengubah-penjagaan-kesihatan-wanita',
    'sindrom-ovari-polisistik-pcos-apa-yang-perlu-diketahui-dijangka-cara-menguruskannya-setiap-hari',
    'simptom-red-flag-dalam-kalangan-wanita-bila-perlu-jumpa-pakar-ginekologi-dengan-segera',
    'menopause-dan-perimenopause-lebih-dari-sekadar-klise',
    'ketidakcukupan-serviks-cervical-insufficiency-cerclage-perlindungan-kehamilan-anda',
    'prolaps-organ-pelvis-peranakan-jatuh-apa-wanita-perlu-tahu',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPosts]
}