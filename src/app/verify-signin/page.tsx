import Container from "@/containers/Container";
import VerifySignInLoading from "@/modules/Common/VerifySignIn/VerifySignInLoading";

const VerifySignInPage = () => {
    return (
        <Container center className="flex justify-center">
            <VerifySignInLoading />
        </Container>
    );
};

export default VerifySignInPage;
