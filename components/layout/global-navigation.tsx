import Link from "next/link";
import { primaryNavigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function GlobalNavigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-atlantic-700 bg-atlantic-800 shadow-sm">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Tropicash
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium text-atlantic-100 transition-colors",
                    "hover:text-white focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-caribbean-400 focus-visible:ring-offset-2 focus-visible:ring-offset-atlantic-800 rounded-sm",
                  )}
                >
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
            href="/developers"
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
      </nav>
    </header>
  );
}
