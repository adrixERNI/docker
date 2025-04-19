"use client";

import { Auth0Provider } from "@auth0/auth0-react";
import { useEffect, useState, type ReactNode } from "react";

const SSOAuthProvider = ({ children }: { children: ReactNode }) => {
    const [origin, setOrigin] = useState<string>("");

    useEffect(() => {
        setOrigin(window.location.origin);
    }, []);

    return (
        <Auth0Provider
            domain="dev-d4ao8h2c70m4dxkf.us.auth0.com"
            clientId="TJMiwwCoFS2et4p6aw59d0NT1eElX6DS"
            authorizationParams={{
                redirect_uri: "http://localhost:3000",
                audience: "http://localhost:5000"
            }}
        >
            {children}
        </Auth0Provider>
    );
};

export default SSOAuthProvider;
