import { cn } from "@/lib/utils";

export function DotsGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-[radial-gradient(#0003_1px,transparent_1px)] [background-size:16px_16px] opacity-10",
        className
      )}
    />
  );
}