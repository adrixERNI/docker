import HeaderTitle from "@/components/shared/Titles/HeaderTitle";
import Flex from "@/components/ui/Flex";
import Container from "@/containers/Container";
import TraineeMentorsFeedback from "@/modules/Trainee/TraineeSkills/TraineeMentorsFeedback";
import TraineeMySkills from "@/modules/Trainee/TraineeSkills/TraineeMySkills";

const TraineeSkillsPage = () => {
    return (
        <Container className="pb-10">
            <HeaderTitle title="Skills and Expertise" />

            <Flex direction="col" gap="lg">
                <TraineeMySkills />
                <TraineeMentorsFeedback />
            </Flex>
        </Container>
    );
};

export default TraineeSkillsPage;
