import type { Metadata } from "next";
import {
  LegalContact,
  LegalDisclosures,
  LegalFuturePolicies,
  LegalHero,
  LegalImportantNotice,
  LegalWebsiteNotices,
} from "@/components/legal";

export const metadata: Metadata = {
  title: {
    absolute: "Tropicash Legal | Website Notices & Development-Stage Information",
  },
  description:
    "Legal information and website notices for the Tropicash corporate website. Development-stage information only — not final product terms, privacy policy, or financial service disclosures.",
};

export default function LegalPage() {
  return (
    <>
      <LegalHero />
      <LegalImportantNotice />
      <LegalWebsiteNotices />
      <LegalFuturePolicies />
      <LegalDisclosures />
      <LegalContact />
    </>
  );
}
