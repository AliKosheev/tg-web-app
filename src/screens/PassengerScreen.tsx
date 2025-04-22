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
        setRides(data.reverse());
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
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
          >
            <div className="text-lg font-bold flex items-center gap-2 mb-1">
              <img src="/icons/arrow-right.svg" className="w-4 h-4" />
              {ride.from} → {ride.to}
            </div>

            <div className="text-sm text-white/70 flex items-center gap-2">
              <img src="/icons/calendar.svg" className="w-4 h-4" />
              {ride.date}
              <img src="/icons/clock.svg" className="w-4 h-4 ml-4" />
              {ride.time}
            </div>

            <div className="text-sm text-white/70 flex items-center gap-2 mt-1">
              <img src="/icons/call.svg" className="w-4 h-4" />
              {ride.phone}
            </div>

            <div className="text-sm text-white/70 flex items-center gap-2 mt-1">
              <img src="/icons/profile.svg" className="w-4 h-4" />
              {ride.name || "unknown"}
            </div>

            <div className="text-sm text-white/70 flex items-center gap-2 mt-1">
              <img src="/icons/car.svg" className="w-4 h-4" />
              {ride.car}
              <img src="/icons/seats.svg" className="w-4 h-4 ml-4" />
              {ride.seats} мест
            </div>

            <div className="flex items-center gap-4 mt-2">
              {ride.luggage && (
                <img src="/icons/luggage.svg" className="w-5 h-5" title="Багаж" />
              )}
              {ride.parcel && (
                <img src="/icons/check.svg" className="w-5 h-5" title="Посылка" />
              )}
            </div>

<div className="flex gap-2 mt-4">
  {ride.telegram_username && (
    <a
      href={`https://t.me/${ride.telegram_username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto py-2 px-4 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 transition text-center"
    >
      Написать
    </a>
  )}
  
  <button
    onClick={() => alert(`Отклик на поездку в ${ride.to}`)}
    className="w-full sm:flex-1 py-2 text-sm font-medium text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 transition"
  >
    Отклик
  </button>
</div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
