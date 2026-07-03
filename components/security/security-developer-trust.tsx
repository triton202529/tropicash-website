import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { cn } from "@/lib/utils";
import { CheckIconTile } from "./security-icons";

const developerItems = [
  {
    title: "Sandbox-first testing",
    description:
      "Controlled environments designed for safe integration development before broader access.",
  },
  {
    title: "Scoped app capabilities",
    description:
      "Integration access being designed around clearly defined, review-approved scopes.",
  },
  {
    title: "App review workflows",
    description:
      "Structured review processes for application registration and requested permissions.",
  },
  {
    title: "OAuth readiness",
    description:
      "Authorization patterns being prepared for controlled third-party application access.",
  },
  {
    title: "Webhook governance",
    description:
      "Event delivery foundations being designed with review and oversight in mind.",
  },
  {
    title: "API access controls",
    description:
      "Credential and access patterns being built to support governed developer connectivity.",
  },
] as const;

export function SecurityDeveloperTrust() {
  return (
    <HomeSection
      className="border-t border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="security-developer-heading"
    >
      <SectionHeader
        id="security-developer-heading"
        title="Secure developer access by design."
        description="Developer access is being designed with scoped capabilities, app review, sandbox-first testing, authorization readiness, and audit records."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {developerItems.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <CheckIconTile />
              <CardTitle className="mt-3 text-base">{item.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {item.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/developers"
          className={cn(
            "inline-flex h-11 items-center justify-center rounded-xl border border-atlantic-200",
            "bg-white px-6 text-sm font-semibold text-atlantic-700 shadow-xs",
            "transition-colors hover:bg-atlantic-50 focus-visible:outline-none",
            "focus-visible:ring-2 focus-visible:ring-atlantic-500 focus-visible:ring-offset-2",
          )}
        >
          Developer Platform
        </Link>
      </div>
    </HomeSection>
  );
}
