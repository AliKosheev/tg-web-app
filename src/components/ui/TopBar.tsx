import { useNavigate } from "react-router-dom";

export default function TopBar({
  showBack = true,
  showProfile = true,
}: {
  showBack?: boolean;
  showProfile?: boolean;
}) {
  const navigate = useNavigate();

  return (
    <div className="absolute top-4 left-0 right-0 px-4 flex justify-between items-center z-30">
      {showBack ? (
        <button onClick={() => navigate(-1)} className="opacity-80 hover:opacity-100 transition">
          <img
            src="/icons/arrow-left.svg"
            alt="Назад"
            className="w-6 h-6 filter invert"
          />
        </button>
      ) : <div className="w-6" />}

      {showProfile ? (
        <button onClick={() => navigate("/profile")} className="opacity-80 hover:opacity-100 transition">
          <img
            src="/icons/profile.svg"
            alt="Профиль"
            className="w-6 h-6 filter invert"
          />
        </button>
      ) : <div className="w-6" />}
    </div>
  );
}