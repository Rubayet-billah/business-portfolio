import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@agency/ui';

const faqs = [
  {
    question: 'How do you measure the success of a campaign?',
    answer: 'We use advanced analytics and tracking tools to monitor Key Performance Indicators (KPIs) such as traffic, conversion rates, and ROI. We provide transparent, regular reports so you can see exactly how your campaign is performing.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Timeline varies depending on the service. PPC campaigns can show immediate results, while SEO and content marketing typically take 3-6 months to build momentum and deliver sustainable ROI.'
  },
  {
    question: 'Do you offer custom digital marketing packages?',
    answer: 'Yes! We understand that every business is unique. We tailor our strategies and packages based on your specific goals, industry, target audience, and budget.'
  },
  {
    question: 'Will I have a dedicated account manager?',
    answer: 'Absolutely. Every client is assigned a dedicated account manager who acts as your primary point of contact, ensuring clear communication and seamless execution of your strategy.'
  }
];

export function ProcessAndFAQSection() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Process Section */}
          <div>
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Our Process</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
              How We Work
            </h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {[
                { step: '01', title: 'Discovery & Analysis', desc: 'We dive deep into your business, target audience, and competitors to understand your unique landscape.' },
                { step: '02', title: 'Strategy Development', desc: 'Our experts craft a customized, data-driven marketing strategy aligned with your specific goals.' },
                { step: '03', title: 'Execution & Optimization', desc: 'We launch campaigns and continuously monitor, test, and optimize to maximize your return on investment.' },
                { step: '04', title: 'Reporting & Scaling', desc: 'Transparent reporting keeps you informed, while we identify new opportunities to scale your success.' },
              ].map((item, index) => (
                <div key={index} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    {item.step}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-card border p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">FAQ</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border bg-card mb-4 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
