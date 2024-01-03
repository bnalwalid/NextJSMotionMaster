import { css } from 'styled-components';

export default css`
  .chakra-modal__header {
    padding: 1.5rem 0rem !important;
  }
  .chakra-modal__close-btn {
    background: ${({ theme }) => theme.colors.medium.color};
    border-width: 0;

    position: relative;
    margin-left: auto;

    &:hover {
      background: ${({ theme }) => theme.colors.medium.color} !important;
    }

    svg {
      color: ${({ theme }) => theme.colors.title};
    }
  }

  .chakra-modal__content {
    border-radius: 10px !important;
  }

  .chakra-slide {
    background: ${({ theme }) => theme.colors.medium.color} !important;
  }

  .chakra-modal__body {
    padding: 0 2rem 2rem 2rem !important;
  }
`;
