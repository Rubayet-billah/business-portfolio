import { LegalPageView, legalMetadata } from '../_legal-page';

export const metadata = legalMetadata('refund-policy');

export default function Page() {
  return <LegalPageView slug="refund-policy" />;
}
