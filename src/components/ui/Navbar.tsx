"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";
import Flex from "../ui/Flex";
import Typography from "../ui/Typography";

interface NavbarProps {
    children: ReactNode;
    gap?: ComponentProps<typeof Flex>["gap"];
    className?: string;
}

export const Navbar = ({ children, gap = "lg", className }: NavbarProps) => {
    return (
        <Flex gap={gap} className={className}>
            {children}
        </Flex>
    );
};

interface NavbarLinkProps {
    href: string;
    title: string;
    weight?: ComponentProps<typeof Typography.Span>["weight"];
}

export const NavbarLink = ({ href, title }: NavbarLinkProps) => {
    const currentPathname = usePathname();

    return (
        <Link href={href}>
            <Typography.Span
                title={title}
                className={
                    currentPathname === href
                        ? "text-primary-400 font-semibold hover:text-primary-300"
                        : "text-muted font-medium hover:text-muted-400"
                }
            />
        </Link>
    );
};
