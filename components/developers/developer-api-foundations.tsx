import { HomeSection, SectionHeader } from "@/components/home/section";

const apiBlocks = [
  {
    title: "Wallet APIs",
    description:
      "Designed for balances, transfers, wallet activity, and user-facing money movement foundations.",
    methods: ["GET /v1/wallets", "POST /v1/transfers"],
  },
  {
    title: "Merchant APIs",
    description:
      "Designed for payment acceptance, transaction tracking, and business payment workflows.",
    methods: ["POST /v1/payments", "GET /v1/payments/{id}"],
  },
  {
    title: "Authorization",
    description:
      "OAuth and app authorization readiness for controlled third-party access.",
    methods: ["POST /oauth/authorize", "POST /oauth/token"],
  },
  {
    title: "Events and Webhooks",
    description:
      "Event notification foundations for integration workflows and platform updates.",
    methods: ["event: payment.created", "event: wallet.updated"],
  },
] as const;

export function DeveloperApiFoundations() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="developer-api-heading"
    >
      <SectionHeader
        id="developer-api-heading"
        title="API foundations for wallet and payment experiences."
        description="Tropicash is being structured around developer-facing APIs that can support secure wallet, merchant, event, and partner workflows as the platform matures."
        light
      />

      <div
        className="mt-12 overflow-hidden rounded-2xl border border-atlantic-100 bg-white shadow-md"
        aria-hidden="true"
      >
        <div className="flex items-center justify-between border-b border-atlantic-100 bg-atlantic-50/50 px-5 py-3">
          <span className="text-sm font-semibold text-atlantic-900">
            API foundation overview
          </span>
          <span className="rounded-full border border-atlantic-200 bg-white px-2.5 py-0.5 text-xs font-medium text-atlantic-700">
            Illustrative only
          </span>
        </div>

        <div className="grid gap-0 divide-y divide-atlantic-100 md:grid-cols-2 md:divide-x md:divide-y-0">
          {apiBlocks.map((block) => (
            <div key={block.title} className="p-5 md:p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-atlantic-50 text-atlantic-700">
                <div className="h-4 w-4 rounded-sm bg-atlantic-500" />
              </div>
              <h3 className="mt-3 text-base font-semibold text-surface-light-foreground">
                {block.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-light-muted">
                {block.description}
              </p>
              <div className="mt-4 space-y-1.5 rounded-lg border border-atlantic-100 bg-atlantic-50/30 p-3 font-mono text-xs text-atlantic-700">
                {block.methods.map((method) => (
                  <p key={method}>{method}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="sr-only">
        Illustrative API foundation overview showing wallet, merchant,
        authorization, and webhook endpoints. Not live or executable.
      </p>
    </HomeSection>
  );
}
