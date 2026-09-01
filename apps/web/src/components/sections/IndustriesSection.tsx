import { Building2, Landmark, GraduationCap, HeartPulse, ShoppingBag, Truck, Plane, Camera, Coffee, Briefcase } from 'lucide-react';

const industries = [
  { name: 'Real Estate', icon: Building2 },
  { name: 'Finance', icon: Landmark },
  { name: 'Education', icon: GraduationCap },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Logistics', icon: Truck },
  { name: 'Travel', icon: Plane },
  { name: 'Media', icon: Camera },
  { name: 'Food & Beverage', icon: Coffee },
  { name: 'Corporate', icon: Briefcase },
];

export function IndustriesSection() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Industries We Serve</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Expertise Across Various Sectors
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver specialized digital marketing solutions tailored to the unique challenges of your industry.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 rounded-2xl border bg-card text-center hover:border-primary/50 hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <industry.icon className="h-6 w-6 text-foreground/70 group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors duration-300">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
