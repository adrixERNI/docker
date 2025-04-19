import { cva, type VariantProps } from "cva";
import React, { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const container = cva("w-full max-w-[80rem] mx-auto", {
    variants: {}
});

type BaseContainerProps = ComponentProps<"div">;

interface ContainerProps extends BaseContainerProps, VariantProps<typeof container> {
    center?: boolean;
}

const Container = ({ center, className, ...props }: ContainerProps) => {
    if (center) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <div className={twMerge(container({}), className)} {...props} />
            </div>
        );
    }

    return <div className={twMerge(container({}), className)} {...props} />;
};

export default Container;
