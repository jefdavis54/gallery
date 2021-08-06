import styled from "styled-components";
import { Sty_BtnFancy } from "./BtnFancy.sty";

const Sty_BtnFancySmall = styled(Sty_BtnFancy)`
  width: 100px;
  height: 40px;
  font-size: 16px;
  box-shadow: 4px 4px 0 black, -4px -4px 0 black, -4px 4px 0 black,
    4px -4px 0 black;

  :hover {
    box-shadow: 14px 4px 0 black, -14px -4px 0 black;
  }
`;

export { Sty_BtnFancySmall };
