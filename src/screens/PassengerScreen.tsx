import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DotsGrid from "@/components/ui/dots-grid";
import TopBar from "@/components/ui/TopBar";

export default function PassengerScreen() {
  const [rides, setRides] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.24triply.ru/rides")
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 Полученные поездки:", data);
        setRides(data.reverse()); // чтобы новые были сверху
      })
      .catch((err) => {
        console.error("❌ Ошибка загрузки поездок:", err);
      });
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-6 overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar showBack={true} showProfile={true} />

      <div className="relative z-10 max-w-md mx-auto space-y-4 pt-12">
        <h1 className="text-2xl font-bold mb-4">Доступные поездки</h1>

        {rides.map((ride, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-1"
  >
    <div className="text-base font-semibold">{ride.from} → {ride.to}</div>
    <div className="text-sm text-white/70">
      🗓 {ride.date} • 🕓 {ride.time}
    </div>
    <div className="text-sm text-white/70">👤 Водитель: {ride.name}</div>
    <div className="text-sm text-white/70">🚗 Мест: {ride.seats}</div>

    <button
      onClick={() => alert(`Отклик на поездку в ${ride.to}`)}
      className="mt-3 w-full py-2 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:opacity-90 transition"
    >
      Откликнуться
    </button>
  </motion.div>
))}
      </div>
    </main>
  );
}
