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
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setName("");
      setPhone("+7");
      setType("trip");
      setPeople("");
      setComment("");
      setSubmitted(false);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = () => {
    setSubmitted(true);

    if (!name || !phone || (type === "trip" && !people)) {
      return;
    }

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
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-black rounded-2xl p-6 w-full max-w-md shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* SVG "назад" */}
        <button onClick={onClose} className="absolute left-4 top-4 text-white/50 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <h2 className="text-xl font-bold mb-6 text-center">Отклик на поездку</h2>

        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full mb-3 px-4 py-2 rounded-xl bg-white/5 text-white placeholder-white/40 border ${
            submitted && !name ? "border-red-500 ring-1 ring-red-500" : "border-white/10"
          } focus:ring-2 focus:ring-indigo-500 outline-none`}
        />

        <input
          type="tel"
          placeholder="Телефон (+7)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`w-full mb-3 px-4 py-2 rounded-xl bg-white/5 text-white placeholder-white/40 border ${
            submitted && !phone ? "border-red-500 ring-1 ring-red-500" : "border-white/10"
          } focus:ring-2 focus:ring-indigo-500 outline-none`}
        />

        <div className="relative mb-3">
          <select
            value={type}
            onChange={(e) => setType(e.target.value as "trip" | "parcel")}
            className="appearance-none w-full px-4 py-2 rounded-xl bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="trip">Поездка</option>
            <option value="parcel">Посылка</option>
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {type === "trip" && (
          <input
            type="number"
            placeholder="Количество человек"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            min={1}
            className={`w-full mb-3 px-4 py-2 rounded-xl bg-white/5 text-white placeholder-white/40 border ${
              submitted && !people ? "border-red-500 ring-1 ring-red-500" : "border-white/10"
            } focus:ring-2 focus:ring-indigo-500 outline-none`}
          />
        )}

        <textarea
          placeholder={type === "trip" ? "Комментарий к поездке" : "Описание посылки"}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
        />

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