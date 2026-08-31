import type {
  ApiEnvelope,
  BlogPost,
  CaseStudy,
  Faq,
  Industry,
  ListParams,
  Paginated,
  PortfolioItem,
  Service,
  SiteSettings,
  TeamMember,
  Testimonial,
} from '@agency/types';

/** Collections addressable through a transport. */
export type TransportCollection =
  | 'services'
  | 'blog'
  | 'portfolio'
  | 'caseStudies'
  | 'testimonials'
  | 'faqs'
  | 'industries'
  | 'team'
  | 'siteSettings';

export interface ListRequest {
  collection: TransportCollection;
  kind: 'list';
  params?: ListParams;
}

export interface GetRequest {
  collection: TransportCollection;
  kind: 'get';
  slugOrId: string;
}

export type TransportRequest = ListRequest | GetRequest;

/**
 * The one abstraction the whole site sits on. `fixtureTransport` implements it
 * over local typed data now; `httpTransport` implements it over the Express API
 * later. Swapping them is a one-line change in the consumer.
 */
export interface Transport {
  request<T>(req: TransportRequest): Promise<ApiEnvelope<T>>;
}

/** Shape the fixture transport is seeded with. */
export interface FixtureDataset {
  services: Service[];
  blog: BlogPost[];
  portfolio: PortfolioItem[];
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
  faqs: Faq[];
  industries: Industry[];
  team: TeamMember[];
  siteSettings: SiteSettings;
}

export interface ContentResource<T> {
  list(params?: ListParams): Promise<Paginated<T>>;
  get(slugOrId: string): Promise<T | null>;
}

export interface ContentClient {
  services: ContentResource<Service>;
  blog: ContentResource<BlogPost>;
  portfolio: ContentResource<PortfolioItem>;
  caseStudies: ContentResource<CaseStudy>;
  testimonials: ContentResource<Testimonial>;
  faqs: ContentResource<Faq>;
  industries: ContentResource<Industry>;
  team: ContentResource<TeamMember>;
  getSiteSettings(): Promise<SiteSettings | null>;
}
