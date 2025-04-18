import { useNavigate } from "react-router-dom";
import DotsGrid from "@/components/ui/dots-grid";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const trips = [
  {
    id: 1,
    from: "Нальчик",
    to: "Москва",
    date: "2025-04-22",
    time: "08:00",
    seats: 3,
    driver: "Аслан",
  },
  {
    id: 2,
    from: "Прохладный",
    to: "Москва",
    date: "2025-04-23",
    time: "06:30",
    seats: 1,
    driver: "Марат",
  },
];

export default function PassengerScreen() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-6 flex flex-col gap-4 items-center overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />

      <button
        onClick={() => navigate("/")}
        className="relative z-10 mb-2 flex items-center text-sm text-indigo-400 hover:text-indigo-300 transition self-start"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Назад
      </button>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 text-xl font-semibold text-center"
      >
        Доступные поездки
      </motion.h1>

      <div className="relative z-10 w-full max-w-md space-y-4">
        {trips.map((trip, i) => (
          <motion.div
            key={trip.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-4 space-y-2 shadow-md"
          >
            <div className="text-sm text-white/80">
              <strong>🛣️ Маршрут:</strong> {trip.from} → {trip.to}
            </div>
            <div className="text-sm text-white/80">
              <strong>🗓️ Дата:</strong> {trip.date} &nbsp;&nbsp; <strong>⏰ Время:</strong> {trip.time}
            </div>
            <div className="text-sm text-white/80">
              <strong>👤 Водитель:</strong> {trip.driver}
              &nbsp;&nbsp; <strong>🪑 Места:</strong> {trip.seats}
            </div>
            <button
              onClick={() => alert("Отклик отправлен!")} // заменим на реальную логику позже
              className="mt-2 w-full py-2 rounded-xl text-white bg-gradient-to-r from-indigo-500 to-violet-600 text-sm font-medium"
            >
              Откликнуться
            </button>
          </motion.div>
        ))}
      </div>
    </main>
  );
}