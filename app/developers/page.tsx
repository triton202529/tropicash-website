import type { Metadata } from "next";
import {
  DeveloperApiFoundations,
  DeveloperCapabilities,
  DeveloperCta,
  DeveloperGovernance,
  DeveloperIntegrationJourney,
  DeveloperReadiness,
  DeveloperSandbox,
  DevelopersHero,
} from "@/components/developers";

export const metadata: Metadata = {
  title: {
    absolute: "Tropicash Developers | Caribbean Payment API Platform",
  },
  description:
    "Explore Tropicash developer foundations being prepared for sandbox-first wallet integrations, merchant payments, app authorization, webhooks, and Caribbean payment infrastructure.",
};

export default function DevelopersPage() {
  return (
    <>
      <DevelopersHero />
      <DeveloperSandbox />
      <DeveloperCapabilities />
      <DeveloperApiFoundations />
      <DeveloperIntegrationJourney />
      <DeveloperGovernance />
      <DeveloperReadiness />
      <DeveloperCta />
    </>
  );
}
