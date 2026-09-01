import { Button } from '@agency/ui';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/20" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-sm text-muted-foreground mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              Best Digital Marketing Agency
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              Elevate Your Brand With <span className="text-primary">Marketorr</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              We deliver data-driven digital marketing solutions that accelerate growth, boost conversions, and maximize your ROI. Partner with us to dominate your market.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
                Discover More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Contact Us
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Data Driven</span>
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-square w-full rounded-2xl bg-muted/30 overflow-hidden border shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
              {/* Placeholder for hero image */}
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <p>Hero Image Placeholder</p>
              </div>
              
              {/* Floating widget */}
              <div className="absolute bottom-6 left-6 rounded-xl bg-card p-4 shadow-lg border animate-fade-in-up">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="font-bold text-lg">99%</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Client Retention</p>
                    <p className="text-xs text-muted-foreground">Proven results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
