import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Blob } from "@/components/ui/blob";
import { DotsGrid } from "@/components/ui/dots-grid";

export default function RoleSelectScreen() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0f172a] px-4 py-8 text-white flex flex-col justify-end">
      <div className="absolute inset-0 z-0">
        <DotsGrid className="opacity-20 scale-[1.5]" />
        <Blob />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 pb-10">
        <h1 className="text-2xl font-bold">Выберите роль</h1>

        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          <Button
            className="h-20 text-base font-semibold"
            onClick={() => navigate("/driver")}
          >
            Водитель
          </Button>
          <Button
            className="h-20 text-base font-semibold"
            onClick={() => navigate("/passenger")}
          >
            Пассажир
          </Button>
        </div>
      </div>
    </main>
  );
}