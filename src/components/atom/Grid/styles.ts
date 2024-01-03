import styled, { css } from 'styled-components';

export const WrapperStyle = styled.section`
  width: 100%;
  padding: 0 2rem;
  max-width: 80rem;
  margin: 0 auto;

  @media (max-width: 991px) {
    padding: 0 1rem;
  }
`;

const defaultColumn = css`
  display: grid;
  grid-gap: 1rem;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const columns = (template: string): any => css`
  ${defaultColumn}
  grid-template-columns: ${template};
`;

interface IRowStyleProps {
  $columns?: string;
  $verticalAlignment?: 'top' | 'bottom' | 'center';
  $horizontalAlignment?: 'left' | 'right' | 'center';
  $isFieldGrid?: boolean;
  $mb?: string;
  $mt?: string;
}
export const RowStyle = styled.div<IRowStyleProps>`
  ${({ $columns }) => columns($columns || '1fr')}

  ${({ $isFieldGrid = false }) =>
    $isFieldGrid &&
    css`
      grid-gap: 0;

      > * {
        padding: 0rem;
      }

      > * + * {
        padding-left: 1rem;

        @media (max-width: 991px) {
          padding-left: 0;
        }
      }
    `}

  ${({ $verticalAlignment = 'top' }) => {
    let alignment = 'center';
    if ($verticalAlignment === 'top') alignment = 'flex-start';
    if ($verticalAlignment === 'bottom') alignment = 'flex-end';

    return css`
      align-items: ${alignment};
    `;
  }}
  
  ${({ $horizontalAlignment = 'left' }) => {
    let alignment = 'center';
    if ($horizontalAlignment === 'left') alignment = 'flex-start';
    if ($horizontalAlignment === 'right') alignment = 'flex-end';

    return css`
      justify-content: ${alignment};
    `;
  }}
  
  ${({ $mb }) =>
    $mb &&
    css`
      margin-bottom: ${$mb};
    `}
  
  ${({ $mt }) =>
    $mt &&
    css`
      margin-top: ${$mt};
    `}
`;
