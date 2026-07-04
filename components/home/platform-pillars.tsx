import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "./section";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Digital Wallet",
    description:
      "Wallet accounts designed for sending, receiving, funding, balance management, and transaction history.",
    accent: "border-t-atlantic-500",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    title: "Merchant Payments",
    description:
      "Tools for businesses to accept and manage Tropicash payments.",
    accent: "border-t-caribbean-500",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Developer APIs",
    description:
      "API credentials, OAuth, wallet endpoints, and sandbox readiness.",
    accent: "border-t-atlantic-400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Withdrawals & Treasury",
    description:
      "Controlled withdrawal review, payout tracking, and operational oversight.",
    accent: "border-t-atlantic-600",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: "Security & Compliance",
    description:
      "KYC readiness, account controls, audit logs, and risk monitoring.",
    accent: "border-t-caribbean-600",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
] as const;

export function PlatformPillars() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-gradient-to-b from-atlantic-50 to-surface-light-soft py-16 md:py-24"
      aria-labelledby="pillars-heading"
    >
      <SectionHeader
        id="pillars-heading"
        title="One platform. Wallet first. Multiple payment layers."
        align="center"
        className="mx-auto"
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Card
            key={pillar.title}
            variant="light"
            className={cn(
              "border-t-4",
              pillar.accent,
              index === 4 && "sm:col-span-2 lg:col-span-1",
            )}
          >
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-atlantic-50 text-atlantic-700">
                {pillar.icon}
              </div>
              <CardTitle className="mt-3">{pillar.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {pillar.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </HomeSection>
  );
}
