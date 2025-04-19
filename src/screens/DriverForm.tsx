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
    const tg = (window as any).Telegram?.WebApp;
    tg?.sendData(
      JSON.stringify({ from, to, date, time, car, seats, name, phone, luggage, parcel })
    );
  };

  return (
    <main className="relative min-h-screen bg-black text-white px-4 pb-8 pt-6 overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar />

      <div className="relative z-10 max-w-md mx-auto mt-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 pt-4 shadow-2xl"
        >
          <h2 className="text-xl font-bold text-center mb-4">Водитель</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field label="Имя" value={name} onChange={setName} />
            <Field label="Телефон" value={phone} onChange={setPhone} />
            <Field label="Откуда" value={from} onChange={setFrom} />
            <Field label="Куда" value={to} onChange={setTo} />
            <Field label="Дата" type="date" value={date} onChange={setDate} />
            <Field label="Время" type="time" value={time} onChange={setTime} />
            <Field label="Марка машины" value={car} onChange={setCar} />
            <Field label="Свободных мест" type="number" value={seats} onChange={setSeats} />

            <div className="flex flex-col gap-2 pt-2">
              <Label className="flex items-center gap-2 text-white/90">
                <Checkbox
                  className="bg-white/10 data-[state=checked]:ring-2 data-[state=checked]:ring-indigo-500"
                  checked={luggage}
                  onCheckedChange={(val) => setLuggage(Boolean(val))}
                />
                Место для багажа
              </Label>
              <Label className="flex items-center gap-2 text-white/90">
                <Checkbox
                  className="bg-white/10 data-[state=checked]:ring-2 data-[state=checked]:ring-indigo-500"
                  checked={parcel}
                  onCheckedChange={(val) => setParcel(Boolean(val))}
                />
                Возможна посылка
              </Label>
            </div>
          </form>
        </motion.div>

        <div className="relative z-0 mt-6">
          <div className="absolute inset-0 h-16 bg-gradient-to-r from-indigo-500 to-violet-600 blur-2xl rounded-2xl opacity-50" />
          <Button
            type="submit"
            onClick={handleSubmit}
            className="relative w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-base"
          >
            Добавить
          </Button>
        </div>
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
      <Label className="text-white/80 text-sm">{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 bg-white/10 backdrop-blur border border-white/10 text-white placeholder:text-white/40 focus:ring-1 focus:ring-indigo-500 rounded-xl"
        required
      />
    </div>
  );
}
