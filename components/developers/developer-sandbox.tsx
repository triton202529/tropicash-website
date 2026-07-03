import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";

const sandboxCards = [
  {
    title: "Start in sandbox",
    description:
      "Developers begin with a controlled environment for app registration, integration planning, and safe testing foundations.",
  },
  {
    title: "Build with platform layers",
    description:
      "Integrations are designed around wallet, payment, authorization, webhook, and event foundations.",
  },
  {
    title: "Move through review",
    description:
      "Production access is planned as a governed process with capability review, partner alignment, and operational readiness checks.",
  },
] as const;

export function DeveloperSandbox() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="developer-sandbox-heading"
    >
      <SectionHeader
        id="developer-sandbox-heading"
        title="Sandbox-first by design."
        description="Tropicash developer access is being shaped around a controlled sandbox path, allowing integrations to be reviewed, tested, and prepared before broader production expansion."
        light
        badge="Sandbox-first"
        badgeTone="green"
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {sandboxCards.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-atlantic-50 text-atlantic-700"
                aria-hidden="true"
              >
                <div className="h-4 w-4 rounded-sm bg-atlantic-500" />
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
