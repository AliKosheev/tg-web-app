import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
export const Button = forwardRef(({ className, variant = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium";
    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
        ghost: "text-blue-600 hover:bg-blue-50",
    };
    return (_jsx("button", { ref: ref, className: cn(baseStyles, variants[variant], className), ...props }));
});
