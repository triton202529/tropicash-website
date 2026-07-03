import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";

const audiences = [
  {
    title: "Consumers",
    description:
      "A wallet experience for sending, receiving, funding, and managing money.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Businesses",
    description:
      "Payment acceptance and transaction tools for merchants and service providers.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
  {
    title: "Developers",
    description:
      "APIs, app registration, sandbox readiness, and integration foundations.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Financial Partners",
    description:
      "A pathway for regulated partners to connect modern payment experiences.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
      </svg>
    ),
  },
] as const;

export function PlatformAudience() {
  return (
    <HomeSection
      className="bg-gradient-to-b from-atlantic-50 to-surface-light-soft py-16 md:py-24"
      aria-labelledby="platform-audience-heading"
    >
      <SectionHeader
        id="platform-audience-heading"
        title="Built for the people who move Caribbean commerce."
        align="center"
        className="mx-auto"
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((item) => (
          <Card key={item.title} variant="light" className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-atlantic-50 text-atlantic-700"
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <CardTitle className="mt-3 text-base">{item.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {item.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </HomeSection>
  );
}
