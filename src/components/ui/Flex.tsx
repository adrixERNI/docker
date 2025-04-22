import { cva, type VariantProps } from "cva";
import React, { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const flex = cva("flex", {
    variants: {
        direction: {
            row: "flex-row",
            col: "flex-col",
            "row-reverse": "flex-row-reverse",
            "col-reverse": "flex-col-reverse"
        },
        align: {
            start: "items-start",
            center: "items-center",
            end: "items-end",
            stretch: "items-stretch",
            baseline: "items-baseline"
        },
        justify: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between",
            around: "justify-around",
            evenly: "justify-evenly"
        },
        wrap: {
            no: "flex-nowrap",
            yes: "flex-wrap",
            reverse: "flex-wrap-reverse"
        },
        gap: {
            none: "gap-0",
            xs: "gap-1",
            sm: "gap-2",
            md: "gap-4",
            lg: "gap-6",
            xl: "gap-8"
        }
    },
    defaultVariants: {
        direction: "row",
        align: "start",
        justify: "start",
        wrap: "no",
        gap: "none"
    }
});

type BaseFlexProps = ComponentProps<"div">;

interface FlexProps extends VariantProps<typeof flex>, BaseFlexProps {}

export const Flex = ({
    direction,
    align,
    justify,
    wrap,
    gap,
    className,
    children,
    ...props
}: FlexProps) => {
    return (
        <div
            className={twMerge(flex({ direction, align, justify, wrap, gap }), className)}
            {...props}
        >
            {children}
        </div>
    );
};

export default Flex;
