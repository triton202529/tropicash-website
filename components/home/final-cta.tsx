import Link from "next/link";
import { HomeSection } from "./section";
import { cn } from "@/lib/utils";

export function FinalCta() {
  return (
    <HomeSection
      className="bg-atlantic-50/60 pb-16 md:pb-24"
      aria-labelledby="final-cta-heading"
    >
      <div className="rounded-3xl border border-atlantic-100 bg-white px-8 py-14 text-center shadow-lg md:px-16 md:py-20">
        <h2
          id="final-cta-heading"
          className="scroll-mt-24 text-3xl font-bold tracking-tight text-surface-light-foreground md:text-4xl"
        >
          Ready to shape the future of Caribbean payments?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-surface-light-muted">
          Explore the platform or start a partnership conversation with the
          Tropicash team.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/platform"
            className={cn(
              "inline-flex h-12 w-full items-center justify-center rounded-xl bg-caribbean-600 px-8",
              "text-sm font-semibold text-white shadow-md transition-colors hover:bg-caribbean-700",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caribbean-500",
              "focus-visible:ring-offset-2 sm:w-auto",
            )}
          >
            Explore Tropicash
          </Link>
          <Link
            href="/contact"
            className={cn(
              "inline-flex h-12 w-full items-center justify-center rounded-xl border border-atlantic-200",
              "bg-white px-8 text-sm font-semibold text-atlantic-700 shadow-xs",
              "transition-colors hover:bg-atlantic-50 focus-visible:outline-none",
              "focus-visible:ring-2 focus-visible:ring-atlantic-500 focus-visible:ring-offset-2 sm:w-auto",
            )}
          >
            Start a Partnership Conversation
          </Link>
        </div>
      </div>
    </HomeSection>
  );
}
