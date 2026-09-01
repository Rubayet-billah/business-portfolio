import { Button } from '@agency/ui';
import { CheckCircle2 } from 'lucide-react';

export function ValuePropSection() {
  const points = [
    'Proven Track Record of Success',
    'Data-Driven Strategies',
    'Transparent Reporting',
    'Dedicated Account Managers',
  ];

  return (
    <section className="section-pad bg-muted/30">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-card border shadow-xl overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary/20" />
               <div className="flex h-full items-center justify-center text-muted-foreground">
                 <p>About Us Image Placeholder</p>
               </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-2xl bg-primary/10 -z-10" />
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-blue-100 dark:bg-blue-900/30 -z-10" />
          </div>

          <div className="max-w-xl">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Us</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              We Are the Leading Digital Marketing Agency
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With years of experience and a passion for driving results, our team of experts is dedicated to helping your business thrive in the digital landscape. We don&apos;t just promise results; we deliver them.
            </p>

            <ul className="grid gap-4 sm:grid-cols-2 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="rounded-full px-8">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
