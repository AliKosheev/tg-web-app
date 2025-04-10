import React from "react";
import clsx from "clsx";

export default function DotsGrid({ className }: { className?: string }) {
  return (
    <div
      className={clsx("pointer-events-none absolute inset-0 z-0", className)}
      style={{
        backgroundImage:
          "radial-gradient(#3a3a3a 2.26px, transparent 2.26px)",
        backgroundSize: "9px 9px",
      }}
    />
  );
}