import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "./section";

const problems = [
  {
    title: "Difficult person-to-person transfers",
    description:
      "Sending and receiving money between people can still feel fragmented, slow, or inconvenient.",
  },
  {
    title: "Fragmented ways to send and receive money",
    description:
      "People often navigate multiple channels instead of one consistent wallet-based experience.",
  },
  {
    title: "Limited wallet-based money movement",
    description:
      "Everyday digital wallet use, including funding, balance management, and activity history, remains uneven across the region.",
  },
  {
    title: "Cash-heavy business workflows",
    description:
      "Many merchants still depend on manual, in-person payment collection.",
  },
] as const;

export function ProblemSection() {
  return (
    <HomeSection
      className="bg-surface-light-soft py-16 md:py-24"
      aria-labelledby="problem-heading"
    >
      <SectionHeader
        id="problem-heading"
        title="Caribbean payments should move faster."
        description="Many people and businesses still rely on fragmented ways to send and receive money, limited wallet-based movement, cash-heavy workflows, and uneven digital payment options. Tropicash is being built to close that gap with a secure, local-first digital wallet and payment platform."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {problems.map((item) => (
          <Card
            key={item.title}
            variant="light"
            className="border-l-4 border-l-atlantic-400"
          >
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {item.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </HomeSection>
  );
}
