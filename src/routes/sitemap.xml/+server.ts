import type { RequestHandler } from './$types';

const SITE_URL = 'https://www.cloverfileve.com';

interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Static pages with their priorities and change frequencies
const staticPages: SitemapEntry[] = [
  // Homepage - highest priority
  { url: '/', priority: 1.0, changefreq: 'weekly' },

  // Main pages - high priority
  { url: '/quienes-somos', priority: 0.9, changefreq: 'monthly' },
  { url: '/servicios', priority: 0.9, changefreq: 'monthly' },
  { url: '/contacto', priority: 0.8, changefreq: 'monthly' },

  // Service pages - high priority
  { url: '/servicios/digitalizacion', priority: 0.9, changefreq: 'monthly' },
  { url: '/servicios/custodia', priority: 0.9, changefreq: 'monthly' },
  { url: '/servicios/almacenamiento', priority: 0.9, changefreq: 'monthly' },
  { url: '/servicios/workflows', priority: 0.9, changefreq: 'monthly' },

  // Legal pages - low priority
  { url: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { url: '/terms-of-services', priority: 0.3, changefreq: 'yearly' },
];

function generateSitemapXml(entries: SitemapEntry[]): string {
  const today = new Date().toISOString().split('T')[0];

  const urls = entries.map(entry => {
    const lastmod = entry.lastmod || today;
    const changefreq = entry.changefreq || 'monthly';
    const priority = entry.priority !== undefined ? entry.priority.toFixed(1) : '0.5';

    return `  <url>
    <loc>${SITE_URL}${entry.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`;
}

export const GET: RequestHandler = async () => {
  // In the future, you could fetch dynamic blog posts and case studies here
  // and add them to the sitemap with their actual lastmod dates

  const sitemap = generateSitemapXml(staticPages);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600' // Cache for 1 hour
    }
  });
};
