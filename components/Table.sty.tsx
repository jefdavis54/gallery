import styled from "styled-components";

const Sty_TableContainer = styled.div`
  font-size: 2rem;
  background: #637181;
  text-align: center;
  color: black;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-top: 3rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;

  .col-one {
    width: 24rem;
  }
  .col-two {
    max-width: 1px;
  }

  td,
  th {
    text-align: left;
    overflow: hidden;
  }
  th {
    font-size: 2.4rem;
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
  tfoot {
    font-size: 1.4rem;
  }
  @media (max-width: 850px) {
    font-size: 1.8rem;
    .col-one {
      width: 20rem;
    }
    tfoot {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 600px) {
    font-size: 1.6rem;
    .col-one {
      width: 18rem;
    }
  }
`;

export { Sty_TableContainer };
