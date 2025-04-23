import { Dialog } from "@headlessui/react";
// ReplyModal.tsx — стилизован под тёмную тему Triply

import { useState } from "react";

interface ReplyModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export default function ReplyModal({ open, onClose, onSubmit }: ReplyModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [type, setType] = useState("trip");
  const [people, setPeople] = useState("");
  const [comment, setComment] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    const payload = {
      name,
      phone,
      type,
      people: type === "trip" ? people : undefined,
      comment,
    };
    onSubmit(payload);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-black rounded-2xl p-6 w-full max-w-md shadow-2xl border border-white/10">
        <h2 className="text-xl font-bold mb-4">Отклик на поездку</h2>

        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <input
          type="tel"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <div className="relative mb-3">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
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
            className="w-full mb-3 px-4 py-2 rounded-xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        )}

        <textarea
          placeholder={type === "trip" ? "Комментарий к поездке" : "Что за посылка и вес"}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl transition"
        >
          Отправить
        </button>
      </div>
    </div>
  );
}
