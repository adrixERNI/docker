"use client";

import Flex from "@/components/ui/Flex";
import Logo from "@/components/ui/Logo";
import Container from "@/containers/Container";
import MentorLogin from "@/modules/Mentor/MentorLogin/MentorLogin";
import TraineeLogin from "@/modules/Trainee/TraineeLogin/TraineeLogin";

function Home() {
    return (
        <Container className="flex items-center justify-center min-h-screen py-5 lg:pb-20">
            <Container>
                <Flex justify="center" className="py-4">
                    <Logo />
                </Flex>

                <Flex direction="col" className="flex items-start lg:flex-row py-7">
                    <TraineeLogin />
                    <Flex className="mx-auto max-w-96 w-full lg:w-0.5 h-0.5 lg:h-56 p bg-border my-10 lg:my-0" />
                    <MentorLogin />
                </Flex>
            </Container>
        </Container>
    );
}

export default Home;
