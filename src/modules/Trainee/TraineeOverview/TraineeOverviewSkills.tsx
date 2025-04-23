import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import HeaderSubTitle from "@/components/shared/Titles/HeaderSubTitle";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";

const TraineeOverviewSkills = () => {
    return (
        <Flex direction="col" gap="lg" className="py-5 md:py-10 px-5 md:px-20">
            <HeaderSubTitle
                title="Skills"
                prefix={
                    <Link href="/trainee/skills">
                        <Button
                            iconRight={<FaLongArrowAltRight className="text-lg" />}
                            title="View skills"
                            variant="outline"
                        />
                    </Link>
                }
            />

            <Flex gap="sm" className="flex-wrap">
                <Badge variant="outline" size="lg" radius="lg">
                    C#
                    <Flex className="ms-1">
                        <FaStar className="text-yellow-200 mb-0.5" />
                        <FaStar className="text-yellow-200 mb-0.5" />
                    </Flex>
                </Badge>

                <Badge variant="outline" size="lg" radius="lg">
                    ReactJS
                    <Flex className="ms-1">
                        <FaStar className="text-yellow-200 mb-0.5" />
                        <FaStar className="text-yellow-200 mb-0.5" />
                        <FaStar className="text-yellow-200 mb-0.5" />
                    </Flex>
                </Badge>

                <Badge variant="outline" size="lg" radius="lg">
                    Typescript
                    <Flex className="ms-1">
                        <FaStar className="text-yellow-200 mb-0.5" />
                        <FaStar className="text-yellow-200 mb-0.5" />
                        <FaStar className="text-yellow-200 mb-0.5" />
                        <FaStar className="text-yellow-200 mb-0.5" />
                    </Flex>
                </Badge>
                <Badge variant="outline" size="lg" radius="lg">
                    NodeJS
                    <Flex className="ms-1">
                        <FaStar className="text-yellow-200 mb-0.5" />
                        <FaStar className="text-yellow-200 mb-0.5" />
                        <FaStar className="text-yellow-200 mb-0.5" />
                        <FaStar className="text-yellow-200 mb-0.5" />
                        <FaStar className="text-yellow-200 mb-0.5" />
                    </Flex>
                </Badge>
            </Flex>
        </Flex>
    );
};

export default TraineeOverviewSkills;
