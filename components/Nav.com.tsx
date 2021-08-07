import {
  Sty_FancyAnchorSmallInverted,
  Sty_FancyBtnSmallInverted,
} from "../styles/FancyLinkOptions.sty";
import { useRouter } from "next/router";
import { Sty_NavRow, Sty_Nav, Sty_NavTitle } from "./Nav.sty";
import Link from "next/link";

const Nav = () => {
  const router = useRouter();
  const handleClickGoBack = (e: any) => {
    e.preventDefault();
    router.back();
  };
  return (
    <div>
      <Sty_Nav>
        <Sty_NavRow>
          <Link href="/" passHref>
            <Sty_FancyAnchorSmallInverted>Home</Sty_FancyAnchorSmallInverted>
          </Link>
          <Sty_NavTitle>Strorm Gallery</Sty_NavTitle>
          <Sty_FancyBtnSmallInverted onClick={handleClickGoBack}>
            Go Back
          </Sty_FancyBtnSmallInverted>
        </Sty_NavRow>
        <div className="sticky-track">
          <div className="sticky-progress"></div>
        </div>
      </Sty_Nav>
    </div>
  );
};

export { Nav };
