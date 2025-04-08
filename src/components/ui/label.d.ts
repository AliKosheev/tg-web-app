import * as React from "react";
import { LabelHTMLAttributes } from "react";
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
}
declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
export { Label };
