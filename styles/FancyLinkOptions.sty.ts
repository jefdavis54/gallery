import styled from "styled-components";

const Sty_FancyAnchor = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 10px 30px;
  width: 150px;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
  color: black;
  background: white;
  border: 2px solid black;
  box-shadow: 5px 5px 0 black, -5px -5px 0 black, -5px 5px 0 black,
    5px -5px 0 black;
  transition: 250ms ease-in-out;

  :hover {
    box-shadow: 20px 4px 0 black, -20px -4px 0 black;
  }
`;
const Sty_FancyAnchorSmall = styled(Sty_FancyAnchor)`
  width: 100px;
  height: 40px;
  font-size: 18px;
  box-shadow: 4px 4px 0 black, -4px -4px 0 black, -4px 4px 0 black,
    4px -4px 0 black;

  :hover {
    box-shadow: 14px 4px 0 black, -14px -4px 0 black;
  }
`;
const Sty_FancyAnchorSmallInverted = styled(Sty_FancyAnchor)`
  width: 100px;
  height: 40px;
  font-size: 18px;
  box-shadow: 14px 4px 0 black, -14px -4px 0 black;

  :hover {
    box-shadow: 4px 4px 0 black, -4px -4px 0 black, -4px 4px 0 black,
      4px -4px 0 black;
  }
  @media (max-width: 600px) {
    width: 80px;
    height: 30px;
    font-size: 14px;
    box-shadow: 10px 4px 0 black, -10px -4px 0 black;
  }
`;
const Sty_FancyBtnSmallInverted = styled.button`
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  font-size: 18px;
  box-shadow: 14px 4px 0 black, -14px -4px 0 black;
  cursor: pointer;
  margin: 10px 30px;
  font-weight: 700;
  color: black;
  background: white;
  border: 2px solid black;
  transition: 250ms ease-in-out;

  :hover {
    box-shadow: 4px 4px 0 black, -4px -4px 0 black, -4px 4px 0 black,
      4px -4px 0 black;
  }
  @media (max-width: 600px) {
    width: 80px;
    height: 30px;
    font-size: 14px;
    box-shadow: 10px 4px 0 black, -10px -4px 0 black;
  }
`;
export {
  Sty_FancyAnchor,
  Sty_FancyAnchorSmall,
  Sty_FancyAnchorSmallInverted,
  Sty_FancyBtnSmallInverted,
};
