import { motion } from "framer-motion";

export function Blob() {
  return (
    <motion.div
      className="absolute w-[300px] h-[300px] bg-indigo-300/50 rounded-full blur-3xl"
      animate={{
        x: [0, 50, -30, 0],
        y: [0, -40, 40, 0],
        borderRadius: ["40%", "60%", "30%", "50%"],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ zIndex: 0 }}
    />
  );
}