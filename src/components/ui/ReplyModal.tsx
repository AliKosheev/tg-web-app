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

        {/* Имя */}
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        {/* Телефон */}
        <input
          type="tel"
          placeholder="Телефон (+7)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        {/* Тип поездки */}
        <div className="relative mb-3">
          <select
            value={type}
            onChange={(e) => setType(e.target.value as "trip" | "parcel")}
            className="appearance-none w-full px-4 py-2 rounded-xl bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="trip">Поездка</option>
            <option value="parcel">Посылка</option>
          </select>

          {/* Иконка стрелочки */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Количество человек (только для поездки) */}
        {type === "trip" && (
          <input
            type="number"
            placeholder="Количество человек"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            min={1}
            className="w-full mb-3 px-4 py-2 rounded-xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        )}

        {/* Комментарий */}
        <textarea
          placeholder="Комментарий к поездке или описание посылки"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
        />

        {/* Кнопка отправки */}
        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 active:bg-indigo-700 text-white font-semibold py-2 rounded-xl transition"
        >
          Отправить отклик
        </button>
      </div>
    </div>
  );
}