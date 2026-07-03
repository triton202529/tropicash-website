import type { Metadata } from "next";
import {
  ContactAudienceCards,
  ContactCta,
  ContactExpectations,
  ContactHero,
  ContactPathways,
  ContactReadiness,
} from "@/components/contact";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Tropicash | Caribbean Payment Infrastructure",
  },
  description:
    "Choose the right contact path for Tropicash partnerships, developers, merchants, financial institutions, company inquiries, and security questions.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactPathways />
      <ContactAudienceCards />
      <ContactExpectations />
      <ContactReadiness />
      <ContactCta />
    </>
  );
}
