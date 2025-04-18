import React from "react";
import clsx from "clsx";

export default function DotsGrid({ className }: { className?: string }) {
  return (
    <div className={clsx("pointer-events-none absolute inset-0 z-0", className)}>
      {/* Сетка точек */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#3a3a3a 2.26px, transparent 2.26px)",
          backgroundSize: "15px 15px",
        }}
      />

      {/* Градиент для слияния внизу */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

      {/* Нижнее фиолетовое свечение */}
      <div className="absolute bottom-[-25%] left-1/2 -translate-x-1/2 w-[150%] h-64 bg-gradient-to-t from-violet-800 via-indigo-900 to-transparent blur-3xl opacity-40 z-0" />
    </div>
  );
}