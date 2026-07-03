import Link from "next/link";
import { HomeSection } from "@/components/home/section";
import { cn } from "@/lib/utils";
import {
  securityPrimaryLinkClass,
  securitySecondaryLinkClass,
} from "./security-links";

const heroLayers = [
  { label: "Account Protection", chip: "Foundation" },
  { label: "KYC Readiness", chip: "Readiness" },
  { label: "Treasury Review", chip: "Governance" },
  { label: "Audit Records", chip: "Records" },
  { label: "Risk Monitoring", chip: "Monitoring" },
] as const;

export function SecurityHero() {
  return (
    <HomeSection
      className="relative overflow-hidden bg-gradient-to-b from-atlantic-100 via-atlantic-50 to-surface-light-soft pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16"
      aria-labelledby="security-hero-heading"
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
            Tropicash Security
          </span>

          <h1
            id="security-hero-heading"
            className="mt-6 scroll-mt-24 text-4xl font-bold tracking-tight text-surface-light-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            Security and governance for Caribbean payment infrastructure.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-surface-light-muted">
            Tropicash is being built with account protection, compliance
            readiness, treasury controls, audit records, and risk monitoring
            foundations to support responsible digital payments.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/platform" className={securityPrimaryLinkClass}>
              Explore the Platform
            </Link>
            <Link href="/partnerships" className={securitySecondaryLinkClass}>
              Contact Partnerships
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
                Security &amp; governance
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
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
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
