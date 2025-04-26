// components/ui/ReplyModal.tsx

import { useState, useEffect } from "react";

interface ReplyPayload {
  ride_id: number;
  name: string;
  phone: string;
  type: "trip" | "parcel";
  count: number;
  comment: string;
  telegram_user_id: number;
}

interface ReplyModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: ReplyPayload) => void;
  rideId: number | null;
}

export default function ReplyModal({ open, onClose, onSubmit, rideId }: ReplyModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [type, setType] = useState<"trip" | "parcel">("trip");
  const [people, setPeople] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (open) {
      setName("");
      setPhone("+7");
      setType("trip");
      setPeople("");
      setComment("");
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = () => {
    const raw = localStorage.getItem("triply_user");
    const user = raw ? JSON.parse(raw) : null;

    if (!rideId || !user?.id) {
      alert("❌ Ошибка: нет данных поездки или Telegram ID");
      return;
    }

    const payload: ReplyPayload = {
      ride_id: rideId,
      name,
      phone,
      type,
      count: type === "trip" ? Number(people) || 1 : 1,
      comment,
      telegram_user_id: user.id,
    };

    onSubmit(payload);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-black rounded-2xl p-6 w-full max-w-md shadow-2xl border border-white/10">
        <h2 className="text-xl font-bold mb-4 text-center">Отклик на поездку</h2>
        <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} className="input" />
        <input type="tel" placeholder="Телефон (+7)" value={phone} onChange={(e) => setPhone(e.target.value)} className="input" />
        <div className="relative mb-3">
          <select value={type} onChange={(e) => setType(e.target.value as "trip" | "parcel")} className="select">
            <option value="trip">Поездка</option>
            <option value="parcel">Посылка</option>
          </select>
        </div>
        {type === "trip" && (
          <input type="number" placeholder="Количество человек" value={people} onChange={(e) => setPeople(e.target.value)} min={1} className="input" />
        )}
        <textarea placeholder="Комментарий" value={comment} onChange={(e) => setComment(e.target.value)} className="textarea" />
        <button onClick={handleSubmit} className="btn">Отправить отклик</button>
      </div>
    </div>
  );
}