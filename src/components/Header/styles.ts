import styled from "styled-components";

export const ContainerNav = styled.header`
  background-color: var(--green-light);
  padding: 0 1rem;
  display: flex;
  gap: 1.8rem;

  img {
    margin-left: 2rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  a {
    color: var(--green-dark-text);
    font-size: 1rem;
    padding: 1rem 0;
    position: relative;
    &:after {
      content: "";
      display: block;
      height: 2px;
      width: 0;
      background-color: var(--green-dark-text);
      margin-top: 4px;
      transition: 0.3s;
      position: absolute;
    }
    &:hover:after {
      width: 100%;
    }
  }
`;
