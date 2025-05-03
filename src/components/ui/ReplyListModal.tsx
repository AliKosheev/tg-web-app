import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ReplyListModalProps {
  open: boolean;
  onClose: () => void;
  replies: any[];
}

export default function ReplyListModal({ open, onClose, replies }: ReplyListModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Закрытие при клике вне окна
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className="bg-black rounded-2xl p-6 w-full max-w-md shadow-2xl border border-white/10 overflow-y-auto max-h-[80vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Отклики</h2>

            {replies.length === 0 ? (
              <p className="text-center text-white/60">Откликов пока нет.</p>
            ) : (
              <div className="space-y-4">
                {replies.map((reply, index) => (
                  <div
                    key={index}
                    className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1"
                  >
                    <p>
                      <span className="text-white/70">Имя:</span> {reply.name}
                    </p>
                    <p>
                      <span className="text-white/70">Телефон:</span> {reply.phone}
                    </p>
                    <p>
                      <span className="text-white/70">Тип:</span>{" "}
                      {reply.type === "trip" ? "Поездка" : "Посылка"}
                    </p>
                    <p>
                      <span className="text-white/70">Кол-во человек:</span> {reply.count}
                    </p>
                    {reply.comment && (
                      <p>
                        <span className="text-white/70">Комментарий:</span> {reply.comment}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={onClose}
              className="mt-8 w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition"
            >
              Закрыть
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}