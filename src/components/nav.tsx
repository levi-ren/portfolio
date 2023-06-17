import Container from "@/components/container";
import Logo from "@/components/logo";
import Anchor from "./anchor";
import DarkmodeSwitch from "./darkmode-switch";
import { links } from "./links";
import MenuButton from "./menu-button";

interface NavProps {}

export default function Nav(props: NavProps) {
  return (
    <nav className="sticky top-0  z-20 mt-16 px-2 py-4  text-sm shadow-md backdrop-blur dark:text-white dark:shadow-white-md">
      <Container className="flex items-center justify-between ">
        <Anchor href="/" aria-label="Home link">
          <Logo width={40} height={40} className="duration-75" />
        </Anchor>

        <div className="hidden space-x-4 xs:block">
          {links.map((link) => (
            <Anchor key={link.name} href={link.href} aria-label={link.label}>
              {link.name}
            </Anchor>
          ))}
        </div>
        <DarkmodeSwitch />
        <MenuButton />
      </Container>
    </nav>
  );
}
