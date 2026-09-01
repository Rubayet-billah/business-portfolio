import { HeroSection } from '@/components/sections/HeroSection';
import { ValuePropSection } from '@/components/sections/ValuePropSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CTABanner } from '@/components/sections/CTABanner';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { ProcessAndFAQSection } from '@/components/sections/ProcessAndFAQSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropSection />
      <ServicesSection />
      <CTABanner />
      <IndustriesSection />
      <SocialProofSection />
      <ProcessAndFAQSection />
    </>
  );
}
