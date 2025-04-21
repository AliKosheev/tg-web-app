import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DotsGrid from "@/components/ui/dots-grid";
import { motion } from "framer-motion";
import { parseTelegramUserFromUrl } from "@/utils/parseTelegramUser";

export default function WelcomeScreen() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    tg?.ready?.();

    let tgUser = tg?.initDataUnsafe?.user;

    // Если нет — пробуем из URL
    if (!tgUser) {
      tgUser = parseTelegramUserFromUrl();
    }

    // Если нет — пробуем из localStorage
    if (!tgUser) {
      try {
        const saved = localStorage.getItem("triply_user");
        tgUser = saved ? JSON.parse(saved) : null;
      } catch {
        tgUser = null;
      }
    }

    if (tgUser) {
      setUser(tgUser);
      localStorage.setItem("triply_user", JSON.stringify(tgUser));
    }

    console.log("🔍 user:", tgUser);
  }, []);

  const handleStart = () => {
    const tg = (window as any).Telegram?.WebApp;
    tg?.HapticFeedback?.impactOccurred?.("light");
    navigate("/select");
  };

  const avatarUrl =
    avatarError || !user?.id
      ? "/fallback-avatar.png"
      : `https://t.me/i/userpic/320/${user.id}.jpg`;

  console.log("🖼️ Avatar URL:", avatarUrl);

  return (
    <main className="relative h-[100dvh] bg-black text-white px-4 py-6 flex flex-col items-center justify-center overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />

      <div className="relative z-10 -mt-12 flex flex-col items-center">
        {/* Название */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-8"
        >
          TRIPLY
        </motion.h1>

        {/* Аватар */}
        <div className="relative mb-[10rem]">
          <div className="absolute inset-0 w-56 h-56 rounded-full bg-gradient-to-br from-indigo-500 via-violet-700 to-indigo-900 blur-3xl opacity-30 animate-pulse scale-125" />
          <img
            src={avatarUrl}
            onError={() => setAvatarError(true)}
            alt="avatar"
            className="relative w-56 h-56 rounded-full object-cover z-10"
          />
        </div>
      </div>

      {/* Кнопка */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full flex justify-center"
      >
        <button
          onClick={handleStart}
          className="w-[90%] max-w-sm py-3 px-6 bg-white text-black font-semibold rounded-2xl text-lg shadow-md hover:bg-white/90 transition z-10"
        >
          Поехали
        </button>
      </motion.div>
    </main>
  );
}