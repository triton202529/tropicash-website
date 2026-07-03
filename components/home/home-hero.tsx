import Link from "next/link";
import { HomeSection } from "./section";
import { cn } from "@/lib/utils";

const platformLayers = [
  {
    label: "Tropicash Wallet",
    description: "Balances & transfers",
    accent: "bg-atlantic-500",
  },
  {
    label: "Business Payments",
    description: "Merchant acceptance",
    accent: "bg-caribbean-500",
  },
  {
    label: "Developer APIs",
    description: "Integration layer",
    accent: "bg-atlantic-400",
  },
  {
    label: "Security & Compliance",
    description: "Governance controls",
    accent: "bg-atlantic-700",
  },
] as const;

const visualChips = [
  "Wallet ready",
  "Secure transaction",
  "API approved",
  "Merchant payment",
  "Caribbean-ready",
] as const;

export function HomeHero() {
  return (
    <HomeSection
      className="relative overflow-hidden bg-gradient-to-b from-atlantic-50 via-background to-background pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Decorative network motif */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-atlantic-200/30 blur-3xl" />
        <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-caribbean-200/25 blur-3xl" />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center rounded-full border border-atlantic-200 bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-atlantic-700 uppercase shadow-xs backdrop-blur-sm">
            Caribbean-first payment platform
          </span>

          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            Digital money infrastructure for the Caribbean.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Tropicash brings wallets, payments, business tools, and
            developer-ready financial APIs into one secure platform built for
            Caribbean commerce.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/platform"
              className={cn(
                "inline-flex h-12 items-center justify-center rounded-xl bg-caribbean-600 px-6",
                "text-sm font-semibold text-white shadow-md transition-colors",
                "hover:bg-caribbean-700 focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-caribbean-500 focus-visible:ring-offset-2",
              )}
            >
              Explore the Platform
            </Link>
            <Link
              href="/partnerships"
              className={cn(
                "inline-flex h-12 items-center justify-center rounded-xl border border-atlantic-200",
                "bg-white px-6 text-sm font-semibold text-atlantic-700 shadow-xs",
                "transition-colors hover:bg-atlantic-50 focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-atlantic-500 focus-visible:ring-offset-2",
              )}
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Abstract product illustration */}
        <div
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
          aria-hidden="true"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-atlantic-800 via-atlantic-900 to-atlantic-950 p-6 shadow-2xl md:p-8">
            {/* Soft inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-caribbean-500/10 via-transparent to-atlantic-400/10" />

            <div className="relative space-y-3">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-white/90">
                  Tropicash Platform
                </span>
                <span className="rounded-full bg-caribbean-500/20 px-2.5 py-0.5 text-xs font-medium text-caribbean-300">
                  Illustrative
                </span>
              </div>

              {platformLayers.map((layer, index) => (
                <div
                  key={layer.label}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm",
                    "transition-transform",
                    index % 2 === 1 && "ml-4 md:ml-8",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                      layer.accent,
                    )}
                  >
                    <div className="h-4 w-4 rounded-sm bg-white/80" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {layer.label}
                    </p>
                    <p className="text-xs text-atlantic-200/80">
                      {layer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating chips */}
            <div className="relative mt-5 flex flex-wrap gap-2">
              {visualChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-atlantic-100"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Connection lines motif */}
            <svg
              className="absolute -right-2 -bottom-2 h-24 w-24 text-caribbean-400/20"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="20" cy="80" r="4" fill="currentColor" />
              <circle cx="60" cy="40" r="4" fill="currentColor" />
              <circle cx="85" cy="70" r="4" fill="currentColor" />
              <line
                x1="20"
                y1="80"
                x2="60"
                y2="40"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="60"
                y1="40"
                x2="85"
                y2="70"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
    </HomeSection>
  );
}
