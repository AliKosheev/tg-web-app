import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
const Checkbox = React.forwardRef(({ className, ...props }, ref) => (_jsx(CheckboxPrimitive.Root, { ref: ref, className: cn("peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 bg-white ring-offset-white transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className), ...props, children: _jsx(CheckboxPrimitive.Indicator, { className: "flex items-center justify-center text-white", children: _jsx(Check, { className: "h-4 w-4 text-blue-500" }) }) })));
Checkbox.displayName = "Checkbox";
export { Checkbox };
