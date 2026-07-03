import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { ContactIconTile } from "./contact-icons";

const guidanceItems = [
  {
    title: "Your organization or role",
    description:
      "Share who you represent and your relationship to Caribbean commerce or financial services.",
  },
  {
    title: "Your country or market context",
    description:
      "Explain the Caribbean market or region relevant to your inquiry.",
  },
  {
    title: "Your interest area",
    description:
      "Indicate whether your interest is platform, developer, merchant, partnership, security, or company related.",
  },
  {
    title: "Your use case or partnership idea",
    description:
      "Describe the opportunity, integration, or collaboration you are exploring.",
  },
  {
    title: "Your timeline or readiness stage",
    description:
      "Note whether you are researching, planning, or preparing for a future phase of engagement.",
  },
  {
    title: "Any technical or compliance questions",
    description:
      "Include relevant questions about governance, security, or integration foundations.",
  },
] as const;

export function ContactAudienceCards() {
  return (
    <HomeSection
      className="bg-surface-light-soft py-16 md:py-24"
      aria-labelledby="contact-guidance-heading"
    >
      <SectionHeader
        id="contact-guidance-heading"
        title="Prepare a clear introduction."
        description="When reaching out, it helps to clearly explain who you are, what you are building or exploring, and which Tropicash pathway is most relevant."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guidanceItems.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <ContactIconTile variant="green" />
              <CardTitle className="mt-3 text-base">{item.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {item.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-surface-light-muted">
        This guidance is informational only. Tropicash does not collect inquiries
        through a form on this page.
      </p>
    </HomeSection>
  );
}
