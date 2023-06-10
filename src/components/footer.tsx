import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import Anchor from "./anchor";
import Container from "./container";

interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <footer className="border-t dark:border-slate-50/20 border-slate-200 py-16">
      <Container className="flex items-center justify-between px-2">
        <div className="space-x-4">
          <Anchor
            href="https://www.linkedin.com/in/levi-deang/"
            target="_blank"
            aria-label="View my LinkedIn profile"
            className="inline-block"
          >
            <SlSocialLinkedin className="h-6 w-6 inlin" />
          </Anchor>

          <Anchor
            href="https://github.com/levi-ren"
            target="_blank"
            aria-label="View my Github profile"
            className="inline-block"
          >
            <VscGithubAlt className="h-6 w-6 inlin" />
          </Anchor>
        </div>
        Levi Deang © {new Date().getFullYear()}
      </Container>
    </footer>
  );
}
