import Link from "next/link";
import { HomeSection } from "@/components/home/section";
import {
  contactPrimaryLinkWideClass,
  contactSecondaryLinkWideClass,
} from "./contact-links";

export function ContactCta() {
  return (
    <HomeSection
      className="bg-atlantic-50/60 pb-16 md:pb-24"
      aria-labelledby="contact-cta-heading"
    >
      <div className="rounded-3xl border border-atlantic-100 bg-white px-8 py-14 text-center shadow-lg md:px-16 md:py-20">
        <h2
          id="contact-cta-heading"
          className="scroll-mt-24 text-3xl font-bold tracking-tight text-surface-light-foreground md:text-4xl"
        >
          Explore Tropicash before reaching out.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-surface-light-muted">
          Learn how Tropicash is preparing wallet, merchant, developer, security,
          and partner-ready payment infrastructure for the Caribbean.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/platform" className={contactPrimaryLinkWideClass}>
            Explore Platform
          </Link>
          <Link href="/partnerships" className={contactSecondaryLinkWideClass}>
            View Partnerships
          </Link>
        </div>
      </div>
    </HomeSection>
  );
}
