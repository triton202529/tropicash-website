import Link from "next/link";
import { HomeSection } from "@/components/home/section";
import { cn } from "@/lib/utils";
import {
  platformPrimaryLinkClass,
  platformSecondaryLinkClass,
} from "./platform-links";

const heroLayers = [
  { label: "Wallet Layer", chip: "Send & receive" },
  { label: "Merchant Layer", chip: "Business payments" },
  { label: "Developer API Layer", chip: "Integration" },
  { label: "Treasury & Governance", chip: "Oversight" },
  { label: "Partner Rails", chip: "Connectivity" },
] as const;

export function PlatformHero() {
  return (
    <HomeSection
      className="relative overflow-hidden bg-gradient-to-b from-atlantic-100 via-atlantic-50 to-surface-light-soft pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16"
      aria-labelledby="platform-hero-heading"
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
          <span className="inline-flex items-center rounded-full border border-atlantic-200 bg-atlantic-50 px-3 py-1 text-xs font-semibold tracking-wide text-atlantic-700 uppercase shadow-xs">
            Tropicash Platform
          </span>

          <h1
            id="platform-hero-heading"
            className="mt-6 scroll-mt-24 text-4xl font-bold tracking-tight text-surface-light-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            One payment platform for Caribbean digital commerce.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-surface-light-muted">
            Tropicash brings wallet accounts for sending, receiving, funding,
            and managing money together with merchant payments, developer APIs,
            treasury controls, and partner-ready infrastructure in one
            Caribbean-first platform.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/developers" className={platformPrimaryLinkClass}>
              Explore Developer Tools
            </Link>
            <Link href="/partnerships" className={platformSecondaryLinkClass}>
              Partner With Tropicash
            </Link>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
          aria-hidden="true"
        >
          <div className="relative rounded-3xl border border-atlantic-100 bg-white p-6 shadow-xl md:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-atlantic-900">
                Platform layers
              </span>
              <span className="rounded-full border border-caribbean-200 bg-caribbean-50 px-2.5 py-0.5 text-xs font-medium text-caribbean-700">
                Illustrative
              </span>
            </div>

            <div className="space-y-2.5">
              {heroLayers.map((layer, index) => (
                <div
                  key={layer.label}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-xl border border-atlantic-100 bg-atlantic-50/40 px-4 py-3 shadow-xs",
                    index % 2 === 1 && "ml-3 md:ml-6",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-atlantic-50 text-atlantic-700">
                      <div className="h-3 w-3 rounded-sm bg-atlantic-500" />
                    </div>
                    <span className="text-sm font-semibold text-atlantic-900">
                      {layer.label}
                    </span>
                  </div>
                  <span className="hidden shrink-0 rounded-full border border-caribbean-200 bg-caribbean-50 px-2 py-0.5 text-[10px] font-medium text-caribbean-700 sm:inline">
                    {layer.chip}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  );
}
