import Container from "@/components/container";
import Logo from "@/components/logo";
import Anchor from "./anchor";
import DarkmodeSwitch from "./darkmode-switch";
import { links } from "./links";
import MenuButton from "./menu-button";

interface NavProps {}

export default function Nav(props: NavProps) {
  return (
    <nav className="py-4 px-2  dark:text-white backdrop-blur shadow-md dark:shadow-white-md  text-sm sticky top-0 z-20 mt-16">
      <Container className="flex justify-between items-center ">
        <Anchor href="/" aria-label="Home link">
          <Logo width={40} height={40} className="duration-75" />
        </Anchor>

        <div className="space-x-4 hidden xs:block">
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
