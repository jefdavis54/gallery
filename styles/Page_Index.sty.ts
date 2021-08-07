import styled from "styled-components";

const Sty_Container = styled.div`
  padding: 0 1rem;
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
  margin-bottom: 1.6rem;

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
  height: 10rem;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

const Sty_LinkBlock = styled.div`
  margin-bottom: 1.6rem;
`;

const Sty_Title = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 2.4rem;
`;

export {
  Sty_Container,
  Sty_Main,
  Sty_PictureBlock,
  Sty_Footer,
  Sty_Title,
  Sty_LinkBlock,
};
