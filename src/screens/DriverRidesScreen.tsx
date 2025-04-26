import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/ui/TopBar";
import DotsGrid from "@/components/ui/DotsGrid";
import ReplyListModal from "@/components/ui/ReplyListModal";

export default function DriverRidesScreen() {
  const [rides, setRides] = useState<any[]>([]);
  const [selectedRideId, setSelectedRideId] = useState<number | null>(null);
  const [replies, setReplies] = useState<any[]>([]);
  const [showRepliesModal, setShowRepliesModal] = useState(false);

  const userId = (window as any).Telegram?.WebApp?.initDataUnsafe?.user?.id;

  useEffect(() => {
    loadRides();
  }, [userId]);

  const loadRides = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "/rides");
      const data = await res.json();
      if (userId) {
        const myRides = data.filter((ride: any) => ride.telegram_user_id === userId);
        setRides(myRides);
      }
    } catch (err) {
      console.error("❌ Ошибка загрузки поездок:", err);
    }
  };

  const handleOpenReplies = async (rideId: number) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/rides/${rideId}/replies`);
      const data = await res.json();
      setReplies(data);
      setSelectedRideId(rideId);
      setShowRepliesModal(true);
    } catch (error) {
      console.error("❌ Ошибка получения откликов:", error);
    }
  };

  const handleDeleteRide = async (rideId: number) => {
    if (!confirm("Вы точно хотите удалить эту поездку?")) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/rides/${rideId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setRides((prev) => prev.filter((ride) => ride.id !== rideId));
        console.log("🗑️ Поездка удалена");
      } else {
        console.error("❌ Ошибка при удалении поездки");
      }
    } catch (error) {
      console.error("❌ Ошибка при отправке запроса на удаление:", error);
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-6 overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar showBack={true} />

      <div className="relative z-10 max-w-md mx-auto space-y-6 pt-12">
        <h1 className="text-2xl font-bold mb-4 text-center">Мои поездки</h1>

        {rides.length === 0 ? (
          <p className="text-center text-white/60">Поездок пока нет.</p>
        ) : (
          rides.map((ride) => (
            <motion.div
              key={ride.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
            >
              <div className="text-lg font-bold flex items-center gap-2 mb-1">
                {ride.from_} → {ride.to}
              </div>

              <div className="text-sm text-white/70">
                {ride.date} в {ride.time}
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleOpenReplies(ride.id)}
                  className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-xl"
                >
                  Отклики
                </button>

                <button
                  onClick={() => handleDeleteRide(ride.id)}
                  className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-xl"
                >
                  Удалить
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>

      <ReplyListModal
        open={showRepliesModal}
        onClose={() => setShowRepliesModal(false)}
        replies={replies}
      />
    </main>
  );
}