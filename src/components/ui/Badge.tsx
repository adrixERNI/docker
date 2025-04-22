import { cva, type VariantProps } from "cva";
import React from "react";

const badge = cva("inline-flex items-center font-medium", {
    variants: {
        variant: {
            primary: "bg-primary text-background",
            secondary: "bg-secondary text-background",
            success: "bg-green-500 text-white",
            warning: "bg-yellow-400 text-black",
            destructive: "bg-destructive text-white",
            outline: "border border-border text-foreground"
        },
        size: {
            sm: "text-xs px-2 py-0.5",
            base: "text-sm px-2.5 py-1",
            md: "text-base px-3 py-1.5",
            lg: "text-lg px-4 py-2"
        },
        radius: {
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            full: "rounded-full"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "base",
        radius: "md"
    }
});

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badge>;

const Badge = ({ variant, size, radius, className, ...props }: BadgeProps) => {
    return <span className={badge({ variant, size, radius, className })} {...props} />;
};

export default Badge;
