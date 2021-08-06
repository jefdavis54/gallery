import styled from "styled-components";
import { Sty_BtnFancySmall } from "./BtnFancySmall.sty";

const Sty_BtnFancySmallInverted = styled(Sty_BtnFancySmall)`
  box-shadow: 14px 4px 0 black, -14px -4px 0 black;
  :hover {
    box-shadow: 4px 4px 0 black, -4px -4px 0 black, -4px 4px 0 black,
      4px -4px 0 black;
  }
`;

export { Sty_BtnFancySmallInverted };
