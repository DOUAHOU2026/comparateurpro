import { posts } from '../../components/data/products';

const siteUrl = 'https://example.com';

export function GET() {
  const items = posts
    .map(
      (post) => `
        <item>
          <title>${post.title}</title>
          <link>${siteUrl}/${post.slug}</link>
          <guid>${siteUrl}/${post.slug}</guid>
          <description><![CDATA[${post.metaDescription}]]></description>
        </item>`,
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Amazon Comparateur</title>
        <link>${siteUrl}</link>
        <description>Comparatifs produits generes depuis des donnees verifiees.</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
