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
    siteConfig.description,
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
