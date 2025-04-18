import { useState } from "react";
import { Button } from "@/components/ui/button";
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

  return (
    <main className="relative min-h-screen bg-black text-white px-4 pt-4 pb-28 overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar />

      <div className="relative z-10 mt-16 max-w-md mx-auto w-full p-4 rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-4">Водитель</h1>

        <form className="space-y-3">
          <Field label="Имя" value={name} onChange={setName} />
          <Field label="Телефон" value={phone} onChange={setPhone} />
          <Field label="Откуда" value={from} onChange={setFrom} />
          <Field label="Куда" value={to} onChange={setTo} />
          <Field label="Дата" value={date} onChange={setDate} type="date" />
          <Field label="Время" value={time} onChange={setTime} type="time" />
          <Field label="Марка машины" value={car} onChange={setCar} />
          <Field label="Свободных мест" value={seats} onChange={setSeats} type="number" />

          <div className="pt-2 space-y-2">
            <label className="flex items-center gap-2">
              <span
                className={`w-4 h-4 rounded-full border-2 ${
                  luggage ? "border-blue-500 bg-blue-500" : "border-white/30"
                } transition`}
                onClick={() => setLuggage(!luggage)}
              />
              <span>Место для багажа</span>
            </label>

            <label className="flex items-center gap-2">
              <span
                className={`w-4 h-4 rounded-full border-2 ${
                  parcel ? "border-blue-500 bg-blue-500" : "border-white/30"
                } transition`}
                onClick={() => setParcel(!parcel)}
              />
              <span>Возможна посылка</span>
            </label>
          </div>
        </form>
      </div>

      {/* Кнопка */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <div className="rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-700 p-[1px]">
          <Button className="w-full py-3 text-white text-base font-semibold rounded-2xl bg-black hover:bg-black/90">
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
  onChange: (val: string) => void;
  type?: string;
}) {
  return (
    <div>
      <Input
        type={type}
        placeholder={label}
        className="bg-white/5 border border-white/10 placeholder:text-white/30 text-white focus:ring-1 focus:ring-violet-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
}