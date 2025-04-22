import Image from "next/image";
import { FaFilePdf } from "react-icons/fa6";
import { TbFileUpload } from "react-icons/tb";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";
import Container from "@/containers/Container";
import { TiPencil } from "react-icons/ti";
import Badge from "@/components/ui/Badge";
import { FaStar } from "react-icons/fa";

const OverviewPage = () => {
    return (
        <Container>
            <Flex align="center" gap="lg" className="my-10">
                <Flex className="w-1 h-10 bg-primary" />
                <Typography.H2 title="Overview - Batch 2025" weight="medium" tracking="tighter" />
            </Flex>

            <Flex direction="col" align="center">
                <Flex direction="col" align="center" gap="lg">
                    <button className="h-[12rem] w-[12rem] rounded-full bg-muted ring-4 ring-offset-3 ring-primary dark:ring-primary-400 cursor-pointer hover:brightness-110 overflow-hidden">
                        <Image
                            alt="Profile Picture"
                            src="/rodel.jpg"
                            width={0}
                            height={0}
                            className="w-full h-full object-cover"
                            sizes="100%"
                        />
                    </button>
                    <Flex direction="col" align="center" gap="sm">
                        <Typography.H2 title="Rodel Crisosto" weight="semibold" tracking="tight" />
                        <Typography.H6 title="Chicks Enthusiast" weight="medium" color="muted" />
                    </Flex>
                </Flex>
            </Flex>

            <Flex direction="col" gap="lg" className="py-5 md:py-10 px-5 md:px-20">
                <Flex justify="between" align="center" className="w-full">
                    <Typography.H5 title="CV/Resume" weight="medium" tracking="tight" />
                    <Button
                        icon={<TbFileUpload className="text-lg" />}
                        title="Upload new"
                        variant="outline"
                    />
                </Flex>

                <Flex gap="md">
                    <Button icon={<FaFilePdf className="text-2xl" />} variant="secondary" size="md">
                        <Typography.H5 title="Download file" weight="medium" tracking="tight" />
                    </Button>
                    <Button icon={<FaFilePdf className="text-2xl" />} variant="secondary" size="md">
                        <Typography.H5 title="View online" weight="medium" tracking="tight" />
                    </Button>
                </Flex>
            </Flex>

            <Flex direction="col" gap="lg" className="py-5 md:py-10 px-5 md:px-20">
                <Flex justify="between" align="center" className="w-full">
                    <Typography.H5 title="Biography" weight="medium" tracking="tight" />
                    <Button
                        icon={<TiPencil className="text-lg" />}
                        title="Edit bio"
                        variant="outline"
                    />
                </Flex>

                <Typography.P
                    title="Si Rodel ay kilala sa kanilang barkadahan bilang mahilig sa chicks. Kahit saan siya magpunta—sa kanto, sa mall, o kahit sa simpleng tambayan—palagi siyang may nakaka-chat o ka-text. Marunong siyang magpakilig at malakas ang karisma, kaya’t hindi na nakapagtataka kung bakit maraming babae ang naaaliw sa kanya. Hindi man siya gwapo sa paningin ng lahat, may kakaiba siyang dating at charm na madaling makuha ang loob ng mga babae. Madalas siyang tuksuhin ng mga kaibigan dahil dito, pero natatawa na lang siya. Para kay Rodel, ang simpleng landi ay bahagi lang ng kanyang masayahing personalidad."
                    size="md"
                    color="muted"
                    className="leading-relaxed"
                />
            </Flex>

            <Flex direction="col" gap="lg" className="py-5 md:py-10 px-5 md:px-20">
                <Flex justify="between" align="center" className="w-full">
                    <Typography.H5 title="Skills" weight="medium" tracking="tight" />
                    <Button
                        icon={<TiPencil className="text-lg" />}
                        title="Edit skills"
                        variant="outline"
                    />
                </Flex>

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
        </Container>
    );
};

export default OverviewPage;
