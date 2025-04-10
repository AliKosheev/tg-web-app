import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Blob() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          borderRadius: [
            "42% 58% 70% 30% / 30% 40% 60% 70%",
            "30% 70% 60% 40% / 40% 60% 30% 70%",
            "58% 42% 30% 70% / 60% 40% 70% 30%",
            "42% 58% 70% 30% / 30% 40% 60% 70%",
          ],
          transition: {
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          },
        });
      }
    };
    sequence();
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      className="w-[222px] h-[218px] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 blur-2xl"
    />
  );
}
