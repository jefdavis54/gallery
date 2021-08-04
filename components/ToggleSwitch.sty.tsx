import styled from "styled-components";

const indicatorSize = 24;
const speed = "0.5s";

const Sty_Toggle = styled.label`
  // Toggle specific styles
  align-items: center;
  border-radius: 100px;
  display: flex;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 16px;
  margin-right: 0.5rem;
  width: 360px;

  /* &:last-of-type {
    margin-right: 0;
  } */

  &:hover {
    background-color: grey;
  }

  // Since we can't style the checkbox directly, we "hide" it so we can draw the toggle.
  .toggle__input {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;

    // This style sets the focus ring. The ":not([disabled])" prevents the focus ring from creating a flash when the element is clicked.
    &:not([disabled]):active + .toggle-track,
    &:not([disabled]):focus + .toggle-track {
      border: 1px solid transparent;
      box-shadow: 0px 0px 0px 2px #000;
    }

    &:disabled + .toggle-track {
      cursor: not-allowed;
      opacity: 0.7;
      .toggle-indicator {
        background: #333;
      }
    }
  }

  .toggle-track {
    background: #f2f2f2;
    border: 1px solid #a6a6a6;
    border-radius: 100px;
    cursor: pointer;
    display: flex;
    height: ${indicatorSize + 6}px;
    margin-right: 12px;
    position: relative;
    width: ${indicatorSize * 2.5}px;
  }

  .toggle-indicator {
    align-items: center;
    background: #7a0000;
    border-radius: ${indicatorSize}px;
    bottom: 2px;
    display: flex;
    height: ${indicatorSize}px;
    justify-content: center;
    left: 2px;
    outline: solid 2px transparent;
    position: absolute;
    transition: ${speed};
    width: ${indicatorSize}px;
  }

  // The check mark is optional
  .checkMark {
    fill: #fff;
    height: ${indicatorSize - 4}px;
    width: ${indicatorSize - 4}px;
    opacity: 0;
    transition: opacity ${speed} ease-in-out;
  }

  .toggle__input:checked + .toggle-track .toggle-indicator {
    background: #119e04;
    transform: translateX(${indicatorSize + 3}px);

    .checkMark {
      opacity: 1;
      transition: opacity ${speed} ease-in-out;
    }
  }

  input {
    max-width: 4rem;
  }

  @media screen and (-ms-high-contrast: active) {
    .toggle-track {
      border-radius: 0;
    }
  }
`;

export { Sty_Toggle };
