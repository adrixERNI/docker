"use client";

import { Spinner } from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Typography from "@/components/ui/Typography";
import useAlertStore from "@/stores/useAlertStore";
import Avatar from "../../ui/Avatar";
import { Dropdown, DropdownHeader, DropdownItem, DropdownDivider } from "../../ui/Dropdown";

const HeaderUserMenu = () => {
    const router = useRouter();
    const pathname = usePathname();
    const alert = useAlertStore();

    const [setIsSigningOut, setIsSigningOutsetIsSigningOut] = useState(false);

    const handleSignOut = () => {
        setIsSigningOutsetIsSigningOut(true);
        console.log("pathname", pathname);

        const signOutMessage = () => {
            alert.showAlert({
                type: "success",
                message: "Signed out 😔."
            });
        };

        setTimeout(() => {
            signOutMessage();
            setIsSigningOutsetIsSigningOut(false);
        }, 1000);

        router.push("/");
    };

    return (
        <Dropdown
            label={
                <Avatar
                    src="/rodel.jpg"
                    fallback="DC"
                    size="md"
                    shape="circle"
                    className="cursor-pointer"
                />
            }
        >
            <DropdownHeader>
                <Typography.Span title="Rodel Crisosto" weight="medium" className="block" />
                <Typography.Span
                    title="rodel.crisosto7@gmail.com"
                    color="muted"
                    className="block"
                />
            </DropdownHeader>

            <DropdownItem>
                <Typography.Span title="Profile" />
            </DropdownItem>

            <DropdownDivider />

            <DropdownItem className="flex gap-x-3 items-center" onClick={handleSignOut}>
                <Typography.Span title="Sign out" color="destructive" />
                {setIsSigningOut && <Spinner size="sm" />}
            </DropdownItem>
        </Dropdown>
    );
};

export default HeaderUserMenu;
