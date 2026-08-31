import { LegalPageView, legalMetadata } from '../_legal-page';

export const metadata = legalMetadata('cookies-policy');

export default function Page() {
  return <LegalPageView slug="cookies-policy" />;
}
