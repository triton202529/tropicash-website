import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { LegalIconTile } from "./legal-icons";

const notices = [
  {
    title: "Informational website",
    description:
      "This site provides corporate, product, developer, security, partnership, and contact information only.",
  },
  {
    title: "No financial advice",
    description:
      "Nothing on this website should be interpreted as financial, legal, investment, or regulatory advice.",
  },
  {
    title: "No guarantee of availability",
    description:
      "Platform features, timelines, and service availability may change as Tropicash development continues.",
  },
  {
    title: "No production money movement",
    description:
      "This website does not initiate, process, or execute wallet transfers, payments, or financial transactions.",
  },
  {
    title: "No public bank connectivity claim",
    description:
      "Public pages do not represent live bank integrations, partner connectivity, or production payment rails.",
  },
  {
    title: "No final legal terms yet",
    description:
      "Formal terms, privacy policies, and partner agreements are planned and will require formal review before production access.",
  },
] as const;

export function LegalWebsiteNotices() {
  return (
    <HomeSection
      className="bg-gradient-to-b from-atlantic-50 to-surface-light-soft py-16 md:py-24"
      aria-labelledby="legal-website-notices-heading"
    >
      <SectionHeader
        id="legal-website-notices-heading"
        title="Website use notices."
        description="These notices apply to the Tropicash corporate website and its development-stage informational content."
        align="center"
        className="mx-auto"
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {notices.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <LegalIconTile />
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
