"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { BiLogoEdge } from "react-icons/bi";

type BaseLogoProps = ComponentProps<"div">;

const Logo = (props: BaseLogoProps) => {
    return (
        <div {...props}>
            <Link href="/">
                <BiLogoEdge size={36} className="text-primary" />
                {/* <Image alt="Logo" src="/linkedout_logo.svg" width={44} height={44} /> */}
            </Link>
        </div>
    );
};

export default Logo;
