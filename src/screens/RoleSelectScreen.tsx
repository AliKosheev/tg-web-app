import { useNavigate } from "react-router-dom";
import DotsGrid from "@/components/ui/dots-grid";

export default function RoleSelectScreen() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-end px-4 pb-10 pt-20 overflow-hidden bg-black text-white">
      {/* Сетка точек */}
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />

      {/* Блоб-анимация */}
      <img
        src="/blob.gif"
        alt="Animated Blob"
        className="absolute top-8 w-[600px] h-[400px] z-10 mix-blend-screen pointer-events-none select-none"
      />

      {/* Контент */}
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