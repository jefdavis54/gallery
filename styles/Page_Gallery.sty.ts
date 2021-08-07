import styled from "styled-components";

const Sty_LabelFilterHeading = styled.h3`
  margin-left: 1rem;
`;
const Sty_OneRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  button {
    margin-left: 1rem;
  }
`;

// Based on ToggleSwitch Component
const Sty_BtnNone = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  border-radius: 100px;
  font-weight: 700;
  font-size: 1rem;

  .toggle-indicator {
    align-items: center;
    margin-right: 6px;
    background: #7a0000;
    border-radius: 24px;
    display: flex;
    height: 24px;
    justify-content: center;
    outline: solid 2px transparent;
    width: 24px;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    .toggle-indicator {
      background: grey;
    }
    .checkMark {
      opacity: 0;
    }
  }
`;
const Sty_BtnAll = styled(Sty_BtnNone)`
  .toggle-indicator {
    background: #119e04;
  }
  .checkMark {
    fill: #fff;
    height: 20px;
    width: 20px;
    opacity: 1;
  }
`;

export { Sty_LabelFilterHeading, Sty_OneRow, Sty_BtnAll, Sty_BtnNone };
