import type { Metadata } from "next";
import {
  SecurityControls,
  SecurityCta,
  SecurityDeveloperTrust,
  SecurityGovernance,
  SecurityHero,
  SecurityPartnerTrust,
  SecurityPrinciples,
  SecurityReadiness,
  SecurityRiskMonitoring,
} from "@/components/security";

export const metadata: Metadata = {
  title: {
    absolute:
      "Tropicash Security | Governance for Caribbean Payment Infrastructure",
  },
  description:
    "Learn how Tropicash is being built with account protection, KYC readiness, treasury controls, audit records, and risk monitoring foundations.",
};

export default function SecurityPage() {
  return (
    <>
      <SecurityHero />
      <SecurityPrinciples />
      <SecurityControls />
      <SecurityGovernance />
      <SecurityRiskMonitoring />
      <SecurityDeveloperTrust />
      <SecurityPartnerTrust />
      <SecurityReadiness />
      <SecurityCta />
    </>
  );
}
