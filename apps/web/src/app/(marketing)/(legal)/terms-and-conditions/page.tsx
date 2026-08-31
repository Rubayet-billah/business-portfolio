import { LegalPageView, legalMetadata } from '../_legal-page';

export const metadata = legalMetadata('terms-and-conditions');

export default function Page() {
  return <LegalPageView slug="terms-and-conditions" />;
}
