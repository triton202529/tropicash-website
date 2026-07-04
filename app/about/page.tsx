import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Tropicash — Caribbean-first digital wallet and payment infrastructure for people, businesses, developers, and trusted partners.",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-4 text-muted-foreground">Placeholder page.</p>
    </PageContainer>
  );
}
