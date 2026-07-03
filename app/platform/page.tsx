import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "Platform",
};

export default function PlatformPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-semibold tracking-tight">Platform</h1>
      <p className="mt-4 text-muted-foreground">Placeholder page.</p>
    </PageContainer>
  );
}
