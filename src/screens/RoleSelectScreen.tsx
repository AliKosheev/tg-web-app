import { useNavigate } from "react-router-dom";
import DotsGrid from "@/components/ui/dots-grid";
import { motion } from "framer-motion";

export default function RoleSelectScreen() {
  const navigate = useNavigate();
  const user = (window as any).Telegram?.WebApp?.initDataUnsafe?.user;

  return (
    <main className="relative h-[100dvh] w-full flex flex-col items-center justify-end px-4 pb-10 pt-20 bg-black text-white overflow-hidden">
      {/* Сетка точек */}
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />

      {/* Светящееся пятно позади аватара */}
      {user?.id && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-14 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-600 to-indigo-900 blur-3xl z-0 animate-pulse"
        />
      )}

      {/* Аватар пользователя */}
      {user?.id && (
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          src={`https://t.me/i/userpic/320/${user.id}.jpg`}
          alt="avatar"
          className="absolute top-24 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white/20 shadow-xl z-10 object-cover"
        />
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
          onClick={() => navigate("/driver")}
          className="w-full py-3 rounded-2xl text-white font-semibold text-base bg-gradient-to-r from-violet-500 to-indigo-600"
        >
          Водитель
        </button>

        <button
          onClick={() => navigate("/passenger")}
          className="w-full py-3 rounded-2xl text-white font-semibold text-base bg-gradient-to-r from-indigo-700 to-indigo-900"
        >
          Пассажир
        </button>
      </motion.div>
    </main>
  );
}