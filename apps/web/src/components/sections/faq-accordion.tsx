import type { Faq } from '@agency/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@agency/ui';
import { SectionHeading } from '@/components/shared';

export function FaqAccordion({
  faqs,
  eyebrow = 'FAQ',
  title = 'Frequently asked questions',
  description,
}: {
  faqs: Faq[];
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}) {
  if (!faqs.length) return null;

  return (
    <section className="section-pad">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading align="left" eyebrow={eyebrow} title={title} description={description} />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
