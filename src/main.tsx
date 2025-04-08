import "./index.css";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import DriverForm from "./screens/DriverForm";
import PassengerScreen from "./screens/PassengerScreen";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.Telegram?.WebApp?.expand();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">
        Выберите роль
      </h1>

      <div className="grid grid-cols-2 gap-4 w-full max-w-sm px-2">
        {/* Водитель */}
        <Card className="bg-white/60 backdrop-blur-lg shadow-xl p-4 rounded-2xl flex flex-col items-center">
          <img
            src="/steering-wheel-icon.png"
            alt="Водитель"
            className="w-20 h-20 mb-4"
          />
          <CardContent className="w-full mt-auto">
            <Button
              className="w-full text-sm"
              onClick={() => navigate("/driver")}
            >
              Водитель
            </Button>
          </CardContent>
        </Card>

        {/* Пассажир */}
        <Card className="bg-white/60 backdrop-blur-lg shadow-xl p-4 rounded-2xl flex flex-col items-center">
          <img
            src="/person-icon.png"
            alt="Пассажир"
            className="w-20 h-20 mb-4"
          />
          <CardContent className="w-full mt-auto">
            <Button
              className="w-full text-sm"
              onClick={() => navigate("/passenger")}
            >
              Пассажир
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/driver" element={<DriverForm />} />
      <Route path="/passenger" element={<PassengerScreen />} />
    </Routes>
  </BrowserRouter>
);