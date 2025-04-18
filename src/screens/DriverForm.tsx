import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import TopBar from "@/components/ui/TopBar";
import DotsGrid from "@/components/ui/dots-grid";

export default function DriverForm() {
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

    const tg = (window as any).Telegram?.WebApp;
    if (tg?.sendData) {
      tg.sendData(
        JSON.stringify({ from, to, date, time, name, phone, car, seats, luggage, parcel })
      );
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white px-4 pb-10 pt-4 overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar showBack={true} showProfile={true} />

      {/* Кнопка под плашкой (визуально снизу) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-0">
        <div className="w-[90%] h-10 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 blur-2xl opacity-50"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 space-y-5">
        <h2 className="text-center text-2xl font-bold">Водитель</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Field label="Имя" value={name} onChange={setName} />
          <Field label="Телефон" value={phone} onChange={setPhone} />
          <Field label="Откуда" value={from} onChange={setFrom} />
          <Field label="Куда" value={to} onChange={setTo} />
          <Field label="Дата" value={date} onChange={setDate} type="date" />
          <Field label="Время" value={time} onChange={setTime} type="time" />
          <Field label="Марка машины" value={car} onChange={setCar} />
          <Field label="Свободных мест" value={seats} onChange={setSeats} type="number" />

          <div className="flex flex-col gap-3 pt-1">
            <label className="flex items-center gap-3 text-white">
              <span
                className={`w-4 h-4 rounded-full border border-white transition-all duration-300 ${luggage ? "bg-blue-500 shadow-[0_0_8px_#3b82f6]" : "bg-black"}`}
              ></span>
              <input
                type="checkbox"
                checked={luggage}
                onChange={() => setLuggage(!luggage)}
                className="hidden"
              />
              Место для багажа
            </label>

            <label className="flex items-center gap-3 text-white">
              <span
                className={`w-4 h-4 rounded-full border border-white transition-all duration-300 ${parcel ? "bg-blue-500 shadow-[0_0_8px_#3b82f6]" : "bg-black"}`}
              ></span>
              <input
                type="checkbox"
                checked={parcel}
                onChange={() => setParcel(!parcel)}
                className="hidden"
              />
              Возможна посылка
            </label>
          </div>

          <div className="relative z-10">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold text-base py-3 rounded-2xl shadow-xl"
            >
              Добавить
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <Label className="text-white text-sm font-medium">{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-black border border-white/10 text-white placeholder:text-white/40 rounded-xl focus:ring-indigo-500"
        required
      />
    </div>
  );
}
