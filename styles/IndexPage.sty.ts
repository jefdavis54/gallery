import styled from "styled-components";

const Sty_Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Sty_Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0 0 0;
  text-align: center;
`;

const Sty_PictureBlock = styled.div`
  padding: 0;

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    border: 1px solid #a7acc8;
  }
`;

const Sty_Footer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

const Sty_Title = styled.h1``;

export { Sty_Container, Sty_Main, Sty_PictureBlock, Sty_Footer, Sty_Title };
