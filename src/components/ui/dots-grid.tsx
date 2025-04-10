import React from "react";
import clsx from "clsx";

export default function DotsGrid({ className }: { className?: string }) {
  return (
    <div
      className={clsx("pointer-events-none absolute inset-0 z-0", className)}
      style={{
        backgroundImage:
          "radial-gradient(#2a2a2a 1.13px, transparent 1.13px)",
        backgroundSize: "9px 9px",
      }}
    />
  );
}