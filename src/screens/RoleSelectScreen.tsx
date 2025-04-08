import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function RoleSelectScreen() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col items-center justify-center p-4">
      <motion.h1 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center"
      >
        Выберите роль
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="bg-zinc-700 p-6 rounded-2xl shadow-lg flex flex-col items-center text-white"
        >
          <img src="/steering-wheel-icon.png" alt="Водитель" className="h-20 w-20 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Водитель</h2>
          <Button className="w-full mt-2" onClick={() => navigate("/driver")}>Выбрать</Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="bg-zinc-700 p-6 rounded-2xl shadow-lg flex flex-col items-center text-white"
        >
          <img src="/person-icon.png" alt="Пассажир" className="h-20 w-20 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Пассажир</h2>
          <Button className="w-full mt-2" onClick={() => navigate("/passenger")}>Выбрать</Button>
        </motion.div>
      </div>
    </main>
  );
}