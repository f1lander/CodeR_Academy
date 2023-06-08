import { cva, VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  `bg-blue-600 text-black px-6 py-3 border-4 border-gray-800 shadow-2xl transform hover:scale-105 transition-transform font-bold uppercase cursor-pointer`,
  {
    variants: {
      type: {
        filled: "bg-pastel-blue",
        outlined: "border-2 border-black bg-transparent",
      },
      state: {
        enabled: "cursor-pointer",
        disabled: "cursor-not-allowed opacity-50",
      },
      size: {
        small: "w-16 h-5 text-sm leading-snug",
        medium: "w-20 h-10 text-base leading-normal",
        large: "w-24 h-14 text-lg leading-relaxed",
      },
    },
    defaultVariants: {
      type: "filled",
      state: "enabled",
      size: "small",
    },
  }
);

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, ...props }: ButtonVariants) => {
  const classes = twMerge(buttonVariants(props));
  return (
    <button className={classes} onClick={props.onClick}>
      {children}
    </button>
  );
};

const buttonStyles2 = cva(
  "flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80",
  {
    variants: {
      intent: {
        primary: "bg-brand-500 text-white",
        secondary:
          "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500",
        danger: "bg-red-500 text-white focus:ring-red-500",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export interface ButtonVariants extends VariantProps<typeof buttonStyles2> {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button2({ intent, fullWidth, ...props }: any) {
  return <button className={buttonStyles2({ intent, fullWidth })} {...props} />;
}
