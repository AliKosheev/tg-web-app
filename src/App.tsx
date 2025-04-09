import { BrowserRouter, Routes, Route } from "react-router-dom";
import DriverForm from "./screens/DriverForm";
import PassengerScreen from "./screens/PassengerScreen";
import RoleSelectScreen from "./screens/RoleSelectScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelectScreen />} />
        <Route path="/driver" element={<DriverForm />} />
        <Route path="/passenger" element={<PassengerScreen />} />
      </Routes>
    </BrowserRouter>
  );
}