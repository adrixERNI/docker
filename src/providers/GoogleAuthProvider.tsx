"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { type ReactNode } from "react";

const GoogleAuthProvider = ({ children }: { children: ReactNode }) => {
    return (
        <GoogleOAuthProvider clientId="339441856645-jf9nru5ebh3949f4cq35kpb3vv96j2f3.apps.googleusercontent.com">
            {children}
        </GoogleOAuthProvider>
    );
};

export default GoogleAuthProvider;
