"use client";

import { useGoogleLogin } from "@react-oauth/google";
import { BiLogoEdge } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";

const MentorLogin = () => {
    const login = useGoogleLogin({
        flow: "auth-code",
        ux_mode: "redirect",
        redirect_uri: "http://localhost:3000/verify-signin",
        onError: (error) => console.log(error)
    });

    return (
        <Flex direction="col" align="center" className="space-y-4 w-full px-5 md:px-20">
            <Typography.H3 title="Sign in as mentor" weight="medium" textCenter className="mb-10" />

            <Button
                icon={<BiLogoEdge size={20} />}
                title="Single Sign On"
                size="md"
                radius="full"
                onClick={() => login()}
                fullWidth
            />
            <Button
                variant="outline"
                icon={<FaGoogle size={20} />}
                title="Sign in with Google"
                size="md"
                radius="full"
                onClick={() => login()}
                fullWidth
            />

            <Typography.P
                title="By logging in, you agree to our Terms of Service and Privacy Policy, and acknowledge that your data may be used to improve our services."
                color="muted"
                textCenter
            />
        </Flex>
    );
};

export default MentorLogin;
