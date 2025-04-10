import { motion } from "framer-motion";

export default function Blob() {
  return (
    <motion.div
      className="w-full h-full"
      animate={{
        borderRadius: [
          "40% 60% 70% 30% / 40% 40% 60% 60%",
          "60% 40% 30% 70% / 30% 30% 70% 70%",
          "40% 60% 70% 30% / 40% 40% 60% 60%",
        ],
      }}
      transition={{
        duration: 6, // Увеличь до 8-10 если хочешь совсем залипательно
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        background: "radial-gradient(circle at 30% 30%, #ff6ec4, #7873f5)",
        filter: "blur(60px)",
        opacity: 0.7,
        mixBlendMode: "screen", // опционально — убирает «тупую» заливку
        pointerEvents: "none", // чтобы не мешал кликам
      }}
    />
  );
}