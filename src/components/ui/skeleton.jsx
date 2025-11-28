// Converted from TypeScript to JavaScript — automatic best-effort. Please review.
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };
