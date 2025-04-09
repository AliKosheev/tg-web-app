import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Blob } from "@/components/ui/blob";
import { DotsGrid } from "@/components/ui/dots-grid";

export default function RoleSelectScreen() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#F0F4FF] overflow-hidden px-4 py-10">
      <DotsGrid />
      <Blob className="absolute top-10 left-[-50px] w-[300px] h-[300px] z-0 opacity-60" />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800 z-10 mb-8"
      >
        Выберите роль...
      </motion.h1>

      <div className="grid grid-cols-2 gap-6 w-full max-w-sm z-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-col items-center rounded-3xl bg-white shadow-md p-5 cursor-pointer transition"
          onClick={() => navigate("/driver")}
        >
          <img src="/steering-wheel-icon.png" alt="Водитель" className="w-16 h-16 mb-4" />
          <Button className="w-full font-medium">Водитель</Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-col items-center rounded-3xl bg-white shadow-md p-5 cursor-pointer transition"
          onClick={() => navigate("/passenger")}
        >
          <img src="/person-icon.png" alt="Пассажир" className="w-16 h-16 mb-4" />
          <Button className="w-full font-medium">Пассажир</Button>
        </motion.div>
      </div>
    </main>
  );
}
