import { LegalPageView, legalMetadata } from '../_legal-page';

export const metadata = legalMetadata('privacy-policy');

export default function Page() {
  return <LegalPageView slug="privacy-policy" />;
}
