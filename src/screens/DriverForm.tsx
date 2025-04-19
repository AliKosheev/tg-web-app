import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import TopBar from "@/components/ui/TopBar";

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

    const tg = (window as any)?.Telegram?.WebApp;
    
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
  };

  return (
    <main className="relative min-h-screen bg-black text-white px-4 pt-8 pb-28 overflow-hidden">
      <TopBar />

      {/* Светящийся фон под кнопкой */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-10 bg-gradient-to-r from-violet-500 to-indigo-600 blur-2xl opacity-80 z-0" />

      <div className="relative z-10 w-full max-w-md mx-auto mt-16 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-6 shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6">Водитель</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Field label="Имя" value={name} onChange={setName} />
          <Field label="Телефон" value={phone} onChange={setPhone} />
          <Field label="Откуда" value={from} onChange={setFrom} />
          <Field label="Куда" value={to} onChange={setTo} />
          <Field label="Дата" value={date} onChange={setDate} type="date" />
          <Field label="Время" value={time} onChange={setTime} type="time" />
          <Field label="Марка машины" value={car} onChange={setCar} />
          <Field label="Свободных мест" value={seats} onChange={setSeats} type="number" />

          <div className="flex flex-col gap-3 pt-2">
            <Label className="flex items-center gap-3 text-white">
              <Checkbox
                checked={luggage}
                onCheckedChange={(val) => setLuggage(Boolean(val))}
                className="data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500 shadow-lg"
              />
              Место для багажа
            </Label>
            <Label className="flex items-center gap-3 text-white">
              <Checkbox
                checked={parcel}
                onCheckedChange={(val) => setParcel(Boolean(val))}
                className="data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500 shadow-lg"
              />
              Возможна посылка
            </Label>
          </div>
        </form>
      </div>

      <div className="relative z-0 flex justify-center mt-6">
        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-[280px] bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold py-3 rounded-2xl shadow-xl"
        >
          Добавить
        </Button>
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
      <Label className="text-white text-sm mb-1 block">{label}</Label>
      <Input
        type={type}
        className="w-full rounded-xl bg-black border border-white/10 text-white placeholder-white/40 focus:ring-1 focus:ring-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
}
