import { FaFilePdf } from "react-icons/fa6";
import { TbFileUpload } from "react-icons/tb";
import HeaderSubTitle from "@/components/shared/Titles/HeaderSubTitle";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";

const TraineeOverviewResume = () => {
    return (
        <Flex direction="col" gap="lg" className="py-5 md:py-10 px-5 md:px-20">
            <HeaderSubTitle
                title="CV/Resume"
                prefix={
                    <Button
                        icon={<TbFileUpload className="text-lg" />}
                        title="Upload new"
                        variant="outline"
                    />
                }
            />

            <Flex gap="md">
                <Button icon={<FaFilePdf className="text-2xl" />} variant="secondary" size="md">
                    <Typography.H5 title="Download file" weight="medium" tracking="tight" />
                </Button>
                <Button icon={<FaFilePdf className="text-2xl" />} variant="secondary" size="md">
                    <Typography.H5 title="View online" weight="medium" tracking="tight" />
                </Button>
            </Flex>
        </Flex>
    );
};

export default TraineeOverviewResume;
