import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "@/lib/api";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/rides", {
        from,
        to,
        date,
        time,
        name,
        phone,
        car,
        seats: parseInt(seats),
        luggage,
        parcel,
      });

      alert("Поездка добавлена!");
      navigate("/");
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Ошибка при отправке данных.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-4 py-8">
      <Card className="bg-white/60 backdrop-blur-lg shadow-xl p-6 rounded-2xl w-full max-w-md">
        <CardContent>
          <button onClick={() => navigate("/")} className="mb-4 flex items-center text-sm text-blue-600 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Назад
          </button>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Имя</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label>Телефон</Label>
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div>
              <Label>Откуда</Label>
              <Input value={from} onChange={(e) => setFrom(e.target.value)} required />
            </div>
            <div>
              <Label>Куда</Label>
              <Input value={to} onChange={(e) => setTo(e.target.value)} required />
            </div>
            <div>
              <Label>Дата</Label>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
              <Label>Время</Label>
              <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </div>
            <div>
              <Label>Марка машины</Label>
              <Input value={car} onChange={(e) => setCar(e.target.value)} />
            </div>
            <div>
              <Label>Свободных мест</Label>
              <Input type="number" value={seats} onChange={(e) => setSeats(e.target.value)} />
            </div>
            <div className="flex items-center gap-4">
              <Label className="flex items-center gap-2">
                <Checkbox checked={luggage} onCheckedChange={() => setLuggage(!luggage)} />
                Есть багаж
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox checked={parcel} onCheckedChange={() => setParcel(!parcel)} />
                Возможна посылка
              </Label>
            </div>
            <Button className="w-full" type="submit">Добавить</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}