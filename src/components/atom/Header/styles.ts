import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  a {
    font-weight: bold;
    text-decoration: none;
  }

  h2 {
    margin: 0;
  }

  > div {
    view-transition-name: page-header;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .github-link{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    color: #666;
    font-size: 0.9rem;
    font-weight: bold;
    transition: 0.2s;
    &:hover{
      opacity: 0.7;
    }
  }
`;
