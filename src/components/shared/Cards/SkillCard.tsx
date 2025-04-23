import { FaStar } from "react-icons/fa";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";

const SkillCard = ({ title, rating }: { title?: string; rating?: "1" | "2" | "3" | "4" | "5" }) => {
    return (
        <Flex
            direction="col"
            className="gap-2 md:gap-4 border border-border min-w-[9rem] md:min-w-[14rem] min-h-[2.5rem] md:min-h-[7rem] rounded-3xl p-3 md:p-5"
        >
            <Typography.H5 title={title} weight="semibold" />

            <Flex gap="sm">
                {Array.from({ length: Number(rating) }, (_, index) => (
                    <FaStar key={index} className="text-lg md:text-3xl text-yellow-300" />
                ))}
            </Flex>
        </Flex>
    );
};

export default SkillCard;
