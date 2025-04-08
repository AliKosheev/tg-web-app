import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
const RoleSelectScreen = () => {
    const navigate = useNavigate();
    return (_jsxs("main", { className: "min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col items-center justify-center px-4 py-8", children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-800 mb-8", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C" }), _jsxs("div", { className: "flex flex-row gap-4", children: [_jsxs(Card, { className: "bg-white/60 backdrop-blur-lg shadow-xl p-8 rounded-2xl flex flex-col items-center w-50 h-70", children: [_jsx("img", { src: "/steering-wheel-icon.png", alt: "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C", className: "w-28 h-28 mb-6" }), _jsx(CardContent, { className: "w-full mt-auto", children: _jsx(Button, { onClick: () => navigate("/driver"), className: "w-full text-lg", children: "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C" }) })] }), _jsxs(Card, { className: "bg-white/60 backdrop-blur-lg shadow-xl p-8 rounded-2xl flex flex-col items-center w-50 h-70", children: [_jsx("img", { src: "/person-icon.png", alt: "\u041F\u0430\u0441\u0441\u0430\u0436\u0438\u0440", className: "w-28 h-28 mb-6" }), _jsx(CardContent, { className: "w-full mt-auto", children: _jsx(Button, { className: "w-full text-lg", children: "\u041F\u0430\u0441\u0441\u0430\u0436\u0438\u0440" }) })] })] })] }));
};
export default RoleSelectScreen;
