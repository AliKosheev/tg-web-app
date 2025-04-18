import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DotsGrid from "@/components/ui/dots-grid";
import { motion } from "framer-motion";

export default function WelcomeScreen() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      tg.ready();
      setUser(tg.initDataUnsafe?.user);
    }
  }, []);

  const handleStart = () => {
    const tg = (window as any).Telegram?.WebApp;
    tg?.HapticFeedback?.impactOccurred?.("light");
    navigate("/select");
  };

  return (
    <main className="relative h-[100dvh] bg-black text-white px-4 py-6 flex flex-col items-center justify-center overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />

      {/* Текст */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-8 z-10"
      >
        TRIPLY
      </motion.h1>

      {/* Аватар с подсветкой */}
      <div className="relative z-10 mb-10">
        <div className="absolute inset-0 w-56 h-56 rounded-full bg-gradient-to-br from-indigo-500 via-violet-700 to-indigo-900 blur-3xl opacity-30 animate-pulse scale-125" />
        <img
          src={
            avatarError || !user?.id
              ? "/fallback-avatar.png"
              : `https://t.me/i/userpic/320/${user.id}.jpg`
          }
          onError={() => setAvatarError(true)}
          alt="avatar"
          className="relative w-56 h-56 rounded-full object-cover z-10"
        />
      </div>

      {/* Кнопка */}
      <motion.button
        onClick={handleStart}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white text-black font-semibold text-lg rounded-2xl px-10 py-3 z-10"
      >
        Поехали
      </motion.button>
    </main>
  );
}