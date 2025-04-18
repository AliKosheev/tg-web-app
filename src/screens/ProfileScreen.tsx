import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import DotsGrid from "@/components/ui/dots-grid";
import TopBar from "@/components/TopBar";

export default function ProfileScreen() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    tg?.ready();
    setUser(tg?.initDataUnsafe?.user);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-8 overflow-hidden">
      {/* Сетка точек */}
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />

      {/* Хедер */}
      <TopBar showBack={true} showProfile={false} />

      {/* Контент */}
      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center gap-6 mt-12">
        {/* Аватар и имя */}
        <div className="flex flex-col items-center gap-2">
          <img
            src={`https://t.me/i/userpic/320/${user?.id}.jpg`}
            onError={(e) => ((e.target as HTMLImageElement).src = "/fallback-avatar.png")}
            className="w-24 h-24 rounded-full object-cover border border-white/10"
            alt="avatar"
          />
          <h2 className="text-xl font-semibold">{user?.first_name || "Пользователь"}</h2>
          <p className="text-white/50 text-sm">@{user?.username || "username"}</p>
        </div>

        {/* Мои поездки */}
        <div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
          <h3 className="text-lg font-semibold mb-3">Мои поездки</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>Нальчик → Москва</span>
              <span className="text-white/50">20.04</span>
            </li>
            <li className="flex justify-between">
              <span>Москва → Нальчик</span>
              <span className="text-white/50">22.04</span>
            </li>
          </ul>
        </div>

        {/* Отклики */}
        <div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
          <h3 className="text-lg font-semibold mb-3">Мои отклики</h3>
          <p className="text-white/50 text-sm">Вы ещё не откликались на поездки.</p>
        </div>

        {/* Кнопки */}
        <div className="w-full flex flex-col gap-3">
          <Button className="w-full bg-white/10 text-white hover:bg-white/20 transition">
            Очистить данные
          </Button>
          <Button variant="ghost" className="text-sm text-white/50">
            Написать в поддержку
          </Button>
        </div>
      </div>
    </main>
  );
}