import { FC } from "react";
import "./css/index";
export interface Props {
    color?: "primary" | "secondary";
    textColor?: "info" | "dark" | "secondary" | "primary" | "success" | "danger" | "gray";
    pill?: boolean;
}
export declare const Button: FC<Props>;
