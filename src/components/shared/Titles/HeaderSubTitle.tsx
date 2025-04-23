import type { ReactNode } from "react";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";

const HeaderSubTitle = ({ title, prefix }: { title?: string; prefix?: ReactNode }) => {
    return (
        <Flex justify="between" align="center" className="w-full h-14">
            <Typography.H5 title={title} weight="medium" tracking="tight" />
            {prefix}
        </Flex>
    );
};

export default HeaderSubTitle;
