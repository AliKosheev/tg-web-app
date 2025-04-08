import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";
const Button = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (_jsx(Comp, { className: cn("inline-flex items-center justify-center rounded-2xl bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition", className), ref: ref, ...props }));
});
Button.displayName = "Button";
export { Button };
