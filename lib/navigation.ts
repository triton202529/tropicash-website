export type NavItem = {
  label: string;
  href: string;
};

export const primaryNavigation: NavItem[] = [
  { label: "Platform", href: "/platform" },
  { label: "Developers", href: "/developers" },
  { label: "Security", href: "/security" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Company", href: "/company" },
];

export const secondaryNavigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  product: [
    { label: "Platform", href: "/platform" },
    { label: "Developers", href: "/developers" },
    { label: "Security", href: "/security" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Company", href: "/company" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [{ label: "Legal", href: "/legal" }],
} as const;
