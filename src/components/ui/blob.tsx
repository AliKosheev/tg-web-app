import { useEffect, useRef } from "react";
import * as anime from "animejs";

const Blob = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const a = (anime as any).default ?? anime;

    if (!pathRef.current) return;

    a({
      targets: pathRef.current,
      d: [
        {
          value:
            "M428,312Q397,374,334,402Q271,430,207,413Q143,396,96,345Q49,294,65,216Q81,138,143,103Q205,68,261,94Q317,120,374,146Q431,172,445,231Q459,290,428,312Z",
        },
        {
          value:
            "M410,319Q376,388,305,409Q234,430,172,402Q110,374,81,313Q52,252,75,190Q98,128,153,88Q208,48,265,75Q322,102,386,132Q450,162,439,226Q428,290,410,319Z",
        },
        {
          value:
            "M426,300Q404,360,344,387Q284,414,214,406Q144,398,106,344Q68,290,81,225Q94,160,145,114Q196,68,259,91Q322,114,384,138Q446,162,439,226Q432,290,426,300Z",
        },
      ],
      easing: "easeInOutQuad",
      duration: 9000,
      loop: true,
      direction: "alternate",
    });
  }, []);

  return (
    <svg
      viewBox="0 0 500 500"
      className="absolute top-8 w-[600px] h-[400px] z-10 pointer-events-none select-none opacity-30"
    >
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        fill="url(#grad)"
        d="M428,312Q397,374,334,402Q271,430,207,413Q143,396,96,345Q49,294,65,216Q81,138,143,103Q205,68,261,94Q317,120,374,146Q431,172,445,231Q459,290,428,312Z"
      />
    </svg>
  );
};

export default Blob;