import type { Metadata } from "next";
import {
  PartnershipAudience,
  PartnershipCta,
  PartnershipGovernance,
  PartnershipModel,
  PartnershipOpportunities,
  PartnershipReadiness,
  PartnershipsHero,
  PartnershipUseCases,
} from "@/components/partnerships";

export const metadata: Metadata = {
  title: {
    absolute:
      "Tropicash Partnerships | Caribbean Payment Infrastructure Collaboration",
  },
  description:
    "Explore Tropicash partnership pathways being prepared for banks, merchants, developers, regional businesses, and Caribbean payment ecosystem partners.",
};

export default function PartnershipsPage() {
  return (
    <>
      <PartnershipsHero />
      <PartnershipAudience />
      <PartnershipOpportunities />
      <PartnershipModel />
      <PartnershipUseCases />
      <PartnershipGovernance />
      <PartnershipReadiness />
      <PartnershipCta />
    </>
  );
}
