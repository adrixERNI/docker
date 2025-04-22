import Container from "@/containers/Container";
import PendingVerification from "@/modules/Common/PendingVerification/PendingVerification";

const PendingVerificationPage = () => {
    return (
        <Container className="flex items-center justify-center h-screen pb-20">
            <Container>
                <PendingVerification />
            </Container>
        </Container>
    );
};

export default PendingVerificationPage;
