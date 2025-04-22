"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import Logo from "@/components/ui/Logo";
import Typography from "@/components/ui/Typography";

const PendingVerification = () => {
    const router = useRouter();

    return (
        <Flex direction="col" align="center" justify="center" gap="xl">
            <Logo />

            <Flex direction="col" align="center" gap="md">
                <Typography.H2 title="Pending Verification" size="3xl" weight="bold" textCenter />
                <Typography.P
                    title="Your account is currently under review. Thank you for your patience!"
                    color="muted"
                    size="lg"
                    textCenter
                />
            </Flex>

            <Image src="/waiting.png" alt="Dude waiting endlessly" width={100} height={200} />

            <Button
                title="I understand"
                size="md"
                variant="primary"
                onClick={() => router.push("/")}
            />
        </Flex>
    );
};

export default PendingVerification;
