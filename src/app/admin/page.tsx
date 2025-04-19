import React from "react";
import Container from "@/containers/Container";
import MainContainer from "@/containers/MainContainer";
import AdminLoginFooter from "@/modules/Admin/AdminLogin/AdminLoginFooter";
import AdminLoginForm from "@/modules/Admin/AdminLogin/AdminLoginForm";
import AdminLoginTitle from "@/modules/Admin/AdminLogin/AdminLoginTitle";

const AdminLoginPage = () => {
    return (
        <MainContainer className="flex items-center justify-center h-screen">
            <Container className="max-w-[30rem] mb-14">
                <AdminLoginTitle />
                <AdminLoginForm />
                <AdminLoginFooter />
            </Container>
        </MainContainer>
    );
};

export default AdminLoginPage;
