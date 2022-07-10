import styled from "styled-components";

export const Container = styled.main`
  width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const ActivitiesTable = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--gray-text);
      padding: 1rem 1.5rem;
      text-align: left;
    }

    td {
      text-align: left;
      padding: 1rem 1.5rem;
      border: 0;
      background-color: var(--blue-light);

      img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;
