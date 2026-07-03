import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type HomeSectionProps = HTMLAttributes<HTMLElement> & {
  containerClassName?: string;
};

export function HomeSection({
  children,
  className,
  containerClassName,
  ...props
}: HomeSectionProps) {
  return (
    <section
      className={cn("w-full scroll-mt-20", className)}
      {...props}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Dark navy section — white headings and light blue body text */
  dark?: boolean;
  /** Light section — dark navy headings and slate body text (theme-stable) */
  light?: boolean;
  /** Badge accent: blue (default on light) or green success chip */
  badgeTone?: "blue" | "green";
  id?: string;
};

export function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  className,
  dark = false,
  light = false,
  badgeTone = "blue",
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {badge && (
        <span
          className={cn(
            "mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
            dark
              ? "bg-white/10 text-atlantic-100"
              : badgeTone === "green"
                ? "border border-caribbean-200 bg-caribbean-50 text-caribbean-700"
                : "bg-atlantic-50 text-atlantic-700",
          )}
        >
          {badge}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          "scroll-mt-24 text-3xl font-bold tracking-tight md:text-4xl",
          dark && "text-white",
          light && "text-surface-light-foreground",
          !dark && !light && "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark && "text-atlantic-100",
            light && "text-surface-light-muted",
            !dark && !light && "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
