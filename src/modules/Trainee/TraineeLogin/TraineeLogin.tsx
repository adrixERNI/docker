"use client";

import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";

const TraineeLogin = () => {
    const login = useGoogleLogin({
        flow: "auth-code",
        ux_mode: "redirect",
        redirect_uri: "http://localhost:3000/verify-signin",
        onError: (error) => console.log(error)
    });

    return (
        <Flex direction="col" align="center" className="space-y-4 w-full px-20">
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
        </Flex>
    );
};

export default TraineeLogin;
