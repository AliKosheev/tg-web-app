import TopBar from "@/components/TopBar";
import DotsGrid from "@/components/ui/dots-grid";

export default function PassengerScreen() {
  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-6 overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar showBack={true} showProfile={false} />

      <div className="relative z-10 max-w-md mx-auto mt-20 text-center">
        <h1 className="text-xl font-semibold mb-4">Экран пассажира</h1>
        <p className="text-white/50 text-sm">Здесь будет список доступных поездок.</p>
      </div>
    </main>
  );
}