import Link from "next/link";
import { HomeSection } from "@/components/home/section";
import {
  platformPrimaryLinkWideClass,
  platformSecondaryLinkWideClass,
} from "./platform-links";

export function PlatformCta() {
  return (
    <HomeSection
      className="bg-atlantic-50/60 pb-16 md:pb-24"
      aria-labelledby="platform-cta-heading"
    >
      <div className="rounded-3xl border border-atlantic-100 bg-white px-8 py-14 text-center shadow-lg md:px-16 md:py-20">
        <h2
          id="platform-cta-heading"
          className="scroll-mt-24 text-3xl font-bold tracking-tight text-surface-light-foreground md:text-4xl"
        >
          Explore the platform. Build the network.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-surface-light-muted">
          Tropicash is preparing the foundation for Caribbean digital payments
          across users, businesses, developers, and financial partners.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/developers" className={platformPrimaryLinkWideClass}>
            View Developer Platform
          </Link>
          <Link href="/partnerships" className={platformSecondaryLinkWideClass}>
            Start a Partnership Conversation
          </Link>
        </div>
      </div>
    </HomeSection>
  );
}
