import type { Metadata } from "next";
import {
  PlatformArchitecture,
  PlatformAudience,
  PlatformCapabilities,
  PlatformCta,
  PlatformGovernance,
  PlatformHero,
  PlatformLayerOverview,
  PlatformReadiness,
} from "@/components/platform";

export const metadata: Metadata = {
  title: {
    absolute: "Tropicash Platform | Caribbean Digital Payment Infrastructure",
  },
  description:
    "Explore the Tropicash platform — wallet accounts for sending, receiving, and managing money, plus merchant payments, developer APIs, and Caribbean-first infrastructure.",
};

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <PlatformLayerOverview />
      <PlatformArchitecture />
      <PlatformCapabilities />
      <PlatformAudience />
      <PlatformGovernance />
      <PlatformReadiness />
      <PlatformCta />
    </>
  );
}
