import { render, screen } from '@testing-library/react';
import { ServiceCard } from '@/components/shared/service-card';
import { services } from '@/content/services';

describe('<ServiceCard />', () => {
  const service = services[0];

  it('renders the service title as a heading', () => {
    render(<ServiceCard service={service} />);
    expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument();
  });

  it('links to the service detail route', () => {
    render(<ServiceCard service={service} />);
    expect(screen.getByRole('link', { name: service.title })).toHaveAttribute(
      'href',
      `/services/${service.slug}`
    );
  });

  it('shows the short description', () => {
    render(<ServiceCard service={service} />);
    expect(screen.getByText(service.shortDescription)).toBeInTheDocument();
  });
});
