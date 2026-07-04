import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection } from "./section";

const audiences = [
  {
    title: "For People",
    description:
      "Send money, receive money, fund your wallet, and manage everyday balances.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "For Businesses",
    description:
      "Accept payments and manage customer transactions.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
  {
    title: "For Developers",
    description:
      "Build on Tropicash APIs and wallet infrastructure.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "For Financial Partners",
    description:
      "Pathways being prepared for trusted financial institutions and payment partners.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
      </svg>
    ),
  },
] as const;

export function AudienceStrip() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-12 md:py-16"
      aria-label="Audiences we serve"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((item) => (
          <Card
            key={item.title}
            variant="light"
            className="transition-shadow hover:shadow-lg"
          >
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
