type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <article className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">Legal</p>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h1>
        <p className="mb-10 text-lg leading-8 text-gray-600">{intro}</p>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-xl font-bold text-gray-900">{section.title}</h2>
              <div className="space-y-3 text-sm leading-7 text-gray-700">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
