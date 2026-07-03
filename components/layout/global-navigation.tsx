import Link from "next/link";
import { primaryNavigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function GlobalNavigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            Tropicash
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium text-muted-foreground transition-colors",
                    "hover:text-foreground focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm",
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
              "hidden text-sm font-medium text-muted-foreground transition-colors",
              "hover:text-foreground sm:inline-flex",
            )}
          >
            Contact
          </Link>
          <Link
            href="/developers"
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4",
              "text-sm font-medium text-primary-foreground transition-colors hover:bg-atlantic-700",
            )}
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
