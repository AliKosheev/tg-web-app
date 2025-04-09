import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function RoleSelectScreen() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-10 text-center"
      >
        Выберите роль
      </motion.h1>

      <div className="grid grid-cols-1 gap-6 w-full max-w-sm">
        {[{
          label: "Водитель",
          img: "/steering-wheel-icon.png",
          route: "/driver",
        }, {
          label: "Пассажир",
          img: "/person-icon.png",
          route: "/passenger",
        }].map((role, index) => (
          <motion.div
            key={role.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              onClick={() => navigate(role.route)}
              className="flex flex-col items-center justify-center gap-4 px-8 py-6 bg-white/70 backdrop-blur-md shadow-lg rounded-2xl cursor-pointer"
            >
              <img src={role.img} alt={role.label} className="w-24 h-24" />
              <Button variant="default" className="w-full text-base font-semibold py-3">
                {role.label}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
