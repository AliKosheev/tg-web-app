import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js"; // ✅ ESM-версия

const paths = [
  "M417,314Q413,378,358.5,417Q304,456,248,444Q192,432,151,396.5Q110,361,76,311.5Q42,262,59.5,195.5Q77,129,133,98.5Q189,68,251,60Q313,52,361,94.5Q409,137,417,195.5Q425,254,417,314Z",
  "M428.5,309.5Q408,369,361,415.5Q314,462,248.5,460.5Q183,459,129,420Q75,381,59.5,316.5Q44,252,57.5,188Q71,124,124,88.5Q177,53,244,46Q311,39,353,90.5Q395,142,424,198.5Q453,255,428.5,309.5Z"
];

export const AnimatedBlob = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    anime({
      targets: pathRef.current,
      d: [
        { value: paths[1] },
        { value: paths[0] }
      ],
      duration: 8000,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine"
    });
  }, []);

  return (
    <svg
      viewBox="0 0 500 500"
      className="absolute -top-40 -left-40 w-[150%] h-[150%] opacity-20 z-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path ref={pathRef} d={paths[0]} fill="url(#grad)" />
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8E2DE2" />
          <stop offset="100%" stopColor="#4A00E0" />
        </linearGradient>
      </defs>
    </svg>
  );
};