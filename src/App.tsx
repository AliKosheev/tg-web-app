import { BrowserRouter, Route, Routes } from "react-router-dom";
import DriverForm from "./screens/DriverForm";
import Home from "./App"; // или что у тебя главный экран
import PassengerScreen from "./screens/PassengerScreen"; 

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/driver" element={<DriverForm />} />
      <Route path="/passenger" element={<PassengerScreen />} />
    </Routes>
  </BrowserRouter>
);