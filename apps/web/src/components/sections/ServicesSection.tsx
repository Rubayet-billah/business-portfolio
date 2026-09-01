import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@agency/ui';
import { LineChart, Megaphone, MonitorSmartphone, PenTool, Search, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Search Engine Optimization',
    description: 'Boost your visibility and rank higher on search engines with our proven, data-driven SEO strategies.',
    icon: Search,
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand loyalty across all major social media platforms.',
    icon: Megaphone,
  },
  {
    title: 'Web Design & Development',
    description: 'Create stunning, responsive websites that convert visitors into loyal customers.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Content Marketing',
    description: 'Deliver valuable, relevant content that attracts and retains a clearly defined audience.',
    icon: PenTool,
  },
  {
    title: 'Pay Per Click (PPC)',
    description: 'Maximize your ROI with targeted ad campaigns that reach the right people at the right time.',
    icon: LineChart,
  },
  {
    title: 'App Development',
    description: 'Custom mobile applications designed to enhance user experience and streamline operations.',
    icon: Smartphone,
  },
];

export function ServicesSection() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Our Services</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            High-Impact Digital Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive digital marketing solutions tailored to your unique business needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-md">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
