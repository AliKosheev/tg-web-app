import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import DotsGrid from "@/components/ui/dots-grid";
import TopBar from "@/components/ui/TopBar";

export default function DriverForm() {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [car, setCar] = useState("");
  const [seats, setSeats] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [luggage, setLuggage] = useState(false);
  const [parcel, setParcel] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tg = window.Telegram?.WebApp;
    tg?.sendData?.(
      JSON.stringify({ from, to, date, time, name, phone, car, seats, luggage, parcel })
    );
  };

  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-10 pb-28 flex items-start justify-center overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar />

      {/* Кнопка под формой (по z-index) */}
      <div className="absolute bottom-6 left-0 right-0 z-0 flex justify-center">
        <div className="w-[90%] max-w-md rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 py-3 text-center text-white font-semibold text-base shadow-xl relative">
          <div className="absolute inset-0 rounded-2xl blur-2xl bg-gradient-to-r from-violet-500 to-indigo-600 opacity-50 -z-10" />
          Добавить
        </div>
      </div>

      {/* Форма */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md mt-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Водитель</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            ["Имя", name, setName],
            ["Телефон", phone, setPhone],
            ["Откуда", from, setFrom],
            ["Куда", to, setTo],
            ["Дата", date, setDate, "date"],
            ["Время", time, setTime, "time"],
            ["Марка машины", car, setCar],
            ["Свободных мест", seats, setSeats, "number"],
          ].map(([label, value, onChange, type = "text"], idx) => (
            <div key={idx}>
              <Label className="text-white/80 text-sm">{label}</Label>
              <Input
                type={type as string}
                className="mt-1 bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:ring-1 focus:ring-indigo-500"
                value={value as string}
                onChange={(e) => (onChange as (v: string) => void)(e.target.value)}
                required
              />
            </div>
          ))}

          <div className="flex flex-col gap-3 pt-2">
            <label className="flex items-center gap-3 text-white">
              <div
                className={`w-4 h-4 rounded-full border border-white/20 ${
                  luggage ? "bg-blue-500 shadow-[0_0_8px_2px_rgba(99,102,241,0.8)]" : "bg-black"
                }`}
                onClick={() => setLuggage(!luggage)}
              />
              Место для багажа
            </label>

            <label className="flex items-center gap-3 text-white">
              <div
                className={`w-4 h-4 rounded-full border border-white/20 ${
                  parcel ? "bg-blue-500 shadow-[0_0_8px_2px_rgba(99,102,241,0.8)]" : "bg-black"
                }`}
                onClick={() => setParcel(!parcel)}
              />
              Возможна посылка
            </label>
          </div>
        </form>
      </motion.div>
    </main>
  );
}
