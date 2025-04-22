"use client";

import { cva, type VariantProps } from "cva";
import Image from "next/image";
import { useState } from "react";

const avatar = cva(
    "relative inline-flex items-center justify-center overflow-hidden bg-muted text-foreground",
    {
        variants: {
            size: {
                sm: "w-8 h-8 text-sm",
                md: "w-10 h-10 text-base",
                lg: "w-14 h-14 text-lg",
                xl: "w-20 h-20 text-xl"
            },
            shape: {
                circle: "rounded-full",
                rounded: "rounded-lg",
                square: "rounded-none"
            }
        },
        defaultVariants: {
            size: "md",
            shape: "circle"
        }
    }
);

interface AvatarProps extends VariantProps<typeof avatar> {
    src?: string;
    alt?: string;
    fallback?: string;
    className?: string;
}

const Avatar = ({ src, alt, fallback, size, shape, className }: AvatarProps) => {
    const [isImageLoaded, setIsImageLoaded] = useState(true);

    return (
        <div className={`${avatar({ size, shape })} ${className}`}>
            {src && isImageLoaded ? (
                <Image
                    src={src}
                    alt={alt || "Avatar"}
                    fill
                    className="object-cover"
                    onError={() => setIsImageLoaded(false)}
                    sizes="100%"
                />
            ) : (
                <span className="w-full h-full flex items-center justify-center">{fallback}</span>
            )}
        </div>
    );
};

export default Avatar;
