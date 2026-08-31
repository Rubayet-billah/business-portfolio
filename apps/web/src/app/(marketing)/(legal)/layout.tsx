export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-pad">
      <div className="container-page max-w-3xl">{children}</div>
    </div>
  );
}
