import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "./section";

const problems = [
  {
    title: "Fragmented payment options",
    description:
      "Users and businesses navigate multiple channels with inconsistent experiences.",
  },
  {
    title: "Slow settlement experiences",
    description:
      "Transfers and payouts often take longer than modern commerce demands.",
  },
  {
    title: "Limited developer access",
    description:
      "Few platforms offer open APIs for Caribbean financial innovation.",
  },
  {
    title: "Cash-heavy business workflows",
    description:
      "Many merchants still depend on manual, in-person payment collection.",
  },
] as const;

export function ProblemSection() {
  return (
    <HomeSection className="py-16 md:py-24" aria-labelledby="problem-heading">
      <SectionHeader
        id="problem-heading"
        title="Caribbean payments should move faster."
        description="Many users and businesses still rely on fragmented banking, manual transfers, cash-heavy workflows, and limited online payment options. Tropicash is being built to close that gap with a secure, local-first payment platform."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {problems.map((item) => (
          <Card
            key={item.title}
            className="border-l-4 border-l-atlantic-400 bg-atlantic-50/40"
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
