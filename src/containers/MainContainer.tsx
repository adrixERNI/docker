import React from "react";

type BaseMainContainerProps = React.HTMLAttributes<HTMLDivElement>;

type MainContainerProps = BaseMainContainerProps;

const MainContainer = ({ className, ...props }: MainContainerProps) => {
    return <div className={`min-h-screen w-screen px-4 md:px-2 xl:px-0 ${className}`} {...props} />;
};

export default MainContainer;
