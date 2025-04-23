import { FaStar } from "react-icons/fa";
import Avatar from "@/components/ui/Avatar";
import Card from "@/components/ui/Card";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";

interface MentorFeedbackCardProps {
    name?: string;
    rating?: "1" | "2" | "3" | "4" | "5";
    feedback?: string;
    date?: string;
}

const MentorFeedbackCard = ({ name, rating, feedback, date }: MentorFeedbackCardProps) => {
    return (
        <Card className="w-full md:min-h-[18rem] md:max-w-[21rem]">
            <Flex direction="col">
                <Flex className="gap-3">
                    <Avatar
                        src="/rodel.jpg"
                        fallback="DC"
                        size="md"
                        shape="circle"
                        className="cursor-pointer"
                    />

                    <Flex direction="col" gap="xs">
                        <Typography.Span title={name} weight="medium" size="base" />
                        <Flex>
                            {Array.from({ length: Number(rating) }, (_, index) => (
                                <FaStar key={index} className="text-yellow-300" />
                            ))}
                        </Flex>
                        <Typography.Span title={date} weight="medium" size="base" color="muted" />
                    </Flex>
                </Flex>

                <Flex className="mt-5">
                    <Typography.Span title={feedback} size="base" color="muted" />
                </Flex>
            </Flex>
        </Card>
    );
};

export default MentorFeedbackCard;
