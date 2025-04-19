import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import DotsGrid from "@/components/ui/dots-grid";
import TopBar from "@/components/ui/TopBar";
import SuccessModal from "@/components/ui/SuccessModal";

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
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tg = (window as any).Telegram?.WebApp;

    if (tg?.sendData) {
      tg.sendData(
        JSON.stringify({
          from,
          to,
          date,
          time,
          name,
          phone,
          car,
          seats,
          luggage,
          parcel,
        })
      );
    }

    setShowSuccess(true); // Показать модалку
  };

  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-8 overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 max-w-md mx-auto mt-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl space-y-4"
      >
        <h1 className="text-xl font-bold text-center mb-2">Водитель</h1>

        <Field label="Имя" value={name} onChange={setName} />
        <Field label="Телефон" value={phone} onChange={setPhone} />
        <Field label="Откуда" value={from} onChange={setFrom} />
        <Field label="Куда" value={to} onChange={setTo} />
        <Field label="Дата" value={date} onChange={setDate} type="date" />
        <Field label="Время" value={time} onChange={setTime} type="time" />
        <Field label="Марка машины" value={car} onChange={setCar} />
        <Field label="Свободных мест" value={seats} onChange={setSeats} type="number" />

        <div className="flex flex-col gap-2 mt-4">
          <CheckboxField label="Место для багажа" checked={luggage} onChange={setLuggage} />
          <CheckboxField label="Возможна посылка" checked={parcel} onChange={setParcel} />
        </div>
      </form>

      {/* Кнопка вне формы */}
      <div className="relative z-0 max-w-md mx-auto -mt-5">
        <div className="absolute -inset-x-4 -top-4 h-16 bg-gradient-to-r from-indigo-500 to-violet-600 blur-2xl opacity-40 rounded-3xl" />
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full z-10 relative bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold py-3 rounded-2xl text-base"
        >
          Добавить
        </button>
      </div>

      {/* Модалка */}
      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
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
  onChange: (val: string) => void;
  type?: string;
}) {
  return (
    <div>
      <Label className="text-white/80 text-sm mb-1 block">{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-1 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:ring-indigo-500 focus:ring-1"
        required
      />
    </div>
  );
}

function CheckboxField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-3 text-white/90">
      <Checkbox
        checked={checked}
        onCheckedChange={(val) => onChange(Boolean(val))}
        className="data-[state=checked]:bg-blue-500 data-[state=checked]:shadow-blue-400/50 data-[state=checked]:shadow-md border-white/20 w-5 h-5 rounded-full"
      />
      <span>{label}</span>
    </label>
  );
}