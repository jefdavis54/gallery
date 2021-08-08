import styled from "styled-components";

const Sty_OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 34rem);
  justify-content: center;
  margin: 0 3rem;

  @media (max-width: 1920px) {
    grid-template-columns: repeat(auto-fill, 36rem);
  }
  @media (max-width: 1900px) {
    grid-template-columns: repeat(auto-fill, 34rem);
  } ;
`;

export { Sty_OptionsContainer };
