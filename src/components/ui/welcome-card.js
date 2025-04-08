import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export function WelcomeCard() {
    return (_jsx("main", { className: "flex items-center justify-center h-screen bg-gradient-to-br from-[#f0f4ff] to-[#dbeafe] p-4", children: _jsx(Card, { className: "w-full max-w-md shadow-xl rounded-2xl", children: _jsxs(CardContent, { className: "p-6 text-center space-y-4", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!" }), _jsx("p", { className: "text-gray-600", children: "\u0417\u0434\u0435\u0441\u044C \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u043E\u0435\u0437\u0434\u043A\u0430\u0445." }), _jsx(Button, { className: "w-full", onClick: () => window.Telegram?.WebApp?.close(), children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C WebApp" })] }) }) }));
}
