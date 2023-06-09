import { SlEnvolope, SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
import Anchor from "./anchor";
import Container from "./container";

interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <footer className="border-t border-zinc-400 py-16 transition-[border]  duration-300 dark:border-slate-50/20">
      <Container className="flex items-center justify-between px-2">
        <div className="space-x-4">
          <Anchor
            href="https://www.linkedin.com/in/levi-deang/"
            target="_blank"
            aria-label="View my LinkedIn profile"
            className="inline-block"
          >
            <SlSocialLinkedin className="h-6 w-6" />
          </Anchor>

          <Anchor
            href="https://github.com/levi-ren"
            target="_blank"
            aria-label="View my Github profile"
            className="inline-block"
          >
            <SlSocialGithub className="h-6 w-6" />
          </Anchor>

          <Anchor
            href="mailto:arron.levi1@gmail.com"
            target="_blank"
            aria-label="Email me"
            className="inline-block"
          >
            <SlEnvolope className="h-6 w-6" />
          </Anchor>
        </div>
        © Levi Deang {new Date().getFullYear()}
      </Container>
    </footer>
  );
}
