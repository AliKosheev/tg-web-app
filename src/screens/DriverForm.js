import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "@/lib/api";
export default function DriverForm() {
    const navigate = useNavigate();
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [car, setCar] = useState("");
    const [seats, setSeats] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [luggage, setLuggage] = useState(false);
    const [parcel, setParcel] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/rides", {
                from,
                to,
                date,
                time,
                name,
                phone,
                car,
                seats: parseInt(seats),
                luggage,
                parcel,
            });
            alert("Поездка добавлена!");
            navigate("/");
        }
        catch (error) {
            console.error("Ошибка:", error);
            alert("Ошибка при отправке данных.");
        }
    };
    return (_jsx("main", { className: "min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-4 py-8", children: _jsx(Card, { className: "bg-white/60 backdrop-blur-lg shadow-xl p-6 rounded-2xl w-full max-w-md", children: _jsxs(CardContent, { children: [_jsxs("button", { onClick: () => navigate("/"), className: "mb-4 flex items-center text-sm text-blue-600 hover:underline", children: [_jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), " \u041D\u0430\u0437\u0430\u0434"] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { children: "\u0418\u043C\u044F" }), _jsx(Input, { value: name, onChange: (e) => setName(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx(Label, { children: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D" }), _jsx(Input, { value: phone, onChange: (e) => setPhone(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx(Label, { children: "\u041E\u0442\u043A\u0443\u0434\u0430" }), _jsx(Input, { value: from, onChange: (e) => setFrom(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx(Label, { children: "\u041A\u0443\u0434\u0430" }), _jsx(Input, { value: to, onChange: (e) => setTo(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx(Label, { children: "\u0414\u0430\u0442\u0430" }), _jsx(Input, { type: "date", value: date, onChange: (e) => setDate(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx(Label, { children: "\u0412\u0440\u0435\u043C\u044F" }), _jsx(Input, { type: "time", value: time, onChange: (e) => setTime(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx(Label, { children: "\u041C\u0430\u0440\u043A\u0430 \u043C\u0430\u0448\u0438\u043D\u044B" }), _jsx(Input, { value: car, onChange: (e) => setCar(e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { children: "\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0445 \u043C\u0435\u0441\u0442" }), _jsx(Input, { type: "number", value: seats, onChange: (e) => setSeats(e.target.value) })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs(Label, { className: "flex items-center gap-2", children: [_jsx(Checkbox, { checked: luggage, onCheckedChange: (value) => setLuggage(Boolean(value)) }), "\u0415\u0441\u0442\u044C \u0431\u0430\u0433\u0430\u0436"] }), _jsxs(Label, { className: "flex items-center gap-2", children: [_jsx(Checkbox, { checked: parcel, onCheckedChange: (value) => setParcel(Boolean(value)) }), "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u0430 \u043F\u043E\u0441\u044B\u043B\u043A\u0430"] })] }), _jsx(Button, { className: "w-full", type: "submit", children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C" })] })] }) }) }));
}
