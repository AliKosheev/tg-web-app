import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
const Input = React.forwardRef(({ className, ...props }, ref) => {
    return (_jsx("input", { className: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 " +
            className, ref: ref, ...props }));
});
Input.displayName = "Input";
export { Input };
