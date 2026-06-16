import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ComparisonTable, Conclusion, FAQSection, GuideSection, ProductDetail } from '@/components/ui';
import { getPostBySlug, getProductsByCategory, posts, products } from '@/components/data/products';

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
    },
  };
}

export default function ArticlePage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(post.category);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const productSchema = categoryProducts.map((product) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
  }));

  return (
    <article className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <header className="border-b border-gray-200 bg-gray-50 py-10">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">{post.intro}</p>
        </div>
      </header>

      <section id="comparatif" className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ComparisonTable products={categoryProducts} />
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {categoryProducts.map((product, index) => (
            <ProductDetail key={product.id} product={product} badgeIndex={index} />
          ))}
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <GuideSection title={post.guideTitle} />
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQSection questions={post.faq} />
        </div>
      </section>

      <section className="bg-indigo-50 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Conclusion />
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm text-gray-500">Vous cherchez autre chose ?</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['aspirateurs sans sac', 'robots de cuisine', 'purificateurs d air'].map((tag) => (
              <a
                key={tag}
                href={`/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-200"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
