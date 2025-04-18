import { cva, type VariantProps } from "cva";
import React from "react";

const button = cva("flex justify-center items-center font-medium", {
    variants: {
        variant: {
            primary: `text-background bg-primary hover:bg-primary-400 focus:ring-4 focus:ring-blue-300
                      dark:focus:ring-blue-300/20 focus:outline-none cursor-pointer`,
            onPrimary: `text-primary bg-primary/10 hover:bg-primary/20 focus:ring-4 focus:ring-blue-100
                        dark:focus:ring-blue-400/20 cursor-pointer`,
            outline: " text-primary border-2 border-primary hover:bg-primary/10 cursor-pointer",
            destructive:
                "bg-destructive text-background hover:bg-destructive-600 focus:ring-4 focus:ring-destructive/20 cursor-pointer",
            onDestructive: `text-destructive bg-destructive/10 hover:bg-destructive/20 focus:ring-4 focus:ring-destructive-300/50
                            dark:focus:ring-destructive-400 cursor-pointer`,
            ghost: "text-primary bg-transparent hover:bg-primary/10 cursor-pointer",
            disabled: "text-foreground/50 bg-primary/10 cursor-not-allowed"
        },
        size: {
            sm: "text-sm h-9 py-2 px-4",
            base: "text-sm h-9 py-2 px-4",
            md: "text-base py-3 px-5"
        },
        radius: {
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            full: "rounded-full"
        },
        fullWidth: {
            true: "w-full",
            false: "w-max"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "base",
        radius: "xl"
    }
});

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends VariantProps<typeof button>, BaseButtonProps {
    title?: string;
}

const Button = ({
    variant,
    size,
    radius,
    fullWidth,
    title,
    className,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={`${button({ variant, size, radius, fullWidth })} ${className}`}
            {...props}
        >
            {title ?? children}
        </button>
    );
};

export default Button;
