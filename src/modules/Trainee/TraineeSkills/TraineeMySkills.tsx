import { FiPlusCircle } from "react-icons/fi";
import { TiPencil } from "react-icons/ti";
import SkillCard from "@/components/shared/Cards/SkillCard";
import HeaderSubTitle from "@/components/shared/Titles/HeaderSubTitle";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";

const TraineeMySkills = () => {
    return (
        <Flex direction="col">
            <HeaderSubTitle
                title="My Skills"
                prefix={
                    <Button
                        iconRight={<TiPencil className="text-lg" />}
                        title="Edit skills"
                        variant="primary"
                    />
                }
            />

            <Flex className="flex-wrap gap-2 md:gap-4 mt-4">
                <SkillCard title="React" rating="5" />
                <SkillCard title="TypeScript" rating="5" />
                <SkillCard title="Node.js" rating="4" />
                <SkillCard title="GraphQL" rating="3" />
                <SkillCard title="Tailwind CSS" rating="3" />
                <SkillCard title="Next.js" rating="2" />
                <SkillCard title="Redux" rating="2" />
                <SkillCard title="Jest" rating="1" />

                <button className="cursor-pointer hover:bg-muted/5 transition-all duration-200 ease-in-out rounded-3xl">
                    <Flex
                        justify="center"
                        align="center"
                        direction="col"
                        className="gap-2 md:gap-4 border border-border min-w-[9rem] md:min-w-[14rem] min-h-[2.5rem] md:min-h-[7rem] rounded-3xl p-3 md:p-5"
                    >
                        <FiPlusCircle className="text-muted/40 text-4xl" />
                    </Flex>
                </button>
            </Flex>
        </Flex>
    );
};

export default TraineeMySkills;
