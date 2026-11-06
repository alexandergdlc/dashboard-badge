import { cva } from "class-variance-authority";

export type BadgeVariant = "success" | "warning" | "danger";

export const labBadgeVariants = cva(
  "inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset transition-colors motion-reduce:transition-none",
  {
    variants: {
      variant: {
        success: "bg-emerald-50 text-emerald-800 ring-emerald-600/20 dark:bg-emerald-950 dark:text-emerald-200 dark:ring-emerald-400/30",
        warning: "bg-amber-50 text-amber-900 ring-amber-600/20 dark:bg-amber-950 dark:text-amber-200 dark:ring-amber-400/30",
        danger: "bg-rose-50 text-rose-800 ring-rose-600/20 dark:bg-rose-950 dark:text-rose-200 dark:ring-rose-400/30",
      },
    },
  },
);
