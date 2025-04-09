import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function RoleSelectScreen() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4 py-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Grid Dots Background */}
      <div className="absolute inset-0 bg-[url('/dots-grid.svg')] bg-repeat opacity-30 z-0"></div>

      {/* Blob Animation */}
      <motion.div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-purple-300 opacity-30 mix-blend-multiply filter blur-2xl animate-blob z-0"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-3xl font-bold text-gray-900 mb-10 z-10"
      >
        Кто вы?
      </motion.h1>

      <div className="relative grid grid-cols-1 gap-6 w-full max-w-xs z-10">
        <Card
          onClick={() => navigate("/driver")}
          className="flex flex-col items-center p-6 bg-white shadow-xl rounded-2xl cursor-pointer hover:shadow-2xl transition"
        >
          <img src="/steering-wheel-icon.png" alt="Водитель" className="w-20 h-20 mb-4" />
          <Button variant="default" className="w-full text-base font-semibold">
            Водитель
          </Button>
        </Card>

        <Card
          onClick={() => navigate("/passenger")}
          className="flex flex-col items-center p-6 bg-white shadow-xl rounded-2xl cursor-pointer hover:shadow-2xl transition"
        >
          <img src="/person-icon.png" alt="Пассажир" className="w-20 h-20 mb-4" />
          <Button variant="default" className="w-full text-base font-semibold">
            Пассажир
          </Button>
        </Card>
      </div>
    </main>
  );
}
