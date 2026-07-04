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
    "Send, receive, and manage money with a Caribbean-first digital wallet — plus merchant payments, business tools, and developer-ready APIs.",
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
