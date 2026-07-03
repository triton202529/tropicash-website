import Link from "next/link";
import { HomeSection } from "./section";
import { cn } from "@/lib/utils";

export function FinalCta() {
  return (
    <HomeSection className="pb-16 md:pb-24" aria-labelledby="final-cta-heading">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-atlantic-700 via-atlantic-800 to-atlantic-900 px-8 py-14 text-center md:px-16 md:py-20">
        {/* Decorative elements */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-caribbean-400/10 blur-2xl" />
          <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-atlantic-400/10 blur-2xl" />
        </div>

        <div className="relative">
          <h2
            id="final-cta-heading"
            className="text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Ready to shape the future of Caribbean payments?
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/platform"
              className={cn(
                "inline-flex h-12 w-full items-center justify-center rounded-xl bg-caribbean-600 px-8",
                "text-sm font-semibold text-white transition-colors hover:bg-caribbean-500",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caribbean-400",
                "focus-visible:ring-offset-2 focus-visible:ring-offset-atlantic-800 sm:w-auto",
              )}
            >
              Explore Tropicash
            </Link>
            <Link
              href="/contact"
              className={cn(
                "inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/25",
                "bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm",
                "transition-colors hover:bg-white/20 focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2",
                "focus-visible:ring-offset-atlantic-800 sm:w-auto",
              )}
            >
              Start a Partnership Conversation
            </Link>
          </div>
        </div>
      </div>
    </HomeSection>
  );
}
