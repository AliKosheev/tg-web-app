import { useEffect, useState } from "react";
import TopBar from "@/components/ui/TopBar";
import DotsGrid from "@/components/ui/dots-grid";

export default function ProfileScreen() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    tg?.ready();
    setUser(tg?.initDataUnsafe?.user);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white px-4 pt-6 pb-12 overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar showBack={true} showProfile={false} />

      {/* Градиент снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-indigo-900/40 via-violet-900/30 to-transparent z-0" />

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center gap-6">
        {/* Аватар с подсветкой */}
        <div className="relative mt-10">
          <div className="absolute inset-0 w-56 h-56 rounded-full bg-gradient-to-br from-indigo-500 via-violet-700 to-indigo-900 blur-3xl opacity-30 scale-125 animate-pulse" />
          <img
            src={
              user?.id
                ? `https://t.me/i/userpic/320/${user.id}.jpg`
                : "/fallback-avatar.png"
            }
            onError={(e) =>
              ((e.target as HTMLImageElement).src = "/fallback-avatar.png")
            }
            className="relative w-56 h-56 rounded-full object-cover border border-white/10"
            alt="avatar"
          />
        </div>

        {/* Никнейм */}
        <h2 className="text-xl font-semibold text-center">
          {user?.username ? `@${user.username}` : "Пользователь"}
        </h2>

        {/* Карточки */}
        {/* Панель 1: Мои поездки / Мои отклики */}
<div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
  <button className="w-full text-left px-4 py-4 flex justify-between items-center">
    <span>Мои поездки</span>
    <img src="/icons/arrow-right.svg" alt="→" className="w-4 h-4 opacity-50" />
  </button>
  <hr className="border-white/10" />
  <button className="w-full text-left px-4 py-4 flex justify-between items-center">
    <span>Мои отклики</span>
    <img src="/icons/arrow-right.svg" alt="→" className="w-4 h-4 opacity-50" />
  </button>
</div>

{/* Панель 2: Очистить данные / Поддержка */}
<div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
  <button className="w-full text-left px-4 py-4 flex justify-between items-center">
    <span>Очистить данные</span>
    <img src="/icons/arrow-right.svg" alt="→" className="w-4 h-4 opacity-50" />
  </button>
  <hr className="border-white/10" />
  <button className="w-full text-left px-4 py-4 flex justify-between items-center">
    <span>Написать в поддержку</span>
    <img src="/icons/arrow-right.svg" alt="→" className="w-4 h-4 opacity-50" />
  </button>
</div>
    </main>
  );
}

function GlassCard({ title }: { title: string }) {
  return (
    <div className="w-full px-4 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="text-base">{title}</span>
        <svg
          className="w-4 h-4 opacity-70"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}