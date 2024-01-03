import styled from 'styled-components';

interface IContainer {
  $id: string;
}

export const Container = styled.div<IContainer>`
  header {
    padding: 2rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    img {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      border-radius: 5px;

      view-transition-name: ${({ $id }) => `image-thumb-${$id}`};
    }

    p {
      font-size: 1.2rem;
    }
  }
`;
