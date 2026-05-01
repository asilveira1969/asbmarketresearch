type FAQBlockProps = { items: Array<{ question: string; answer: string }> };

export function FAQBlock({ items }: FAQBlockProps) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details key={item.question} className="surface-card">
          <summary className="cursor-pointer list-none text-lg font-medium text-brand-primary">{item.question}</summary>
          <p className="mt-4 text-body-secondary">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
