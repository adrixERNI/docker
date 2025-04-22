import React from "react";

type BaseMainContainerProps = React.HTMLAttributes<HTMLDivElement>;

type MainContainerProps = BaseMainContainerProps;

const MainContainer = ({ className, ...props }: MainContainerProps) => {
    return <div className={`min-h-screen w-full px-2 md:px-4 xl:px-0 ${className}`} {...props} />;
};

export default MainContainer;
