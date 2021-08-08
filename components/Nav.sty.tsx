import styled from "styled-components";

const Sty_Nav = styled.header`
  position: fixed;
  right: 0;
  left: 0;
  z-index: 90;
  background-color: hsla(0, 0%, 100%, 0.8);
`;

const Sty_NavRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Sty_NavTitle = styled.div`
  text-align: center;
  font-size: 3.2rem;
  font-weight: 700;
  @media (max-width: 850px) {
    font-size: 2.4rem;
  }
  @media (max-width: 600px) {
    font-size: 1.6rem;
  } ;
`;

export { Sty_Nav, Sty_NavRow, Sty_NavTitle };
