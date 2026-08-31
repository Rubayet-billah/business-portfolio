import type { TeamMember } from '@agency/types';
import { base, img } from './_shared';

type Seed = [name: string, role: string, bio: string];

const seeds: Seed[] = [
  ['Jordan Ellis', 'Founder & CEO', 'Sets strategy and keeps every engagement pointed at measurable business outcomes.'],
  ['Riley Chen', 'Head of SEO', 'Leads the organic practice — technical health, content and authority.'],
  ['Sam Okafor', 'Creative Director', 'Owns brand, design systems and the creative bar across every deliverable.'],
  ['Alex Navarro', 'Head of Paid Media', 'Runs Google and Meta advertising with a focus on durable ROAS.'],
];

export const team: TeamMember[] = seeds.map(([name, role, bio], i) => ({
  ...base(i + 1),
  id: `team-${i + 1}`,
  name,
  role,
  bio,
  avatar: img(`mo-team-${i + 1}`, 400, 400),
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/agency', external: true },
  ],
}));
