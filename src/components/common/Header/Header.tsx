import Container from "@/containers/Container";
import Flex from "../../ui/Flex";
import Logo from "../../ui/Logo";
import HeaderNavbar from "./HeaderNavbar";
import HeaderUserMenu from "./HeaderUserMenu";

const Header = () => {
    return (
        <Flex
            direction="row"
            className="sticky top-0 start-0 end-0 border-b border-border bg-background py-3"
        >
            <Container>
                <Flex direction="row" className="justify-between items-center">
                    <Logo size="sm" />
                    <HeaderNavbar />
                    <HeaderUserMenu />
                </Flex>
            </Container>
        </Flex>
    );
};

export default Header;
