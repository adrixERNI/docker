"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { SiLinkedin } from "react-icons/si";

type BaseLogoProps = ComponentProps<"div">;

const Logo = (props: BaseLogoProps) => {
    return (
        <div {...props}>
            <Link href="/">
                <SiLinkedin size={36} className="text-primary" />
                {/* <Image alt="Logo" src="/linkedout_logo.svg" width={44} height={44} /> */}
            </Link>
        </div>
    );
};

export default Logo;
