import styled from "styled-components";

const Sty_FilterHeading = styled.h3`
  font-size: 2rem;
  margin-left: 1rem;
  @media (max-width: 850px) {
    font-size: 1.6rem;
  }
`;
const Sty_OneRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.4rem;
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
  font-size: 1.6rem;

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
      background: #888;
    }
    .checkMark {
      opacity: 0;
    }
  }
  .show-on-lowres {
    display: none;
  }
  @media (max-width: 850px) {
    font-size: 1.4rem;
    .hide-on-lowres {
      display: none;
    }
    .show-on-lowres {
      display: inline;
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

const Sty_VisibleWorkCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 1rem;
  margin-bottom: 1.6rem;
`;
const Sty_Pill = styled.span`
  display: flex;
  justify-content: center;
  margin: 0 0.4rem;
  border-radius: 100px;
  width: 3rem;
  background-color: #7e878f;
  color: #cccfe0;
`;
const Sty_PillDark = styled(Sty_Pill)`
  color: #343a41;
`;

export {
  Sty_FilterHeading,
  Sty_OneRow,
  Sty_BtnAll,
  Sty_BtnNone,
  Sty_VisibleWorkCount,
  Sty_Pill,
  Sty_PillDark,
};
