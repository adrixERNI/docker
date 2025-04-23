import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = ({ className = "", ...props }: CardProps) => {
    return (
        <div
            className={`border border-border rounded-2xl bg-background shadow-xs p-5 ${className}`}
            {...props}
        />
    );
};

export default Card;
