import { cva, type VariantProps } from "cva";
import React, { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const typography = cva("", {
    variants: {
        size: {
            xs: "text-xs",
            sm: "text-sm",
            base: "text-base",
            md: "text-lg",
            lg: "text-xl",
            xl: "text-2xl",
            "2xl": "text-3xl",
            "3xl": "text-4xl",
            "4xl": "text-5xl",
            "5xl": "text-6xl"
        },
        weight: {
            extralight: "font-extralight",
            thin: "font-thin",
            light: "font-light",
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
            extrabold: "font-extrabold",
            black: "font-black"
        },
        tracking: {
            tightiest: "tracking-[-2px]",
            tighter: "tracking-tighter",
            tight: "tracking-tight",
            normal: "tracking-normal",
            wide: "tracking-wide",
            wider: "tracking-wider",
            widest: "tracking-widest"
        },
        color: {
            foreground: "text-foreground",
            background: "text-background",
            primary: "text-primary",
            muted: "text-muted",
            "muted-background": "text-muted-background",
            destructive: "text-destructive"
        },
        textCenter: {
            true: "text-center",
            false: "text-left"
        }
    },
    defaultVariants: {
        weight: "normal",
        tracking: "normal"
    }
});

type BaseTypographyProps = Omit<ComponentProps<"h1">, "title" | "color">;

interface TypographyProps extends VariantProps<typeof typography>, BaseTypographyProps {
    title?: string | number;
}

export const H1 = ({
    title,
    size = "4xl",
    weight,
    tracking,
    color,
    textCenter,
    className,
    ...props
}: TypographyProps) => {
    return (
        <h1
            className={twMerge(
                typography({ size, weight, tracking, color, textCenter }),
                className
            )}
            {...props}
        >
            {title}
        </h1>
    );
};

export const H2 = ({
    title,
    size = "3xl",
    weight,
    tracking,
    color,
    textCenter,
    className,
    ...props
}: TypographyProps) => {
    return (
        <h2
            className={twMerge(
                typography({ size, weight, tracking, color, textCenter }),
                className
            )}
            {...props}
        >
            {title}
        </h2>
    );
};

export const H3 = ({
    title,
    size = "2xl",
    weight,
    tracking,
    color,
    textCenter,
    className,
    ...props
}: TypographyProps) => {
    return (
        <h3
            className={twMerge(
                typography({ size, weight, tracking, color, textCenter }),
                className
            )}
            {...props}
        >
            {title}
        </h3>
    );
};

export const H4 = ({
    title,
    size = "xl",
    weight,
    tracking,
    color,
    textCenter,
    className,
    ...props
}: TypographyProps) => {
    return (
        <h4
            className={twMerge(
                typography({ size, weight, tracking, color, textCenter }),
                className
            )}
            {...props}
        >
            {title}
        </h4>
    );
};

export const H5 = ({
    title,
    size = "lg",
    weight,
    tracking,
    color,
    textCenter,
    className,
    ...props
}: TypographyProps) => {
    return (
        <h5
            className={twMerge(
                typography({ size, weight, tracking, color, textCenter }),
                className
            )}
            {...props}
        >
            {title}
        </h5>
    );
};

export const H6 = ({
    title,
    size = "base",
    weight,
    tracking,
    color,
    textCenter,
    className,
    ...props
}: TypographyProps) => {
    return (
        <h6
            className={twMerge(
                typography({ size, weight, tracking, color, textCenter }),
                className
            )}
            {...props}
        >
            {title}
        </h6>
    );
};

export const P = ({
    title,
    size = "base",
    weight,
    tracking,
    color,
    textCenter,
    className,
    ...props
}: TypographyProps) => {
    return (
        <p
            className={twMerge(
                typography({ size, weight, tracking, color, textCenter }),
                className
            )}
            {...props}
        >
            {title}
        </p>
    );
};

export const Span = ({
    title,
    size = "base",
    weight,
    tracking,
    color,
    textCenter,
    className,
    ...props
}: TypographyProps) => {
    return (
        <span
            className={twMerge(
                typography({ size, weight, tracking, color, textCenter }),
                className
            )}
            {...props}
        >
            {title}
        </span>
    );
};

export const Typography = {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
    Span
};

export default Typography;
