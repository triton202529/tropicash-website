import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { ContactIconTile } from "./contact-icons";
import { contactCardLinkClass } from "./contact-links";

const pathways = [
  {
    title: "Wallet and User Interest",
    description:
      "For questions about Tropicash's planned wallet experience for sending, receiving, funding, and managing money.",
    cta: "Explore Platform",
    href: "/platform",
  },
  {
    title: "Partnerships",
    description:
      "For banks, financial institutions, regional businesses, and ecosystem collaborators exploring future collaboration.",
    cta: "View Partnerships",
    href: "/partnerships",
  },
  {
    title: "Developers",
    description:
      "For technical teams interested in API foundations, sandbox readiness, app authorization, and integration direction.",
    cta: "View Developers",
    href: "/developers",
  },
  {
    title: "Merchants and Businesses",
    description:
      "For businesses interested in merchant payment acceptance and digital commerce readiness.",
    cta: "Explore Platform",
    href: "/platform",
  },
  {
    title: "Financial Institutions",
    description:
      "For regulated institutions interested in partner-ready governance, security, compliance readiness, and future connectivity.",
    cta: "View Security",
    href: "/security",
  },
  {
    title: "Company Inquiries",
    description:
      "For general questions about Tropicash's mission, company direction, and Caribbean-first platform vision.",
    cta: "View Company",
    href: "/company",
  },
  {
    title: "Security and Trust",
    description:
      "For questions about security posture, governance, responsible rollout, and platform trust foundations.",
    cta: "View Security",
    href: "/security",
  },
] as const;

export function ContactPathways() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="contact-pathways-heading"
    >
      <SectionHeader
        id="contact-pathways-heading"
        title="Choose the right contact path."
        description="Tropicash is being developed across platform, developer, security, partnership, and company foundations. These pathways help direct inquiries to the right conversation."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pathways.map((item) => (
          <Card key={item.title} variant="light" className="flex flex-col">
            <CardHeader>
              <ContactIconTile />
              <CardTitle className="mt-3 text-base">{item.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto pt-0">
              <Link href={item.href} className={contactCardLinkClass}>
                {item.cta}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </HomeSection>
  );
}
