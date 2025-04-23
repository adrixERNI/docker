import { TiPencil } from "react-icons/ti";
import HeaderSubTitle from "@/components/shared/Titles/HeaderSubTitle";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";

const TraineeOverviewBiography = () => {
    return (
        <Flex direction="col" gap="lg" className="py-3 px-5 md:px-20">
            <HeaderSubTitle
                title="Biography"
                prefix={
                    <Button
                        icon={<TiPencil className="text-lg" />}
                        title="Edit bio"
                        variant="outline"
                    />
                }
            />

            <Typography.P
                title="Si Rodel ay kilala sa kanilang barkadahan bilang mahilig sa chicks. Kahit saan siya magpunta—sa kanto, sa mall, o kahit sa simpleng tambayan—palagi siyang may nakaka-chat o ka-text. Marunong siyang magpakilig at malakas ang karisma, kaya’t hindi na nakapagtataka kung bakit maraming babae ang naaaliw sa kanya. Hindi man siya gwapo sa paningin ng lahat, may kakaiba siyang dating at charm na madaling makuha ang loob ng mga babae. Madalas siyang tuksuhin ng mga kaibigan dahil dito, pero natatawa na lang siya. Para kay Rodel, ang simpleng landi ay bahagi lang ng kanyang masayahing personalidad."
                size="md"
                color="muted"
                className="leading-relaxed"
            />
        </Flex>
    );
};

export default TraineeOverviewBiography;
