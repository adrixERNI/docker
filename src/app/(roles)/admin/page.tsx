import React from "react";
import CenterContainer from "@/containers/CenterContainer";
import AdminLoginFooter from "@/modules/Admin/AdminLogin/AdminLoginFooter";
import AdminLoginForm from "@/modules/Admin/AdminLogin/AdminLoginForm";
import AdminLoginTitle from "@/modules/Admin/AdminLogin/AdminLoginTitle";

const AdminLoginPage = () => {
    return (
        <CenterContainer>
            <AdminLoginTitle />
            <AdminLoginForm />
            <AdminLoginFooter />
        </CenterContainer>
    );
};

export default AdminLoginPage;
