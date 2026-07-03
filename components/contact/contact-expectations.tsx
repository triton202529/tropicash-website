import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { ContactIconTile } from "./contact-icons";

const expectations = [
  {
    title: "No live customer support claims",
    description:
      "This corporate website does not provide live wallet or customer support.",
  },
  {
    title: "No instant onboarding promise",
    description:
      "Partner, merchant, and developer onboarding remain future-phase and review-dependent.",
  },
  {
    title: "No live API access from this page",
    description:
      "Developer access and API credentials are not available through this contact page.",
  },
  {
    title: "No production partner approval from this page",
    description:
      "Partnership conversations do not imply immediate production connectivity.",
  },
  {
    title: "No wallet account support from this corporate site",
    description:
      "Wallet account questions are not handled through this public corporate website.",
  },
  {
    title: "Future contact workflows may be added later",
    description:
      "Additional contact and inquiry workflows may be introduced as the platform matures.",
  },
] as const;

export function ContactExpectations() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="contact-expectations-heading"
    >
      <SectionHeader
        id="contact-expectations-heading"
        title="Contact expectations."
        description="Tropicash is still being built. Contact pathways are intended for early business, developer, partnership, and company conversations while the platform matures."
        align="center"
        className="mx-auto"
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expectations.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <ContactIconTile />
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
