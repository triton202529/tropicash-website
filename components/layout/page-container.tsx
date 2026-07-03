import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type PageContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "main" | "section";
  size?: "default" | "narrow" | "wide";
};

const sizeStyles = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
  wide: "max-w-[90rem]",
} as const;

export function PageContainer({
  as: Component = "main",
  size = "default",
  className,
  children,
  ...props
}: PageContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full flex-1 px-4 py-8 md:px-6 md:py-12 lg:px-8",
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
