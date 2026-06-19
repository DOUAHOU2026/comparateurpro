import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ComparisonTable, Conclusion, FAQSection, GuideSection, ProductDetail, ProductCard } from '@/components/ui';
import { getPostBySlug, getProductsByCategory, posts, products } from '@/components/data/products';

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return [
    ...posts.map((post) => ({ slug: post.slug })),
    { slug: 'electromenager' },
    { slug: 'chiens-chats' },
  ];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const slug = params.slug;

  if (slug === 'electromenager') {
    return {
      title: '🏠 Électroménager - Comparatifs de Produits',
      description: 'Découvrez nos guides et comparatifs détaillés sur les appareils électroménagers pour équiper votre maison.',
    };
  }

  if (slug === 'chiens-chats') {
    return {
      title: '🐶🐱 Chiens & Chats - Accessoires & Nourriture',
      description: 'Retrouvez nos sélections et comparatifs complets de produits pour chiens et chats : croquettes, fontaines à eau, litières et plus.',
    };
  }

  const post = getPostBySlug(slug);

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
  const slug = params.slug;

  // Handle Category Listing Pages
  if (slug === 'electromenager' || slug === 'chiens-chats') {
    const categoryTitle = slug === 'electromenager' ? '🏠 Électroménager' : '🐶🐱 Chiens & Chats';
    const categoryDesc = slug === 'electromenager' 
      ? 'Retrouvez nos guides d\'achat et comparatifs complets d\'appareils électroménagers pour la maison.'
      : 'Retrouvez nos guides d\'achat et comparatifs complets de produits, nourriture et accessoires pour vos animaux de compagnie.';
    
    const categoryPosts = posts
      .filter((post) => post.mainCategory === slug)
      .map((post) => {
        const postProducts = getProductsByCategory(post.category);
        const averageRating =
          postProducts.length > 0
            ? postProducts.reduce((total, product) => total + product.rating, 0) / postProducts.length
            : 0;

        return {
          slug: post.slug,
          title: post.title,
          image: post.heroImage,
          rating: Math.round((averageRating / 2) * 10) / 10,
          productsCount: postProducts.length,
        };
      });

    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {categoryTitle}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              {categoryDesc}
            </p>
          </header>

          {categoryPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryPosts.map((post, index) => (
                <ProductCard key={`${post.slug}-${index}`} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center shadow-sm">
              <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">Aucun comparatif disponible</h3>
              <p className="mt-1 text-sm text-slate-500">
                Nous préparons actuellement de nouveaux comparatifs pour cette catégorie. Revenez bientôt !
              </p>
              <div className="mt-6">
                <a href="/" className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition">
                  Retour à l'accueil
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Handle Article Page
  const post = getPostBySlug(slug);

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
          <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
            En tant que Partenaire Amazon, nous realisons un benefice sur les achats remplissant les conditions requises.
            Les liens vers Amazon peuvent etre des liens affilies. Les prix et disponibilites doivent etre verifies sur Amazon avant achat.
          </div>
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
