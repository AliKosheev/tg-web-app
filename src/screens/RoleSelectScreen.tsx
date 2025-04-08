import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const RoleSelectScreen = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">
        Выберите роль
      </h1>

      <div className="flex flex-row gap-4">
        <Card className="bg-white/60 backdrop-blur-lg shadow-xl p-8 rounded-2xl flex flex-col items-center w-50 h-70">
          <img
            src="/steering-wheel-icon.png"
            alt="Водитель"
            className="w-28 h-28 mb-6"
          />
          <CardContent className="w-full mt-auto">
            <Button onClick={() => navigate("/driver")} className="w-full text-lg">
              Водитель
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/60 backdrop-blur-lg shadow-xl p-8 rounded-2xl flex flex-col items-center w-50 h-70">
          <img
            src="/person-icon.png"
            alt="Пассажир"
            className="w-28 h-28 mb-6"
          />
          <CardContent className="w-full mt-auto">
            <Button className="w-full text-lg">Пассажир</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default RoleSelectScreen;