"use client";

import { useGoogleLogin } from "@react-oauth/google";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import Button from "@/components/ui/Button";
// import Header from "@/components/common/Header";
// import Input from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";
import Typography from "@/components/ui/Typography";
import Container from "@/containers/Container";

function Home() {
    const searchParams = useSearchParams();
    const codeParam = searchParams.get("code");

    const login = useGoogleLogin({
        flow: "auth-code",
        ux_mode: "redirect",
        redirect_uri: "http://localhost:3000",
        onError: (error) => console.log(error)
    });

    const sendTokenToServer = async () => {
        await fetch("http://localhost:5000/auth/google", {
            body: JSON.stringify({ code: "Testing!" }),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
    };

    useEffect(() => {
        if (codeParam) sendTokenToServer();
    }, []);

    return (
        <Container className="flex justify-center items-center">
            <div className="flex flex-col w-full">
                <div className="mx-auto mb-10">
                    <Logo />
                </div>

                <div className="flex py-10">
                    <div className="space-y-4 w-full px-20">
                        <Typography.H3 title="Sign in as trainee" weight="medium" textCenter />
                        <Button
                            variant="outline"
                            icon={<FaGoogle size={20} />}
                            title="Sign in with Google"
                            size="md"
                            radius="full"
                            onClick={() => login()}
                            fullWidth
                        />
                    </div>

                    <div className="w-0.5 h-56 bg-border" />

                    <div className="space-y-4 w-full px-20">
                        <Typography.H3 title="Sign in as mentor" weight="medium" textCenter />
                        <Button
                            variant="outline"
                            icon={<FaGoogle size={20} />}
                            title="Sign in with Google"
                            size="md"
                            radius="full"
                            onClick={() => login()}
                            fullWidth
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Home;

/*
 <Header />
            <Container>
                <div className="flex items-center gap-x-4">
                    <Button title="Primary" size="base" radius="full" onClick={() => login()} />
                    <Button variant="onPrimary" title="On Primary" size="base" radius="full" />
                    <Button variant="outline" title="Outline" size="base" radius="full" />
                    <Button variant="destructive" title="Destructive" size="base" radius="full" />
                    <Button
                        variant="onDestructive"
                        title="On Destructive"
                        size="base"
                        radius="full"
                    />
                    <Button variant="ghost" title="Ghosted" size="base" radius="full" />
                    <Button variant="disabled" title="Disabled" size="base" radius="full" />
                </div>
            </Container>
*/
