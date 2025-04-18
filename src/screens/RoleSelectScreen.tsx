import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DotsGrid from "@/components/ui/dots-grid";
import { motion } from "framer-motion";

export default function RoleSelectScreen() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      tg.ready(); // Инициализация WebApp
      setUser(tg.initDataUnsafe?.user);
    }
  }, []);

  const handleClick = (path: string) => {
    const tg = (window as any).Telegram?.WebApp;

    // Вибрация при нажатии (если поддерживается)
    tg?.HapticFeedback?.impactOccurred?.("light");

    navigate(path);
  };

  return (
    <main className="relative h-[100dvh] w-full flex flex-col items-center justify-end px-4 pb-10 pt-20 bg-black text-white overflow-hidden">
      {/* Сетка точек */}
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />

      {/* Glow и Аватар */}
{(
  <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">
    {/* Фоновое свечение */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-violet-700 to-indigo-900 blur-3xl opacity-40 animate-pulse scale-125" />

    {/* Аватар */}
    <img
      src={
        avatarError || !user?.id
          ? "/fallback-avatar.png"
          : `https://t.me/i/userpic/320/${user.id}.jpg`
      }
      onError={() => setAvatarError(true)}
      className="relative w-56 h-56 rounded-full border-4 border-white/10 object-cover shadow-2xl"
      alt="avatar"
    />
  </div>
)}

      {/* Контент */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 w-full max-w-sm flex flex-col gap-6 items-center mt-60"
      >
        <h1 className="text-xl font-semibold text-center">
          Кто вы в этой поездке?
        </h1>

        <button
          onClick={() => handleClick("/driver")}
          className="w-full py-3 rounded-2xl text-white font-semibold text-base bg-gradient-to-r from-violet-500 to-indigo-600"
        >
          Водитель
        </button>

        <button
          onClick={() => handleClick("/passenger")}
          className="w-full py-3 rounded-2xl text-white font-semibold text-base bg-gradient-to-r from-indigo-700 to-indigo-900"
        >
          Пассажир
        </button>
      </motion.div>
    </main>
  );
}