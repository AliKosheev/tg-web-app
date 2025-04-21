import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DotsGrid from "@/components/ui/dots-grid";
import { motion } from "framer-motion";
import TopBar from "@/components/ui/TopBar";

export default function RoleSelectScreen() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    tg?.ready?.();

    const tgUser =
      tg?.initDataUnsafe?.user ||
      JSON.parse(localStorage.getItem("triply_user") || "null");

    if (tg?.initDataUnsafe?.user) {
      localStorage.setItem("triply_user", JSON.stringify(tgUser));
    }

    console.log("🔍 [RoleSelect] user:", tgUser);
    setUser(tgUser);
  }, []);

  const handleClick = (path: string) => {
    const tg = (window as any).Telegram?.WebApp;
    tg?.HapticFeedback?.impactOccurred?.("light");
    navigate(path);
  };

  const avatarUrl =
    avatarError || !user?.username
      ? "/fallback-avatar.png"
      : `https://api.24triply.ru/avatar?user_id=${user.username}`;

  return (
    <main className="relative h-[100dvh] w-full flex flex-col items-center justify-end px-4 pb-10 pt-20 bg-black text-white overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar showBack={false} showProfile={true} />

      <div className="absolute top-32 left-1/2 -translate-x-1/2 z-10">
        <div className="absolute inset-0 w-44 h-44 rounded-full bg-gradient-to-br from-indigo-500 via-violet-700 to-indigo-900 blur-3xl opacity-30 animate-pulse scale-125" />
        <img
          src={avatarUrl}
          onError={() => setAvatarError(true)}
          alt="avatar"
          className="relative w-44 h-44 rounded-full object-cover z-10 border border-white/10"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 w-full max-w-sm flex flex-col gap-6 items-center mt-80"
      >
        <h1 className="text-xl font-semibold text-center">Кто вы в этой поездке?</h1>

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