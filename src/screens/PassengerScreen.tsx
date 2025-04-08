import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "@/lib/api";

export default function PassengerScreen() {
  const [rides, setRides] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/rides")
      .then((res) => setRides(res.data))
      .catch((err) => console.error("Ошибка загрузки:", err));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4 py-8">
      <button onClick={() => navigate("/")} className="mb-4 flex items-center text-sm text-blue-600 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" /> Назад
      </button>
      <h2 className="text-xl font-semibold mb-4">Доступные поездки</h2>
      <div className="grid gap-4">
        {rides.map((ride, index) => (
          <Card key={index} className="bg-white/60 backdrop-blur-lg shadow p-4 rounded-xl">
            <CardContent className="space-y-2">
              <div className="text-lg font-medium">{ride.from} → {ride.to}</div>
              <div>Дата: {ride.date}, Время: {ride.time}</div>
              <div>Мест: {ride.seats}</div>
              <div>Водитель: {ride.name}, Тел: {ride.phone}</div>
              <div>Марка авто: {ride.car}</div>
              <div>
                {ride.luggage && "🧳 Багаж "}
                {ride.parcel && "📦 Посылки "}
              </div>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2 mt-2">
                <CheckCircle2 className="h-4 w-4" /> Откликнуться
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}