import { HomeSection, SectionHeader } from "@/components/home/section";

const noticePoints = [
  "The public website is informational and does not provide live financial services.",
  "The Tropicash platform is in development and not publicly available for production money movement.",
  "Public pages do not create user accounts, initiate transfers, process payments, issue credentials, or provide live financial services.",
  "Nothing on this site should be read as a guarantee of service availability, product launch timing, or future feature delivery.",
] as const;

export function LegalImportantNotice() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="legal-notice-heading"
    >
      <SectionHeader
        id="legal-notice-heading"
        title="Tropicash is being built."
        description="This corporate website shares development-stage information about Tropicash wallet and payment infrastructure. It is not a live product, banking service, or final legal documentation site."
        light
      />

      <div className="mt-12 rounded-2xl border border-atlantic-100 bg-white p-6 shadow-md md:p-8">
        <ul className="space-y-4">
          {noticePoints.map((point) => (
            <li key={point} className="flex gap-3">
              <span
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-atlantic-500"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-surface-light-muted md:text-base">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </HomeSection>
  );
}
