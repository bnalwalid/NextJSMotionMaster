import styled from 'styled-components';

export const Container = styled.main`
  height: 100%;

  display: flex;
  flex-direction: column;

  > section {
    flex: 1;
    padding: 2rem;
  }

  > footer {
    view-transition-name: page-footer;

    text-align: center;
  }
`;

export const Footer = styled.div``;
