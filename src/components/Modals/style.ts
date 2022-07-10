import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  .span {
    grid-column: 1 / -1;
  }

  h2 {
    margin: 2rem 0;
    position: relative;
    &::after {
      content: "";
      display: block;
      height: 1px;
      width: 100%;
      background-color: #ddd;
      margin-top: 4px;
      position: absolute;
    }
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.2rem;
  }

  input[type="date"],
  select {
    color: #777;
  }
  button {
    margin-top: 2rem;
    width: fit-content;
    &.green {
      justify-self: end;
    }
  }
`;
