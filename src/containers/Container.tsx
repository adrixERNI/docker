import { cva } from "cva";
import React, { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const container = cva("w-full max-w-[80rem] mx-auto");

type BaseContainerProps = ComponentProps<"div">;

type ContainerProps = BaseContainerProps;

const Container = ({ className, ...props }: ContainerProps) => {
    return <div className={twMerge(container(), className)} {...props} />;
};

export default Container;
