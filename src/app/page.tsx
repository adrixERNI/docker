"use client";

import Flex from "@/components/ui/Flex";
import Logo from "@/components/ui/Logo";
import Container from "@/containers/Container";
import MainContainer from "@/containers/MainContainer";
import MentorLogin from "@/modules/Mentor/MentorLogin";
import TraineeLogin from "@/modules/Trainee/TraineeLogin/TraineeLogin";

function Home() {
    return (
        <MainContainer>
            <Container center>
                <Logo className="mx-auto w-max mb-10" />
                <Flex className="py-10">
                    <TraineeLogin />
                    <Flex className="w-0.5 h-56 bg-border" />
                    <MentorLogin />
                </Flex>
            </Container>
        </MainContainer>
    );
}

export default Home;
