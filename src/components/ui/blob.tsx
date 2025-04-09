import { cn } from "@/lib/utils";

export function Blob({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute w-72 h-72 bg-blue-300 opacity-30 blur-3xl rounded-full animate-pulse",
        className
      )}
    />
  );
}