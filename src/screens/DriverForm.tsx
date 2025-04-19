import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    const tg = (window as any).Telegram?.WebApp;
    if (tg?.sendData) {
      tg.sendData(
        JSON.stringify({ from, to, date, time, name, phone, car, seats, luggage, parcel })
      );
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white px-4 pt-6 pb-20 overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar />

      <form onSubmit={handleSubmit} className="relative z-10 max-w-md mx-auto">
        <div className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl space-y-4 mt-10">
          <h1 className="text-2xl font-bold text-center">Водитель</h1>

          <Field label="Имя" value={name} onChange={setName} />
          <Field label="Телефон" value={phone} onChange={setPhone} />
          <Field label="Откуда" value={from} onChange={setFrom} />
          <Field label="Куда" value={to} onChange={setTo} />
          <Field label="Дата" value={date} onChange={setDate} type="date" />
          <Field label="Время" value={time} onChange={setTime} type="time" />
          <Field label="Марка машины" value={car} onChange={setCar} />
          <Field label="Свободных мест" value={seats} onChange={setSeats} type="number" customStyle />

          <div className="space-y-2 pt-2">
            <Checkbox label="Место для багажа" checked={luggage} onChange={setLuggage} />
            <Checkbox label="Возможна посылка" checked={parcel} onChange={setParcel} />
          </div>
        </div>

        {/* Кнопка и свечение */}
        <div className="relative z-0 mt-6 flex justify-center">
          <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-violet-500 to-indigo-600 opacity-40 rounded-2xl" />
          <button
            type="submit"
            className="relative z-10 w-full max-w-md bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold text-base py-3 rounded-2xl shadow-md"
          >
            Добавить
          </button>
        </div>
      </form>
    </main>
  );
}

function Field({ label, value, onChange, type = "text", customStyle = false }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  customStyle?: boolean;
}) {
  return (
    <div>
      <Label className="text-white/80 text-sm mb-1 block">{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border border-white/10 bg-white/10 text-white placeholder:text-white/40 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 ${customStyle ? 'appearance-none' : ''}`}
      />
    </div>
  );
}

function Checkbox({ label, checked, onChange }: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-3 text-white text-base">
      <span
        onClick={() => onChange(!checked)}
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${checked ? 'border-blue-500 bg-blue-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]' : 'border-white/30 bg-transparent'}`}
      >
        {checked && <div className="w-2 h-2 rounded-full bg-white" />}
      </span>
      {label}
    </label>
  );
}
