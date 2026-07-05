import Image from "next/image";
import Link from "next/link";
import { primaryNavigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function GlobalNavigation() {
  const navLinkClass = cn(
    "text-sm font-medium text-atlantic-100 transition-colors whitespace-nowrap",
    "hover:text-white focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-caribbean-400 focus-visible:ring-offset-2 focus-visible:ring-offset-atlantic-800 rounded-sm",
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-atlantic-700 bg-atlantic-800 shadow-sm">
      <nav aria-label="Main navigation">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "inline-flex shrink-0 items-center rounded-md bg-white px-2 py-1 shadow-sm",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caribbean-400",
                "focus-visible:ring-offset-2 focus-visible:ring-offset-atlantic-800",
              )}
            >
              <Image
                src="/brand/tropicash-logo-horizontal-header.png"
                alt="Tropicash"
                width={248}
                height={104}
                priority
                className="h-8 w-auto object-contain sm:h-9 md:h-10"
              />
            </Link>

            <ul className="hidden items-center gap-6 md:flex">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={navLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "hidden text-sm font-medium text-atlantic-100 transition-colors",
                "hover:text-white sm:inline-flex",
              )}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-lg bg-caribbean-600 px-4",
                "text-sm font-medium text-white transition-colors hover:bg-caribbean-500",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caribbean-400",
                "focus-visible:ring-offset-2 focus-visible:ring-offset-atlantic-800",
              )}
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="border-t border-atlantic-700/60 md:hidden">
          <ul className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {primaryNavigation.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link href={item.href} className={navLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
