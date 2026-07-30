import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" && "bg-primary/10 text-primary",
        variant === "secondary" && "bg-secondary/10 text-secondary dark:text-slate-300",
        variant === "outline" && "border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400",
        className
      )}
      {...props}
    />
  );
}
