import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/ui/TopBar";
import DotsGrid from "@/components/ui/dots-grid";

export default function PassengerRepliesScreen() {
  const [replies, setReplies] = useState<any[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("triply_user");
    const user = raw ? JSON.parse(raw) : null;

    if (!user?.id) {
      console.error("❌ Нет Telegram ID пользователя");
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/my-replies?telegram_user_id=${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 Мои отклики:", data);
        setReplies(data.reverse());
      })
      .catch((err) => {
        console.error("❌ Ошибка загрузки откликов:", err);
      });
  }, []);

  const isRidePast = (rideDate: string, rideTime: string) => {
    const rideDateTime = new Date(`${rideDate}T${rideTime}`);
    return rideDateTime < new Date();
  };

  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-6 overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar showBack={true} showProfile={true} />

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

              <div className="text-sm text-white/70 mb-1">
                {reply.ride?.date} в {reply.ride?.time}
              </div>

              <div className="text-sm text-white/70 mb-1">
                📱 Телефон водителя: {reply.ride?.phone || "не указан"}
              </div>

              {isRidePast(reply.ride?.date, reply.ride?.time) ? (
                <div className="block w-full text-center mt-2 py-2 px-4 rounded-xl bg-green-600 text-white text-sm font-medium">
                  ✅ Завершено
                </div>
              ) : (
                reply.ride?.telegram_username && (
                  <a
                    href={`https://t.me/${reply.ride.telegram_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center mt-2 py-2 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 transition text-sm font-medium"
                  >
                    Написать водителю
                  </a>
                )
              )}

              <div className="text-sm mt-3">
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
