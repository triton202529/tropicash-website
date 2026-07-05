import { HomeSection, SectionHeader } from "./section";

const networkNodes = [
  { x: 15, y: 30, size: 8 },
  { x: 35, y: 55, size: 10 },
  { x: 55, y: 25, size: 7 },
  { x: 75, y: 50, size: 9 },
  { x: 90, y: 30, size: 6 },
  { x: 25, y: 75, size: 7 },
  { x: 65, y: 80, size: 8 },
  { x: 85, y: 70, size: 6 },
] as const;

const connections: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [3, 6],
  [6, 7],
  [5, 6],
];

export function CaribbeanFirstSection() {
  return (
    <HomeSection
      className="relative overflow-hidden border-y border-surface-light-border bg-gradient-to-b from-atlantic-50 via-surface-light to-surface-light-soft py-16 md:py-24"
      aria-labelledby="caribbean-heading"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <SectionHeader
          id="caribbean-heading"
          title="Designed for the Caribbean first."
          description="Tropicash is being built with Caribbean users, merchants, banks, and digital businesses in mind, starting locally with the long-term goal of supporting broader regional financial connectivity."
          light
          badge="Regional focus"
          badgeTone="green"
        />

        <div
          className="relative mx-auto aspect-[4/3] w-full max-w-md"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-3xl border border-atlantic-100 bg-white shadow-lg" />

          <svg
            className="absolute inset-0 h-full w-full p-8"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d6ecf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#d1fae5" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            <rect
              x="5"
              y="5"
              width="90"
              height="90"
              rx="12"
              fill="url(#oceanGrad)"
            />

            {connections.map(([from, to], i) => (
              <line
                key={i}
                x1={networkNodes[from].x}
                y1={networkNodes[from].y}
                x2={networkNodes[to].x}
                y2={networkNodes[to].y}
                stroke="#2a80b3"
                strokeWidth="0.5"
                strokeOpacity="0.45"
              />
            ))}

            {networkNodes.map((node, i) => (
              <g key={i}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size / 2 + 2}
                  fill={i % 2 === 0 ? "#2a80b3" : "#10b981"}
                  fillOpacity="0.12"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size / 4}
                  fill={i % 2 === 0 ? "#1f6696" : "#059669"}
                />
              </g>
            ))}
          </svg>

          <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-atlantic-100 bg-white px-4 py-3 shadow-sm">
            <p className="text-xs font-medium text-atlantic-700">
              Regional connectivity, illustrative network map
            </p>
          </div>
        </div>
      </div>
    </HomeSection>
  );
}
