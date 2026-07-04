import Link from "next/link";
import { HomeSection } from "@/components/home/section";
import {
  developersPrimaryLinkWideClass,
  developersSecondaryLinkWideClass,
} from "./developers-links";

export function DeveloperCta() {
  return (
    <HomeSection
      className="bg-atlantic-50/60 pb-16 md:pb-24"
      aria-labelledby="developers-page-cta-heading"
    >
      <div className="rounded-3xl border border-atlantic-100 bg-white px-8 py-14 text-center shadow-lg md:px-16 md:py-20">
        <h2
          id="developers-page-cta-heading"
          className="scroll-mt-24 text-3xl font-bold tracking-tight text-surface-light-foreground md:text-4xl"
        >
          Build with Tropicash when the platform opens.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-surface-light-muted">
          Tropicash is preparing the developer foundation for Caribbean wallet,
          payment, and partner integrations.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/platform" className={developersPrimaryLinkWideClass}>
            Explore Platform
          </Link>
          <Link href="/contact" className={developersSecondaryLinkWideClass}>
            Contact Tropicash
          </Link>
        </div>
      </div>
    </HomeSection>
  );
}
