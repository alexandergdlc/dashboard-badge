import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils";
import { labBadgeVariants, type BadgeVariant } from "./lab-badge-variants";

export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  variant: BadgeVariant;
}

export function Badge({ variant, children, className, ...props }: BadgeProps) {
  return (
    <span {...props} data-variant={variant}
      className={cn(labBadgeVariants({ variant }), className)}>
      {children}
    </span>
  );
}
