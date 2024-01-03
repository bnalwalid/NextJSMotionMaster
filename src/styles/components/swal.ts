import { css } from 'styled-components';

import theme from '../themes/default';

export default css`
  .swal2-container {
    z-index: 99999 !important;
  }
  .swal2-styled:focus {
    box-shadow: none;
  }

  .swal2-html-container {
    padding-top: 2rem !important;
  }

  .swal2-popup {
    border-radius: 12px !important;
  }

  .swal2-actions {
    padding-bottom: 1rem !important;

    button {
      font-size: 1.2rem;
      font-weight: bold;
      padding: 1rem 2rem;
      border-width: 0;

      border-radius: 10px !important;
      font-weight: 600;
      cursor: pointer;
      transition: 0.3s;
    }

    button.swal2-cancel {
      background: ${theme.colors.danger.color};
    }
    button.swal2-confirm {
      background: ${theme.colors.confirmation.color};
    }

    button.error-message-button {
      background: ${theme.colors.danger.color};
    }
  }
`;
