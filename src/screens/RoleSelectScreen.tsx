import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RoleSelectScreen() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Выберите роль</h1>
      <div className="grid grid-cols-2 gap-6 w-full max-w-md">
        <Card
          onClick={() => navigate("/driver")}
          className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-lg shadow-xl rounded-2xl cursor-pointer hover:shadow-2xl transition"
        >
          <img src="/icons/steering-wheel.png" alt="Водитель" className="w-16 h-16 mb-4" />
          <Button variant="default" className="w-full">Водитель</Button>
        </Card>

        <Card
          onClick={() => navigate("/passenger")}
          className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-lg shadow-xl rounded-2xl cursor-pointer hover:shadow-2xl transition"
        >
          <img src="/icons/user.png" alt="Пассажир" className="w-16 h-16 mb-4" />
          <Button variant="default" className="w-full">Пассажир</Button>
        </Card>
      </div>
    </main>
  );
}
