"use client";

import { Spinner } from "flowbite-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Container from "@/containers/Container";
import MainContainer from "@/containers/MainContainer";

const VerifySignInPage = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const codeToken = searchParams.get("code");

    const sendTokenToServer = async () => {
        const response = await fetch("http://localhost:5000/auth/google", {
            body: JSON.stringify({ code: codeToken }),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.status === 200) {
            router.replace("/home");
            return;
        }

        if (response.status === 401) {
            router.replace("/");
            return;
        }
    };

    useEffect(() => {
        if (codeToken) sendTokenToServer();
    }, []);

    return (
        <MainContainer>
            <Container center className="flex justify-center">
                <Spinner size="xl" className="mx-auto" />
            </Container>
        </MainContainer>
    );
};

export default VerifySignInPage;
