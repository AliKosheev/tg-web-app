import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function ReplyModal({ open, onClose, onSubmit }: any) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [type, setType] = useState("trip");
  const [count, setCount] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!name || !phone || (type === "trip" && !count)) return;
    onSubmit({ name, phone, type, count, comment });
    setName("");
    setPhone("+7");
    setCount("");
    setComment("");
    setType("trip");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 text-white">
        <h2 className="text-xl font-bold mb-4 text-center">Отклик на поездку</h2>

        <input
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 rounded-xl bg-white/10 border border-white/20 px-4 py-2 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-3 rounded-xl bg-white/10 border border-white/20 px-4 py-2 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full mb-3 rounded-xl bg-white/10 border border-white/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="trip">Поездка</option>
          <option value="parcel">Посылка</option>
        </select>

        {type === "trip" && (
          <input
            placeholder="Количество человек"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="w-full mb-3 rounded-xl bg-white/10 border border-white/20 px-4 py-2 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        )}

        <textarea
          placeholder={type === "trip" ? "Комментарий к поездке" : "Что за посылка и вес"}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full mb-4 rounded-xl bg-white/10 border border-white/20 px-4 py-2 placeholder:text-white/40 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-3 font-semibold rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 hover:opacity-90 transition"
        >
          Отклик
        </button>
      </div>
    </div>
  );
}
