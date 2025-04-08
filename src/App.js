import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DriverForm from "./screens/DriverForm";
import PassengerScreen from "./screens/PassengerScreen";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.Telegram?.WebApp?.expand();
    }, []);
    return (_jsxs("main", { className: "min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col items-center justify-center px-4 py-8", children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-800 mb-8", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C" }), _jsxs("div", { className: "grid grid-cols-2 gap-4 w-full max-w-sm px-2", children: [_jsxs(Card, { className: "bg-white/60 backdrop-blur-lg shadow-xl p-4 rounded-2xl flex flex-col items-center", children: [_jsx("img", { src: "/steering-wheel-icon.png", alt: "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C", className: "w-20 h-20 mb-4" }), _jsx(CardContent, { className: "w-full mt-auto", children: _jsx(Button, { className: "w-full text-sm", onClick: () => navigate("/driver"), children: "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C" }) })] }), _jsxs(Card, { className: "bg-white/60 backdrop-blur-lg shadow-xl p-4 rounded-2xl flex flex-col items-center", children: [_jsx("img", { src: "/person-icon.png", alt: "\u041F\u0430\u0441\u0441\u0430\u0436\u0438\u0440", className: "w-20 h-20 mb-4" }), _jsx(CardContent, { className: "w-full mt-auto", children: _jsx(Button, { className: "w-full text-sm", onClick: () => navigate("/passenger"), children: "\u041F\u0430\u0441\u0441\u0430\u0436\u0438\u0440" }) })] })] })] }));
};
export default function App() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/driver", element: _jsx(DriverForm, {}) }), _jsx(Route, { path: "/passenger", element: _jsx(PassengerScreen, {}) })] }) }));
}
