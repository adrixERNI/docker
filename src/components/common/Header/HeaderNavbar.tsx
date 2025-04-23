import { Navbar, NavbarLink } from "../../ui/Navbar";

const HeaderNavbar = () => {
    return (
        <Navbar className="hidden lg:flex">
            <NavbarLink href="/trainee/overview" title="Overview" weight="medium" />
            <NavbarLink href="/trainee/skills" title="Skills" />
            <NavbarLink href="/trainee/projects" title="Projects" />
            <NavbarLink href="/trainee/certifications" title="Certifications" />
        </Navbar>
    );
};

export default HeaderNavbar;
