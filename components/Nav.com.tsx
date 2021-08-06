import { Sty_BtnFancySmallInverted } from "../styles/BtnFancySmallInverted.sty";
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
          <Sty_BtnFancySmallInverted>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Sty_BtnFancySmallInverted>
          <Sty_NavTitle>Strorm Gallery</Sty_NavTitle>
          <Sty_BtnFancySmallInverted onClick={handleClickGoBack}>
            Go Back
          </Sty_BtnFancySmallInverted>
        </Sty_NavRow>
        <div className="sticky-track">
          <div className="sticky-progress"></div>
        </div>
      </Sty_Nav>
    </div>
  );
};

export { Nav };
