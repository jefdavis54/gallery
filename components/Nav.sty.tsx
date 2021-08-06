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
  font-size: 2rem;
  font-weight: bold;
`;

export { Sty_Nav, Sty_NavRow, Sty_NavTitle };
// <i class="fas fa-home"></i>
// <i class="fas fa-caret-square-left"></i>
