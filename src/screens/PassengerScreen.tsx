// screens/PassengerScreen.tsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DotsGrid from "@/components/ui/dots-grid";
import TopBar from "@/components/ui/TopBar";
import ReplyModal from "@/components/ui/ReplyModal";

export default function PassengerScreen() {
  const [rides, setRides] = useState<any[]>([]);
  const [showReply, setShowReply] = useState(false);
  const [selectedRide, setSelectedRide] = useState<any>(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/rides")
      .then((res) => res.json())
      .then((data) => setRides(data.reverse()))
      .catch((err) => console.error("❌ Ошибка загрузки поездок:", err));
  }, []);

  const handleReply = (ride: any) => {
    setSelectedRide(ride);
    setShowReply(true);
  };

  const handleSubmitReply = async (payload: any) => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + "/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("✅ Отклик отправлен!");
      } else {
        alert("❌ Ошибка при отправке отклика");
      }
    } catch (error) {
      alert("🚨 Ошибка сети");
    } finally {
      setShowReply(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-6 overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar showBack={true} showProfile={true} />

      <div className="relative z-10 max-w-md mx-auto space-y-4 pt-12">
        <h1 className="text-2xl font-bold mb-4 text-center">Доступные поездки</h1>

        {rides.length === 0 ? (
          <p className="text-center text-white/60">Нет доступных поездок.</p>
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

              <div className="text-sm text-white/70 flex items-center gap-2">
                {ride.date} в {ride.time}
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleReply(ride)}
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-xl transition"
                >
                  Откликнуться
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>

      <ReplyModal
        open={showReply}
        onClose={() => setShowReply(false)}
        onSubmit={handleSubmitReply}
        rideId={selectedRide?.id ?? null}
      />
    </main>
  );
}