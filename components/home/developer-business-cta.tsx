import Link from "next/link";
import { HomeSection, SectionHeader } from "./section";
import { cn } from "@/lib/utils";

export function DeveloperBusinessCta() {
  return (
    <HomeSection
      className="py-16 md:py-24"
      aria-labelledby="developer-cta-heading"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-atlantic-800 via-atlantic-900 to-atlantic-950 p-8 md:p-12 lg:p-16">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              id="developer-cta-heading"
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
                  "inline-flex h-12 items-center justify-center rounded-xl border border-white/20",
                  "bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm",
                  "transition-colors hover:bg-white/20 focus-visible:outline-none",
                  "focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2",
                  "focus-visible:ring-offset-atlantic-900",
                )}
              >
                Contact Partnerships
              </Link>
            </div>
          </div>

          {/* Abstract code/API visual */}
          <div className="relative" aria-hidden="true">
            <div className="rounded-2xl border border-white/10 bg-atlantic-950/60 p-6 font-mono text-sm shadow-xl backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-caribbean-400" />
                <div className="h-3 w-3 rounded-full bg-atlantic-400" />
                <div className="h-3 w-3 rounded-full bg-atlantic-600" />
                <span className="ml-2 text-xs text-atlantic-300">
                  api.tropicash.com
                </span>
              </div>
              <pre className="overflow-x-auto text-atlantic-200">
                <code>{`POST /v1/wallets/transfer
{
  "amount": "••••",
  "currency": "USD",
  "recipient": "••••"
}

→ 202 Accepted`}</code>
              </pre>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-caribbean-500/20 px-2.5 py-0.5 text-xs text-caribbean-300">
                  Sandbox ready
                </span>
                <span className="rounded-full bg-atlantic-500/20 px-2.5 py-0.5 text-xs text-atlantic-200">
                  OAuth 2.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  );
}
