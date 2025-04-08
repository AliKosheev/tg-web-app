import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
export const Card = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("rounded-xl border bg-white text-black shadow-md", className), ...props })));
Card.displayName = "Card";
export const CardContent = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("px-6 py-4", className), ...props })));
CardContent.displayName = "CardContent";
export const CardHeader = ({ children, className, }) => (_jsx("div", { className: cn("px-6 py-4", className), children: children }));
export const CardTitle = ({ children, className, }) => (_jsx("h2", { className: cn("text-lg font-semibold", className), children: children }));
