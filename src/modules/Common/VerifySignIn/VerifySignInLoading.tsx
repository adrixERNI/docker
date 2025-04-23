"use client";

import { Spinner } from "flowbite-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";

const VerifySignInLoading = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    const error = searchParams.get("error");

    const sendTokenToServer = async () => {
        const response = await fetch("http://localhost:5000/google/trainee", {
            body: JSON.stringify({ code }),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        // if (response.status === 200) {
        //     router.replace("/home");
        //     return;
        // }

        // if (response.status === 401) {
        //     router.replace("/");
        //     return;
        // }
    };

    useEffect(() => {
        // if (code) sendTokenToServer();
        // if (error || !code) {
        //     router.replace("/");
        //     return;
        // }
    }, []);

    return (
        <Flex direction="col" align="center" justify="center" gap="lg">
            <Spinner size="xl" className="mx-auto" />
            <Typography.Span title="Verifying..." weight="medium" />
        </Flex>
    );
};

export default VerifySignInLoading;
