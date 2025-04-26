import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/ui/TopBar";
import DotsGrid from "@/components/ui/DotsGrid";

export default function PassengerRepliesScreen() {
  const [replies, setReplies] = useState<any[]>([]);

  const userId = (window as any).Telegram?.WebApp?.initDataUnsafe?.user?.id;

  useEffect(() => {
    if (userId) {
      loadReplies();
    }
  }, [userId]);

  const loadReplies = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/my-replies?user_id=${userId}`);
      const data = await res.json();
      setReplies(data);
    } catch (err) {
      console.error("❌ Ошибка загрузки откликов:", err);
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-6 overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar showBack={true} />

      <div className="relative z-10 max-w-md mx-auto space-y-6 pt-12">
        <h1 className="text-2xl font-bold mb-4 text-center">Мои отклики</h1>

        {replies.length === 0 ? (
          <p className="text-center text-white/60">Откликов пока нет.</p>
        ) : (
          replies.map((reply, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
            >
              <div className="text-lg font-bold mb-1">
                {reply.ride?.from_} → {reply.ride?.to}
              </div>
              <div className="text-sm text-white/70">
                {reply.ride?.date} в {reply.ride?.time}
              </div>
              <div className="text-sm mt-2">
                <b>Тип:</b> {reply.type === "trip" ? "Поездка" : "Посылка"}
              </div>
              <div className="text-sm">
                <b>Комментарий:</b> {reply.comment || "—"}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </main>
  );
}