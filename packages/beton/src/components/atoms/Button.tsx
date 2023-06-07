import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'box-border flex flex-row justify-center items-center p-2 gap-2 absolute w-16 h-5 left-5 top-5 bg-pastel-blue border-2 border-black font-inter text-sm leading-snug text-black flex-none order-0 hover:bg-hover-blue hover:shadow-2xl',
  {
    variants: {
      type: {
        filled: 'bg-pastel-blue',
        outlined: 'border-2 border-black bg-transparent',
      },
      state: {
        enabled: 'cursor-pointer',
        disabled: 'cursor-not-allowed opacity-50',
      },
      size: {
        small: 'w-16 h-5 text-sm leading-snug',
        medium: 'w-20 h-10 text-base leading-normal',
        large: 'w-24 h-14 text-lg leading-relaxed',
      },
    },
    defaultVariants: {
      type: 'filled',
      state: 'enabled',
      size: 'small',
    },
  },
);

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, ...props }: ButtonVariants) => {
  const classes = twMerge(buttonVariants(props));
  return <button className={classes} onClick={props.onClick}>{children}</button>;
}
