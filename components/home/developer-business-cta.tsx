import Link from "next/link";
import { HomeSection, SectionHeader } from "./section";
import { cn } from "@/lib/utils";

const capabilityCards = [
  {
    title: "Merchant payments",
    description: "Merchant payment acceptance being prepared",
    status: "In development",
  },
  {
    title: "Wallet APIs",
    description: "Prepare wallet integrations for balances, transfers, and webhooks",
    status: "In development",
  },
  {
    title: "Partner rails",
    description: "Partner-ready foundations for trusted financial institutions",
    status: "Partnerships",
  },
] as const;

export function DeveloperBusinessCta() {
  return (
    <HomeSection
      className="py-16 md:py-24"
      aria-labelledby="home-developer-band-heading"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-atlantic-800 via-atlantic-900 to-atlantic-950 p-8 shadow-2xl md:p-12 lg:p-16">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-caribbean-400/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-atlantic-400/10 blur-3xl" />
        </div>

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              id="home-developer-band-heading"
              title="Build with Tropicash. Accept with Tropicash."
              description="From merchant payments to wallet APIs, Tropicash is preparing the tools businesses and developers need to build modern financial experiences across the Caribbean."
              dark
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/developers"
                className={cn(
                  "inline-flex h-12 items-center justify-center rounded-xl bg-caribbean-600 px-6",
                  "text-sm font-semibold text-white transition-colors hover:bg-caribbean-500",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caribbean-400",
                  "focus-visible:ring-offset-2 focus-visible:ring-offset-atlantic-900",
                )}
              >
                View Developer Platform
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex h-12 items-center justify-center rounded-xl border border-white/25",
                  "bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm",
                  "transition-colors hover:bg-white/20 focus-visible:outline-none",
                  "focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2",
                  "focus-visible:ring-offset-atlantic-900",
                )}
              >
                Contact Tropicash
              </Link>
            </div>
          </div>

          <div className="relative space-y-3" aria-hidden="true">
            {capabilityCards.map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-atlantic-500/20 text-atlantic-200">
                  <div className="h-4 w-4 rounded-sm bg-atlantic-300" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">{card.title}</p>
                  <p className="mt-0.5 text-xs text-atlantic-200">
                    {card.description}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-caribbean-400/30 bg-caribbean-500/20 px-2.5 py-0.5 text-[11px] font-medium text-caribbean-300">
                  {card.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HomeSection>
  );
}
