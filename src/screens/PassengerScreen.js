import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "@/lib/api";
export default function PassengerScreen() {
    const [rides, setRides] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        api.get("/rides")
            .then((res) => setRides(res.data))
            .catch((err) => console.error("Ошибка загрузки:", err));
    }, []);
    return (_jsxs("main", { className: "min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4 py-8", children: [_jsxs("button", { onClick: () => navigate("/"), className: "mb-4 flex items-center text-sm text-blue-600 hover:underline", children: [_jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), " \u041D\u0430\u0437\u0430\u0434"] }), _jsx("h2", { className: "text-xl font-semibold mb-4", children: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043F\u043E\u0435\u0437\u0434\u043A\u0438" }), _jsx("div", { className: "grid gap-4", children: rides.map((ride) => (_jsx(Card, { className: "bg-white/60 backdrop-blur-lg shadow p-4 rounded-xl", children: _jsxs(CardContent, { className: "space-y-2", children: [_jsxs("div", { className: "text-lg font-medium", children: [ride.from, " \u2192 ", ride.to] }), _jsxs("div", { children: ["\u0414\u0430\u0442\u0430: ", ride.date, ", \u0412\u0440\u0435\u043C\u044F: ", ride.time] }), _jsxs("div", { children: ["\u041C\u0435\u0441\u0442: ", ride.seats] }), _jsxs("div", { children: ["\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C: ", ride.name, ", \u0422\u0435\u043B: ", ride.phone] }), _jsxs("div", { children: ["\u041C\u0430\u0440\u043A\u0430 \u0430\u0432\u0442\u043E: ", ride.car] }), _jsxs("div", { children: [ride.luggage && "🧳 Багаж ", ride.parcel && "📦 Посылки "] }), _jsxs(Button, { variant: "outline", className: "w-full flex items-center justify-center gap-2 mt-2", children: [_jsx(CheckCircle2, { className: "h-4 w-4" }), " \u041E\u0442\u043A\u043B\u0438\u043A\u043D\u0443\u0442\u044C\u0441\u044F"] })] }) }, ride.id))) })] }));
}
