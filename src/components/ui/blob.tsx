import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Blob() {
  const paths = [
    "M 50,0 Q 100,50 50,100 Q 0,50 50,0 Z",
    "M 60,0 Q 100,60 60,100 Q 0,60 60,0 Z",
    "M 40,0 Q 100,40 40,100 Q 0,40 40,0 Z",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % paths.length);
    }, 4000); // каждые 4 секунды
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.svg
      width="222"
      height="218"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[222px] h-[218px]"
    >
      <motion.path
        fill="url(#blobGradient)"
        d={paths[index]}
        animate={{ d: paths[index] }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      <defs>
        <radialGradient id="blobGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
}