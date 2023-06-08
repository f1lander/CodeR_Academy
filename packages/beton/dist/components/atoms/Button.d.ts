/// <reference types="react" />
import { VariantProps } from "class-variance-authority";
declare const buttonVariants: (props?: ({
    type?: "filled" | "outlined" | null | undefined;
    state?: "enabled" | "disabled" | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonVariants extends VariantProps<typeof buttonVariants> {
    children: React.ReactNode;
    onClick?: () => void;
}
export declare const Button: ({ children, ...props }: ButtonVariants) => import("react/jsx-runtime").JSX.Element;
declare const buttonStyles2: (props?: ({
    intent?: "primary" | "secondary" | "danger" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonVariants extends VariantProps<typeof buttonStyles2> {
    children: React.ReactNode;
    onClick?: () => void;
}
export declare function Button2({ intent, fullWidth, ...props }: any): import("react/jsx-runtime").JSX.Element;
export {};
