"use client";

import { cva, type VariantProps } from "cva";
import Link from "next/link";
import type { ComponentProps } from "react";
import { BiLogoEdge } from "react-icons/bi";

const logoSize = cva("", {
    variants: {
        size: {
            sm: "w-[35px] h-[35px] aspect-square",
            base: "w-[44px] h-[44px] aspect-square",
            md: "w-[55px] h-[55px] aspect-square"
        }
    },
    defaultVariants: {
        size: "base"
    }
});

type BaseLogoProps = ComponentProps<"div"> & VariantProps<typeof logoSize>;

const Logo = ({ size, ...props }: BaseLogoProps) => {
    return (
        <Link href="/">
            <div {...props} className={logoSize({ size })}>
                <BiLogoEdge size="100%" className="text-primary dark:text-primary-300" />
            </div>
        </Link>
    );
};

export default Logo;

{
    /* <Image alt="Logo" src="/linkedout_logo.svg" width={44} height={44} /> */
}
