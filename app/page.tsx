import type { Metadata } from "next";
import {
  AudienceStrip,
  CaribbeanFirstSection,
  DeveloperBusinessCta,
  EcosystemFlow,
  FinalCta,
  HomeHero,
  PlatformPillars,
  ProblemSection,
  SecurityGovernance,
} from "@/components/home";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: siteConfig.title,
  description:
    "Digital money infrastructure for the Caribbean. Wallets, payments, business tools, and developer-ready financial APIs in one secure platform.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <AudienceStrip />
      <ProblemSection />
      <PlatformPillars />
      <EcosystemFlow />
      <DeveloperBusinessCta />
      <SecurityGovernance />
      <CaribbeanFirstSection />
      <FinalCta />
    </>
  );
}
