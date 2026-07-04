import Link from "next/link";
import { HomeSection } from "@/components/home/section";
import { legalPrimaryLinkWideClass } from "./legal-links";

export function LegalContact() {
  return (
    <HomeSection
      className="bg-atlantic-50/60 pb-16 md:pb-24"
      aria-labelledby="legal-contact-heading"
    >
      <div className="rounded-3xl border border-atlantic-100 bg-white px-8 py-14 text-center shadow-lg md:px-16 md:py-20">
        <h2
          id="legal-contact-heading"
          className="scroll-mt-24 text-3xl font-bold tracking-tight text-surface-light-foreground md:text-4xl"
        >
          Questions about Tropicash notices?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-surface-light-muted">
          For questions about Tropicash, partnership discussions, or future
          policy areas, contact the Tropicash team.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className={legalPrimaryLinkWideClass}>
            Contact Tropicash
          </Link>
        </div>
      </div>
    </HomeSection>
  );
}
