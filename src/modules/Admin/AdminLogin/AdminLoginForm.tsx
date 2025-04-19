import React from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const AdminLoginForm = () => {
    return (
        <form>
            <div className="mb-10 w-full mx-auto">
                <Input label="Username" size="md" radius="md" placeholder="Enter username" />
                <Input
                    type="password"
                    label="Password"
                    size="md"
                    radius="md"
                    placeholder="Enter password"
                />
            </div>

            <Button title="Login" radius="md" size="md" fullWidth />
        </form>
    );
};

export default AdminLoginForm;
