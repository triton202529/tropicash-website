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
    <section className={cn("w-full", className)} {...props}>
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
  dark?: boolean;
  id?: string;
};

export function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  className,
  dark = false,
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
              : "bg-atlantic-50 text-atlantic-700",
          )}
        >
          {badge}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          "text-3xl font-bold tracking-tight md:text-4xl",
          dark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-atlantic-100/90" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
