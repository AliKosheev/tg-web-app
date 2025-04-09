import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Blob } from "@/components/ui/blob";
import { DotsGrid } from "@/components/ui/dots-grid";

export default function RoleSelectScreen() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#0E0F11] overflow-hidden px-4 py-8">
      {/* Static dots grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#1E1F22_1px,_transparent_1px)] [background-size:20px_20px] opacity-40 z-0" />

      {/* Blurred animated blob */}
      <div className="absolute top-16 w-[220px] h-[220px] bg-[conic-gradient(from_0deg,_#fa709a,_#784ba0,_#2b86c5,_#fa709a)] rounded-full blur-3xl opacity-50 animate-spin-slow z-10" />

      {/* Heading */}
      <h1 className="text-white text-2xl font-semibold z-20 mb-8 text-center">
        Кто вы в этой поездке?
      </h1>

      {/* Role selection buttons */}
      <div className="z-20 w-full max-w-xs flex flex-col items-center gap-4">
        <Button
          className="w-full rounded-xl py-4 text-base font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
          onClick={() => navigate("/driver")}
        >
          Водитель
        </Button>
        <Button
          className="w-full rounded-xl py-4 text-base font-semibold bg-[#1E1F22] text-white border border-white/10"
          onClick={() => navigate("/passenger")}
        >
          Пассажир
        </Button>
      </div>
    </main>
  );
}

