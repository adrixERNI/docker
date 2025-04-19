import Container from "@/containers/Container";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

const Header = () => {
    return (
        <div className="flex justify-between items-center border-b border-border py-3">
            <Container>
                <Logo />

                <div className="flex items-center gap-x-2">
                    <Button title="Get Started" size="base" radius="full" />
                </div>
            </Container>
        </div>
    );
};

export default Header;
