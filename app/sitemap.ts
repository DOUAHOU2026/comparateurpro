import type { MetadataRoute } from 'next';
import { posts } from '../components/data/products';

const siteUrl = 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
