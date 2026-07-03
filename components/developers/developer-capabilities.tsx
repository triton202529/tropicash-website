import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";

const capabilities = [
  {
    title: "App registration",
    description:
      "Foundations for registering applications, use cases, and requested integration capabilities.",
  },
  {
    title: "API credentials foundation",
    description:
      "Credential management patterns being prepared for sandbox-first developer access.",
  },
  {
    title: "Wallet API readiness",
    description:
      "API foundations designed to support wallet balances, transfers, and activity workflows.",
  },
  {
    title: "Merchant payment integration readiness",
    description:
      "Integration patterns being prepared for business payment acceptance and tracking.",
  },
  {
    title: "OAuth and app authorization readiness",
    description:
      "Authorization flows being designed for controlled third-party application access.",
  },
  {
    title: "Webhook and event readiness",
    description:
      "Event notification foundations designed to support integration workflows.",
  },
  {
    title: "SDK direction",
    description:
      "Client library direction being planned to simplify common integration patterns.",
  },
  {
    title: "Sandbox testing flows",
    description:
      "Controlled testing environments designed for safe integration development.",
  },
  {
    title: "Capability review",
    description:
      "Review workflows being built to evaluate requested integration capabilities.",
  },
  {
    title: "Production access pathway",
    description:
      "Governed production access planned as a future-phase, review-dependent process.",
  },
] as const;

export function DeveloperCapabilities() {
  return (
    <HomeSection
      className="bg-surface-light-soft py-16 md:py-24"
      aria-labelledby="developer-capabilities-heading"
    >
      <SectionHeader
        id="developer-capabilities-heading"
        title="Developer capabilities being prepared."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-caribbean-50 text-caribbean-700"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
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
