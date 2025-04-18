import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
    <main className="relative min-h-screen bg-black text-white px-4 py-6 flex items-start justify-center overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-lg space-y-4"
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-sm text-indigo-400 hover:text-indigo-300 transition"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <AnimatedField index={0} label="Имя" value={name} onChange={setName} />
          <AnimatedField index={1} label="Телефон" value={phone} onChange={setPhone} />
          <AnimatedField index={2} label="Откуда" value={from} onChange={setFrom} />
          <AnimatedField index={3} label="Куда" value={to} onChange={setTo} />
          <AnimatedField index={4} label="Дата" value={date} onChange={setDate} type="date" />
          <AnimatedField index={5} label="Время" value={time} onChange={setTime} type="time" />
          <AnimatedField index={6} label="Марка машины" value={car} onChange={setCar} />
          <AnimatedField index={7} label="Свободных мест" value={seats} onChange={setSeats} type="number" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="flex items-center gap-4"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <Button
              className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-base py-3 rounded-2xl"
              type="submit"
            >
              Добавить
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </main>
  );
}

function AnimatedField({
  label,
  value,
  onChange,
  type = "text",
  index,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Label className="text-white/80 text-sm">{label}</Label>
      <Input
        type={type}
        className="mt-1 bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:ring-1 focus:ring-indigo-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </motion.div>
  );
}