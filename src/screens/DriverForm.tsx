import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/ui/TopBar";
import clsx from "clsx";

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
    <main className="relative min-h-screen bg-black text-white px-4 pt-6 pb-20 overflow-hidden">
      <TopBar />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-violet-800 via-indigo-900 to-transparent blur-3xl opacity-40" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 max-w-md mx-auto w-full mt-4 bg-white/5 backdrop-blur-md border border-white/10 p-6 pt-4 rounded-3xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-1">Водитель</h2>

        <Field label="Имя" value={name} onChange={setName} />
        <Field label="Телефон" value={phone} onChange={setPhone} />
        <Field label="Откуда" value={from} onChange={setFrom} />
        <Field label="Куда" value={to} onChange={setTo} />
        <Field label="Дата" type="date" value={date} onChange={setDate} />
        <Field label="Время" type="time" value={time} onChange={setTime} />
        <Field label="Марка машины" value={car} onChange={setCar} />
        <Field label="Свободных мест" type="number" value={seats} onChange={setSeats} />

        <div className="flex flex-col gap-3 pt-2">
          <Checkbox
            label="Место для багажа"
            checked={luggage}
            onChange={() => setLuggage(!luggage)}
          />
          <Checkbox
            label="Возможна посылка"
            checked={parcel}
            onChange={() => setParcel(!parcel)}
          />
        </div>
      </form>

      <div className="relative z-0 flex justify-center -mt-6">
        <div className="absolute w-[90%] h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 blur-2xl opacity-50" />
        <button
          type="submit"
          onClick={handleSubmit}
          className="relative z-10 w-[90%] py-3 rounded-2xl text-white font-semibold text-base bg-gradient-to-r from-violet-500 to-indigo-600"
        >
          Добавить
        </button>
      </div>
    </main>
  );
}

function Field({ label, value, onChange, type = "text" }: any) {
  return (
    <div>
      <Label className="text-white/80 text-sm mb-1 block">{label}</Label>
      <Input
        type={type}
        className="mt-1 bg-black border border-white/10 text-white placeholder:text-white/40 focus:ring-indigo-500 focus:ring-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
}

function Checkbox({ label, checked, onChange }: any) {
  return (
    <label className="flex items-center gap-3 text-white/90 text-base">
      <span
        className={clsx(
          "w-5 h-5 rounded-full border border-white/20 flex items-center justify-center transition",
          checked && "bg-blue-600 shadow-[0_0_6px_2px_rgba(99,102,241,0.8)]"
        )}
      >
        {checked && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
      </span>
      {label}
      <input type="checkbox" className="hidden" checked={checked} onChange={onChange} />
    </label>
  );
}
