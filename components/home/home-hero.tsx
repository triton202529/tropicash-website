import Link from "next/link";
import { HomeSection } from "./section";
import { cn } from "@/lib/utils";

const platformLayers = [
  {
    label: "Tropicash Wallet",
    description: "Balances & transfers",
    accent: "bg-atlantic-50 text-atlantic-700",
  },
  {
    label: "Business Payments",
    description: "Merchant acceptance",
    accent: "bg-atlantic-50 text-atlantic-700",
  },
  {
    label: "Developer APIs",
    description: "Integration layer",
    accent: "bg-atlantic-50 text-atlantic-700",
  },
  {
    label: "Security & Compliance",
    description: "Governance controls",
    accent: "bg-atlantic-50 text-atlantic-700",
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
      className="relative overflow-hidden bg-gradient-to-b from-atlantic-100 via-atlantic-50 to-surface-light-soft pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-atlantic-200/40 blur-3xl" />
        <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-caribbean-200/30 blur-3xl" />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center rounded-full border border-caribbean-200 bg-caribbean-50 px-3 py-1 text-xs font-semibold tracking-wide text-caribbean-700 uppercase shadow-xs">
            Caribbean-first payment platform
          </span>

          <h1
            id="hero-heading"
            className="mt-6 scroll-mt-24 text-4xl font-bold tracking-tight text-surface-light-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            Digital money infrastructure for the Caribbean.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-surface-light-muted">
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

        {/* Light card-based platform illustration */}
        <div
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
          aria-hidden="true"
        >
          <div className="relative rounded-3xl border border-atlantic-100 bg-white p-6 shadow-xl md:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-atlantic-900">
                Tropicash Platform
              </span>
              <span className="rounded-full border border-caribbean-200 bg-caribbean-50 px-2.5 py-0.5 text-xs font-medium text-caribbean-700">
                Caribbean-ready
              </span>
            </div>

            <div className="space-y-3">
              {platformLayers.map((layer, index) => (
                <div
                  key={layer.label}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl border border-atlantic-100 bg-atlantic-50/30 p-4 shadow-xs",
                    index % 2 === 1 && "ml-4 md:ml-8",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                      layer.accent,
                    )}
                  >
                    <div className="h-4 w-4 rounded-sm bg-atlantic-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-atlantic-900">
                      {layer.label}
                    </p>
                    <p className="text-xs text-surface-light-muted">
                      {layer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {visualChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-caribbean-200 bg-caribbean-50 px-2.5 py-1 text-[11px] font-medium text-caribbean-700"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  );
}
