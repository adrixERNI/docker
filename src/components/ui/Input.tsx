"use client";

import { cva, type VariantProps } from "cva";
import React, { useState, type ComponentProps } from "react";
import { PiWarningCircleBold } from "react-icons/pi";
import { TbEyeClosed, TbEye } from "react-icons/tb";

const input = cva("w-full", {
    variants: {
        variant: {
            default: `bg-muted-100/10 dark:bg-muted-100/5 border border-muted-100 dark:border-muted-100/10 text-foreground text-base
                      dark:focus:ring-3 dark:focus:ring-primary focus:outline-primary dark:outline-0 focus:border-primary block`
        },
        size: {
            base: "py-2 px-2.5",
            md: "py-3 px-4"
        },
        radius: {
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            full: "rounded-full"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "base",
        radius: "xl"
    },
    compoundVariants: [
        {
            variant: "default",
            size: "base",
            radius: "md"
        }
    ]
});

type BaseInputProps = Omit<ComponentProps<"input">, "size">;

interface InputProps extends VariantProps<typeof input>, BaseInputProps {
    label?: string;
    errorMessage?: string;
}

const Input = ({ variant, size, radius, label, errorMessage, type, ...props }: InputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleTogglePassword = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    return (
        <div className="mb-3">
            {label && (
                <label
                    htmlFor={label}
                    className="block mb-2 text-base font-medium text-foreground w-max"
                >
                    {label}
                </label>
            )}

            <div className="relative">
                <input
                    id={label}
                    type={isPasswordVisible ? "text" : type}
                    className={input({ variant, size, radius })}
                    {...props}
                />

                {type === "password" && (
                    <>
                        <button
                            tabIndex={-1}
                            type="button"
                            className="absolute flex justify-center items-center right-0 top-0 bottom-0 cursor-pointer pr-5 pt-0.5"
                            onClick={handleTogglePassword}
                        >
                            {isPasswordVisible ? <TbEyeClosed size={20} /> : <TbEye size={20} />}
                        </button>
                    </>
                )}
            </div>

            <div className="mt-1">
                {errorMessage && (
                    <span className="flex gap-x-1 items-center text-sm text-destructive">
                        <PiWarningCircleBold />
                        {errorMessage}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Input;
