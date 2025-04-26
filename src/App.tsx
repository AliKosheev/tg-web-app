import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import DriverForm from "./screens/DriverForm";
import PassengerScreen from "./screens/PassengerScreen";
import RoleSelectScreen from "./screens/RoleSelectScreen";
import ProfileScreen from "./screens/ProfileScreen";
import WelcomeScreen from "./screens/WelcomeScreen"; // ✅ новый импорт

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<WelcomeScreen />} /> {/* ✅ стартовый экран */}
        <Route path="/select" element={<RoleSelectScreen />} />
        <Route path="/driver" element={<DriverForm />} />
        <Route path="/passenger" element={<PassengerScreen />} />
        <Route path="/my-rides" element={<DriverRidesScreen />} />
        <Route path="/my-replies" element={<PassengerRepliesScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
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