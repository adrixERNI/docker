import React from "react";
import Flex from "@/components/ui/Flex";
import Logo from "@/components/ui/Logo";
import Typography from "@/components/ui/Typography";

const AdminLoginTitle = () => {
    return (
        <Flex direction="col" className="mb-6">
            <Flex className="mb-4">
                <Logo />
            </Flex>

            <Typography.H3 title="Admin Login" weight="medium" className="mb-2" />
            <Typography.P
                size="md"
                title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, incidunt!"
                className="text-gray-500"
            />
        </Flex>
    );
};

export default AdminLoginTitle;
