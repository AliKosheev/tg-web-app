import { useNavigate } from "react-router-dom";
import DotsGrid from "@/components/ui/dots-grid";
import { AnimatedBlob } from "@/components/ui/AnimatedBlob";

export default function RoleSelectScreen() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-end px-4 pb-10 pt-20 overflow-hidden bg-black text-white">
      {/* Сетка точек — самый дальний фон */}
      <DotsGrid className="absolute inset-0 z-0 opacity-20" />

      {/* Blob-анимация — поверх точек, но под контентом */}
      <AnimatedBlob /> {/* ✅ вставляем сюда */}

      {/* Контент — поверх всего */}
      <div className="relative z-20 w-full max-w-sm flex flex-col gap-6 items-center mt-60">
        <h1 className="text-xl font-semibold text-center">
          Кто вы в этой поездке?
        </h1>

        <button
          onClick={() => navigate("/driver")}
          className="w-full py-3 rounded-2xl text-white font-semibold text-base bg-gradient-to-r from-violet-500 to-indigo-600"
        >
          Водитель
        </button>

        <button
          onClick={() => navigate("/passenger")}
          className="w-full py-3 rounded-2xl text-white font-semibold text-base bg-gradient-to-r from-indigo-700 to-indigo-900"
        >
          Пассажир
        </button>
      </div>
    </main>
  );
}