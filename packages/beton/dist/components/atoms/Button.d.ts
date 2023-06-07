/// <reference types="react" />
import { VariantProps } from 'class-variance-authority';
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
export {};
