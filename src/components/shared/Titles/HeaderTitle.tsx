import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";

const HeaderTitle = ({ title }: { title?: string }) => {
    return (
        <Flex align="center" gap="lg" className="my-10">
            <Flex className="w-1 h-10 bg-primary" />
            <Typography.H2 title={title} weight="medium" tracking="tight" />
        </Flex>
    );
};

export default HeaderTitle;
