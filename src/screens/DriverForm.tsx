import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/ui/TopBar";
import DotsGrid from "@/components/ui/dots-grid";

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
    const tg = (window as any).Telegram?.WebApp;
    tg?.sendData?.(
      JSON.stringify({ from, to, date, time, name, phone, car, seats, luggage, parcel })
    );
  };

  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-6 overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar />

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-900/40 via-indigo-800/20 to-transparent blur-3xl z-0 pointer-events-none" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 max-w-md mx-auto w-full p-6 pt-4 pb-10 mt-6 space-y-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
      >
        <h1 className="text-center text-2xl font-bold">Водитель</h1>

        <Field label="Имя" value={name} onChange={setName} />
        <Field label="Телефон" value={phone} onChange={setPhone} />
        <Field label="Откуда" value={from} onChange={setFrom} />
        <Field label="Куда" value={to} onChange={setTo} />
        <Field label="Дата" value={date} onChange={setDate} type="date" />
        <Field label="Время" value={time} onChange={setTime} type="time" />
        <Field label="Марка машины" value={car} onChange={setCar} />
        <Field label="Свободных мест" value={seats} onChange={setSeats} type="number" />

        <div className="flex flex-col gap-2 pt-2">
          <label className="flex items-center gap-2 text-sm text-white">
            <span
              className={`w-4 h-4 rounded-full border border-white/30 transition shadow-md ${
                luggage ? "bg-blue-500 shadow-blue-500/50" : "bg-black"
              }`}
              onClick={() => setLuggage(!luggage)}
            />
            Место для багажа
          </label>
          <label className="flex items-center gap-2 text-sm text-white">
            <span
              className={`w-4 h-4 rounded-full border border-white/30 transition shadow-md ${
                parcel ? "bg-blue-500 shadow-blue-500/50" : "bg-black"
              }`}
              onClick={() => setParcel(!parcel)}
            />
            Возможна посылка
          </label>
        </div>
      </form>

      <div className="relative z-0 max-w-md mx-auto w-full px-6 -mt-10">
        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          form="form"
          className="w-full rounded-2xl py-3 font-semibold text-lg text-white bg-gradient-to-r from-violet-500 to-indigo-600 shadow-lg border border-white/10"
        >
          Добавить
        </motion.button>
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
    <div>
      <Label className="text-white/80 text-sm mb-1 block">{label}</Label>
      <Input
        type={type}
        className="bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:ring-1 focus:ring-indigo-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
}
