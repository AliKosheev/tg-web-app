// src/components/ui/blob.tsx
import { motion } from "framer-motion";

export default function Blob() {
  return (
    <motion.div
      className="w-full h-full rounded-full"
      animate={{
        borderRadius: [
          "42% 58% 67% 33% / 42% 42% 58% 58%",
          "58% 42% 33% 67% / 33% 33% 67% 67%",
          "42% 58% 67% 33% / 42% 42% 58% 58%",
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        background: "radial-gradient(circle at 30% 30%, #ff6ec4, #7873f5)",
        filter: "blur(40px)",
        opacity: 0.8,
      }}
    />
  );
}