// screens/PassengerScreen.tsx

import { useEffect, useState } from "react";
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
    <main className="page">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar showBack={true} showProfile={true} />
      <div className="relative z-10 max-w-md mx-auto space-y-4 pt-12">
        <h1 className="text-2xl font-bold mb-4">Доступные поездки</h1>
        {rides.map((ride) => (
          <div key={ride.id} className="card">
            <div className="card-title">{ride.from_} → {ride.to}</div>
            <div className="card-sub">{ride.date} в {ride.time}</div>
            <button onClick={() => handleReply(ride)} className="btn">Откликнуться</button>
          </div>
        ))}
      </div>
      <ReplyModal open={showReply} onClose={() => setShowReply(false)} onSubmit={handleSubmitReply} rideId={selectedRide?.id ?? null} />
    </main>
  );
}
