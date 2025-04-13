import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import DriverForm from "./screens/DriverForm";
import PassengerScreen from "./screens/PassengerScreen";
import RoleSelectScreen from "./screens/RoleSelectScreen";

// Обёртка для анимируемых переходов
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RoleSelectScreen />} />
        <Route path="/driver" element={<DriverForm />} />
        <Route path="/passenger" element={<PassengerScreen />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}