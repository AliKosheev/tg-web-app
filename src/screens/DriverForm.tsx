import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import DotsGrid from "@/components/ui/dots-grid";
import TopBar from "@/components/ui/TopBar";

export default function DriverForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [car, setCar] = useState("");
  const [seats, setSeats] = useState("");
  const [luggage, setLuggage] = useState(false);
  const [parcel, setParcel] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-6 flex items-start justify-center overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar />

      {/* Кнопка с фоном под ней */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-600 blur-2xl opacity-50 rounded-2xl" />
        <button className="relative z-10 w-full py-3 rounded-2xl text-white font-semibold text-base bg-gradient-to-r from-violet-500 to-indigo-600">
          Добавить
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-lg space-y-4"
      >
        <h1 className="text-center text-xl font-bold">Водитель</h1>

        <Field label="Имя" value={from} onChange={setFrom} />
        <Field label="Телефон" value={to} onChange={setTo} />
        <Field label="Откуда" value={from} onChange={setFrom} />
        <Field label="Куда" value={to} onChange={setTo} />
        <Field label="Дата" value={date} onChange={setDate} type="date" />
        <Field label="Время" value={time} onChange={setTime} type="time" />
        <Field label="Марка машины" value={car} onChange={setCar} />
        <Field label="Свободных мест" value={seats} onChange={setSeats} type="number" />

        <div className="flex flex-col gap-2 pt-2">
          <Label className="flex items-center gap-3 text-white text-base">
            <Checkbox
              checked={luggage}
              onCheckedChange={(val) => setLuggage(Boolean(val))}
              className="h-5 w-5 border-white/30 data-[state=checked]:bg-blue-500 shadow-blue-500/30 shadow-md"
            />
            Место для багажа
          </Label>

          <Label className="flex items-center gap-3 text-white text-base">
            <Checkbox
              checked={parcel}
              onCheckedChange={(val) => setParcel(Boolean(val))}
              className="h-5 w-5 border-white/30 data-[state=checked]:bg-blue-500 shadow-blue-500/30 shadow-md"
            />
            Возможна посылка
          </Label>
        </div>
      </motion.div>
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
      <Label className="text-white/80 text-sm">{label}</Label>
      <Input
        type={type}
        className="mt-1 bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:ring-1 focus:ring-indigo-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
}
