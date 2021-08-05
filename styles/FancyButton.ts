import styled from "styled-components";
const Sty_FancyButton = styled.button`
  margin: 2.5rem;
  width: 150px;
  height: 50px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: black;
  background: white;
  border: 2px solid black;
  box-shadow: 5px 5px 0 black, -5px -5px 0 black, -5px 5px 0 black,
    5px -5px 0 black;
  transition: 500ms ease-in-out;

  :hover {
    box-shadow: 20px 5px 0 black, -20px -5px 0 black;
  }

  :focus {
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export { Sty_FancyButton };