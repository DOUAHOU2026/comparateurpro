import type { MetadataRoute } from 'next';
import { posts } from '@/components/data/products';

const siteUrl = 'https://comparateurpr.online';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', 'electromenager', 'chiens-chats', 'cookies', 'confidentialite', 'mentions-legales'];

  return [
    ...staticPages.map((path) => ({
      url: path ? `${siteUrl}/${path}` : `${siteUrl}/`,
      changeFrequency: path === '' ? ('weekly' as const) : ('yearly' as const),
      priority: path === '' ? 1 : path === 'electromenager' || path === 'chiens-chats' ? 0.8 : 0.3,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/${post.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ];
}
