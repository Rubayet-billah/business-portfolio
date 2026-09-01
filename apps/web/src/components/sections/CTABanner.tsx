import { Button } from '@agency/ui';

export function CTABanner() {
  return (
    <section className="bg-primary py-20 text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />
      
      <div className="container-page relative z-10 text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-3xl mx-auto">
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className="mb-10 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Join hundreds of successful companies who trust us to deliver exceptional digital marketing results. Let&apos;s discuss your project today.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" className="rounded-full px-8 text-primary font-semibold">
            Get a Free Proposal
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/20 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-white">
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
