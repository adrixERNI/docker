import { cva, type VariantProps } from "cva";
import React, { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const container = cva("w-full max-w-[80rem] mx-auto", {
    variants: {}
});

type BaseContainerProps = ComponentProps<"div">;

interface ContainerProps extends BaseContainerProps, VariantProps<typeof container> {}

const Container = ({ className, ...props }: ContainerProps) => {
    return <div className={`${twMerge(container({}), className)}`} {...props} />;
};

export default Container;
