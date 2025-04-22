import React from "react";
import Container from "@/containers/Container";
import AdminLoginFooter from "@/modules/Admin/AdminLogin/AdminLoginFooter";
import AdminLoginForm from "@/modules/Admin/AdminLogin/AdminLoginForm";
import AdminLoginTitle from "@/modules/Admin/AdminLogin/AdminLoginTitle";

const AdminLoginPage = () => {
    return (
        <Container className="flex items-center justify-center min-h-screen max-w-[30rem] my-auto py-5 lg:pb-20">
            <Container>
                <AdminLoginTitle />
                <AdminLoginForm />
                <AdminLoginFooter />
            </Container>
        </Container>
    );
};

export default AdminLoginPage;
