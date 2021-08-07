import styled from "styled-components";

const Sty_TableContainer = styled.div`
  background: #637181;
  text-align: center;
  color: black;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;

  td {
    text-align: left;
  }
  thead tr {
    background: black;
    color: white;
  }
  tbody tr {
    background: #f6f6f6;
  }
  tbody tr:nth-of-type(even) {
    background: #cccfe0;
  }
  .col-one {
    width: 12rem;
  }
  .col-two {
    max-width: 1px;
  }
`;

export { Sty_TableContainer };
