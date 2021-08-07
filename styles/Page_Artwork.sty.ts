import styled from "styled-components";

const Sty_Title = styled.h2`
  font-size: 2.6rem;
  text-align: center;
  margin: 1rem auto 2rem auto;
  @media (max-width: 850px) {
    font-size: 1.8rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  } ;
`;
const Sty_Img = styled.img`
  max-width: 100%;
`;

export { Sty_Img, Sty_Title };
