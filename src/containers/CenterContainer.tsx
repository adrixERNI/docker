import { cva, type VariantProps } from "cva";
import React, { type ComponentProps } from "react";
import Container from "./Container";

const centerContainer = cva("w-full max-w-[80rem] mx-auto", {
    variants: {}
});

type BaseCenterContainerProps = ComponentProps<"div">;

interface CenterContainerProps
    extends BaseCenterContainerProps,
        VariantProps<typeof centerContainer> {}

const CenterContainer = ({ children, className, ...props }: CenterContainerProps) => {
    return (
        <Container className="flex items-center justify-center min-h-screen max-w-[30rem] my-auto py-5 lg:pb-20">
            <Container>{children}</Container>
        </Container>
    );
};

export default CenterContainer;
