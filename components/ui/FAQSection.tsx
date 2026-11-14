type FAQSectionProps = {
  questions: { q: string; a: string }[];
};

export function FAQSection({ questions }: FAQSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">Questions frequentes</h2>
      {questions.map((faq) => (
        <div key={faq.q} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">{faq.q}</h3>
          <p className="text-gray-600">{faq.a}</p>
        </div>
      ))}
    </div>
  );
}
