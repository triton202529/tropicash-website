import type { Metadata } from "next";
import {
  AboutAudience,
  AboutBuildPath,
  AboutCta,
  AboutHero,
  AboutWhatIs,
  AboutWhyItMatters,
} from "@/components/about";

export const metadata: Metadata = {
  title: {
    absolute: "About Tropicash | Caribbean-First Digital Wallet Platform",
  },
  description:
    "Learn what Tropicash is being built to become: a digital wallet and payment platform for the Caribbean, focused on everyday money movement, businesses, developers, and trusted partners.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWhatIs />
      <AboutWhyItMatters />
      <AboutAudience />
      <AboutBuildPath />
      <AboutCta />
    </>
  );
}
