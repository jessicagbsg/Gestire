import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--gray-background);
  padding: 1.25rem;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 5px;

  div {
    margin: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  }
`;
