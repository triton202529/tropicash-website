import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { CompanyIconTile } from "./company-icons";

const focusAreas = [
  {
    title: "Local payment needs",
    description:
      "Foundations shaped by everyday Caribbean wallet and payment requirements.",
  },
  {
    title: "Merchant access",
    description:
      "Tools being prepared to help businesses participate in digital commerce.",
  },
  {
    title: "Developer access",
    description:
      "Integration foundations for teams building regional financial experiences.",
  },
  {
    title: "Financial partner collaboration",
    description:
      "Pathways being prepared for trusted institutions and regulated partners.",
  },
  {
    title: "Responsible rollout",
    description:
      "Phased development designed to support careful platform maturation.",
  },
  {
    title: "Regional connectivity",
    description:
      "Long-term preparation for broader Caribbean payment network collaboration.",
  },
] as const;

export function CompanyCaribbeanFocus() {
  return (
    <HomeSection
      className="bg-gradient-to-b from-atlantic-50 to-surface-light-soft py-16 md:py-24"
      aria-labelledby="company-caribbean-heading"
    >
      <SectionHeader
        id="company-caribbean-heading"
        title="Designed around Caribbean realities."
        description="Tropicash is being shaped with the needs of Caribbean users, merchants, banks, developers, and businesses in mind, including fragmented payment options, cash-heavy workflows, limited digital access, and the need for trusted local-first financial infrastructure."
        light
        badge="Caribbean-first"
        badgeTone="green"
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {focusAreas.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <CompanyIconTile variant="green" />
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
