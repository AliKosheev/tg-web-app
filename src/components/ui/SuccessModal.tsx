import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function SuccessModal({
  open,
  onClose,
  message = "Ваша поездка добавлена",
}: {
  open: boolean;
  onClose: () => void;
  message?: string;
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-sm flex flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // чтобы не закрывался при клике на сам alert
          >
            <p className="text-white text-lg font-semibold text-center">{message}</p>

            {/* Иконка галочки */}
            <motion.img
              src="/icons/check.svg"
              alt="Галочка"
              className="w-10 h-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            />

            {/* Кнопка */}
            <button
              onClick={onClose}
              className="mt-2 w-full bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold py-2 rounded-xl shadow-lg"
            >
              Ок
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}