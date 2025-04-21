import { useEffect, useState } from "react";
import TopBar from "@/components/ui/TopBar";
import DotsGrid from "@/components/ui/dots-grid";

export default function ProfileScreen() {
  const [user, setUser] = useState<any>(null);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("triply_user");

    try {
      const parsed = JSON.parse(raw || "null");

      // если в parsed.username лежит сериализованная строка — парсим ещё раз
      if (typeof parsed?.username === "string" && parsed.username.includes("{")) {
        const reparsed = JSON.parse(parsed.username);
        setUser(reparsed);
        localStorage.setItem("triply_user", JSON.stringify(reparsed));
      } else {
        setUser(parsed);
      }
    } catch (e) {
      console.error("❌ Ошибка парсинга user:", e);
      localStorage.removeItem("triply_user");
    }
  }, []);

  const displayName = user?.username
    ? `@${user.username}`
    : `${user?.first_name || "Пользователь"} ${user?.last_name || ""}`;

  const avatarUrl =
    avatarError || !user?.username
      ? "/fallback-avatar.png"
      : `https://api.24triply.ru/avatar?user_id=${user.username}`;

  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-6 overflow-hidden">
      <DotsGrid className="absolute inset-0 z-0 opacity-30" />
      <TopBar showBack={true} showProfile={false} />

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center gap-6 mt-20">
        {/* Аватар и имя */}
        <div className="flex flex-col items-center gap-2">
          <img
            src={avatarUrl}
            onError={() => setAvatarError(true)}
            className="w-28 h-28 rounded-full object-cover border border-white/10"
            alt="avatar"
          />
          <h2 className="text-xl font-semibold text-center">{displayName}</h2>
        </div>

        {/* Панель 1 */}
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

        {/* Панель 2 */}
        <div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          <button className="w-full text-left px-4 py-4 flex justify-between items-center">
            <span>Очистить данные</span>
          </button>
          <hr className="border-white/10" />
          <button className="w-full text-left px-4 py-4 flex justify-between items-center">
            <span>Написать в поддержку</span>
          </button>
        </div>
      </div>
    </main>
  );
}