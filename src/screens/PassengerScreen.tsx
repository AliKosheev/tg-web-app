import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DotsGrid from "@/components/ui/dots-grid";
import TopBar from "@/components/ui/TopBar";
import ReplyModal from "@/components/ui/ReplyModal";
import SuccessModal from "@/components/ui/SuccessModal";

export default function PassengerScreen() {
  const [rides, setRides] = useState<any[]>([]);
  const [showReply, setShowReply] = useState(false);
  const [selectedRide, setSelectedRide] = useState<any>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const fetchRides = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "/rides");
      const data = await res.json();
      setRides(data.reverse());
    } catch (err) {
      console.error("❌ Ошибка загрузки поездок:", err);
    }
  };

  useEffect(() => {
    fetchRides();
  }, []);

  const handleReply = (ride: any) => {
    setSelectedRide(ride);
    setShowReply(true);
  };

  const handleSubmitReply = async (data: any) => {
    if (!selectedRide) return;

    const raw = localStorage.getItem("triply_user");
    const user = raw ? JSON.parse(raw) : null;

    if (!user?.id || !selectedRide?.id) {
      alert("❌ Не удалось получить данные поездки или Telegram ID");
      return;
    }

    try {
      const response = await fetch(import.meta.env.VITE_API_URL + "/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ride_id: selectedRide.id,
          name: data.name,
          phone: data.phone,
          type: data.type,
          comment: data.comment,
          count: data.count,
          telegram_user_id: user.id,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("✅ Отклик отправлен:", result);
        setShowSuccess(true);
        setShowReply(false);
        setSelectedRide(null);
        await fetchRides();
      } else {
        console.error("❌ Ошибка при отправке:", result);
        alert("Ошибка при отправке отклика");
      }
    } catch (err) {
      console.error("🚨 Ошибка сети:", err);
      alert("Ошибка сети при отправке отклика");
    }
  };

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
              {ride.from_} → {ride.to}
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
              {ride.name || "Не указано"}
            </div>

            <div className="text-sm text-white/70 flex items-center gap-2 mt-1">
              <img src="/icons/car.svg" className="w-4 h-4" />
              {ride.car}
              {ride.seats === 0 ? (
                <div className="ml-4 px-3 py-1 rounded-full bg-red-700/60 text-white text-xs">
                  мест нет
                </div>
              ) : (
                <>
                  <img src="/icons/seats.svg" className="w-4 h-4 ml-4" />
                  {ride.seats} мест
                </>
              )}
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
                onClick={() => handleReply(ride)}
                className="w-full sm:flex-1 py-2 text-sm font-medium text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 transition"
              >
                Откликнуться
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <ReplyModal
        open={showReply}
        onClose={() => setShowReply(false)}
        onSubmit={handleSubmitReply}
        rideId={selectedRide?.id ?? null}
      />

      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </main>
  );
}
