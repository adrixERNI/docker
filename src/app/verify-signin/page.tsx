import Container from "@/containers/Container";
import VerifySignInLoading from "@/modules/Common/VerifySignIn/VerifySignInLoading";

const VerifySignInPage = () => {
    return (
        <Container className="flex items-center justify-center min-h-screen py-5 lg:pb-20">
            <Container>
                <VerifySignInLoading />
            </Container>
        </Container>
    );
};

export default VerifySignInPage;
