import Image from "next/image";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";

const TraineeOverviewProfileImage = () => {
    return (
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
                    <Typography.H6
                        size="md"
                        title="Bootcamp Trainee"
                        weight="medium"
                        color="muted"
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default TraineeOverviewProfileImage;
