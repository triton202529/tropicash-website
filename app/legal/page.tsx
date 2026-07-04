import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Legal information for Tropicash — Caribbean-first digital wallet and payment infrastructure.",
};

export default function LegalPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-semibold tracking-tight">Legal</h1>
      <p className="mt-4 text-muted-foreground">Placeholder page.</p>
    </PageContainer>
  );
}
