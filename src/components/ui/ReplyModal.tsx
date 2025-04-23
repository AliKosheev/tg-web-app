import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function ReplyModal({ open, onClose, onSubmit }: {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [type, setType] = useState<"trip" | "parcel">("trip");
  const [count, setCount] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    onSubmit({
      name,
      phone,
      type,
      count: type === "trip" ? count : undefined,
      comment,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className="fixed z-50 inset-0 flex items-center justify-center bg-black/50">
      <Dialog.Panel className="bg-white text-black rounded-xl p-6 w-[90%] max-w-md space-y-4">
        <Dialog.Title className="text-lg font-bold">Отклик на поездку</Dialog.Title>

        <div className="space-y-2">
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <select
            className="w-full border px-3 py-2 rounded"
            value={type}
            onChange={(e) => setType(e.target.value as "trip" | "parcel")}
          >
            <option value="trip">Поездка</option>
            <option value="parcel">Посылка</option>
          </select>

          {type === "trip" && (
            <input
              className="w-full border px-3 py-2 rounded"
              placeholder="Количество человек"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          )}

          <textarea
            className="w-full border px-3 py-2 rounded"
            placeholder={type === "trip" ? "Комментарий к поездке" : "Что за посылка и примерный вес"}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Отправить
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}