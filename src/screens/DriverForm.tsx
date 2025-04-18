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
        JSON.stringify({
          from,
          to,
          date,
          time,
          car,
          seats,
          name,
          phone,
          luggage,
          parcel,
        })
      );
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-6 flex items-start justify-center overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar showBack={true} showProfile={false} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-lg space-y-4 mt-12"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field label="Имя" value={name} onChange={setName} />
          <Field label="Телефон" value={phone} onChange={setPhone} />
          <Field label="Откуда" value={from} onChange={setFrom} />
          <Field label="Куда" value={to} onChange={setTo} />
          <Field label="Дата" value={date} onChange={setDate} type="date" />
          <Field label="Время" value={time} onChange={setTime} type="time" />
          <Field label="Марка машины" value={car} onChange={setCar} />
          <Field label="Свободных мест" value={seats} onChange={setSeats} type="number" />

          <div className="flex items-center gap-4">
            <Label className="flex items-center gap-2 text-white/80 text-sm">
              <Checkbox
                checked={luggage}
                onCheckedChange={(val) => setLuggage(Boolean(val))}
              />
              Есть багаж
            </Label>
            <Label className="flex items-center gap-2 text-white/80 text-sm">
              <Checkbox
                checked={parcel}
                onCheckedChange={(val) => setParcel(Boolean(val))}
              />
              Возможна посылка
            </Label>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-base py-3 rounded-2xl"
            type="submit"
          >
            Добавить
          </Button>
        </form>
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