import type { Metadata } from "next";
import {
  CompanyCaribbeanFocus,
  CompanyCta,
  CompanyGrowthPath,
  CompanyHero,
  CompanyMission,
  CompanyOperatingModel,
  CompanyPrinciples,
  CompanyVision,
} from "@/components/company";

export const metadata: Metadata = {
  title: {
    absolute: "Tropicash Company | Caribbean-First Payment Infrastructure",
  },
  description:
    "Learn about Tropicash's mission to build Caribbean-first digital wallet, merchant payment, developer, and partner-ready payment infrastructure.",
};

export default function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <CompanyMission />
      <CompanyVision />
      <CompanyPrinciples />
      <CompanyCaribbeanFocus />
      <CompanyOperatingModel />
      <CompanyGrowthPath />
      <CompanyCta />
    </>
  );
}
