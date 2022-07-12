import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--gray-background);
  padding: 1.25rem;
  min-height: 300px;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 5px;
  li {
    list-style: none;
    margin-top: 1rem;
    padding: 1rem;
    background-color: #ddd;
    color: #333;
    text-align: left;
    border-radius: 0.2rem;
  }
  div {
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    text-align: center;
    p {
      color: #999;
    }
  }
`;
