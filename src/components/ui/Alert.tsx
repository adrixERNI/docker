"use client";

import { Alert as AlertFlowbite } from "flowbite-react";
import React, { useEffect } from "react";
import useAlertStore from "@/stores/useAlertStore";
import Typography from "./Typography";

const types = {
    success: "success",
    danger: "failure",
    warning: "warning",
    info: "info"
};

const Alert = () => {
    const { show, message, type, hideAlert } = useAlertStore();

    useEffect(() => {
        if (show) {
            const timeout = setTimeout(() => {
                hideAlert();
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [show, hideAlert]);

    if (!show) return null;

    return (
        <AlertFlowbite
            color={types[type]}
            onDismiss={hideAlert}
            className="fixed top-5 start-0 end-0 mx-auto w-full max-w-[35rem]"
        >
            <Typography.Span
                title={`${type.charAt(0).toUpperCase()}${type.slice(1, type.length)} Alert! ${message} `}
                weight="medium"
            />
        </AlertFlowbite>
    );
};

export default Alert;
