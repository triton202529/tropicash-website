import Link from "next/link";
import { footerNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-atlantic-800 bg-gradient-to-b from-atlantic-900 to-atlantic-950">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-2 max-w-xs text-sm text-atlantic-200">
              Global payments infrastructure for customers, businesses, and
              partners.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Product</h2>
            <ul className="mt-4 space-y-3">
              {footerNavigation.product.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm text-atlantic-200 transition-colors hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Company</h2>
            <ul className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm text-atlantic-200 transition-colors hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Legal</h2>
            <ul className="mt-4 space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm text-atlantic-200 transition-colors hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-atlantic-800 pt-8">
          <p className="text-sm text-atlantic-300">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
