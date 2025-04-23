import HeaderTitle from "@/components/shared/Titles/HeaderTitle";
import Container from "@/containers/Container";
import TraineeOverviewBiography from "@/modules/Trainee/TraineeOverview/TraineeOverviewBiography";
import TraineeOverviewProfileImage from "@/modules/Trainee/TraineeOverview/TraineeOverviewProfileImage";
import TraineeOverviewResume from "@/modules/Trainee/TraineeOverview/TraineeOverviewResume";
import TraineeOverviewSkills from "@/modules/Trainee/TraineeOverview/TraineeOverviewSkills";

const TraineeOverviewPage = () => {
    return (
        <Container>
            <HeaderTitle title="Overview - Batch 2025" />
            <TraineeOverviewProfileImage />
            <TraineeOverviewResume />
            <TraineeOverviewBiography />
            <TraineeOverviewSkills />
        </Container>
    );
};

export default TraineeOverviewPage;
