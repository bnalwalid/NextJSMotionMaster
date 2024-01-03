import { keyframes } from 'styled-components';

export const fadeInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }

  to {
    opacity: 1;
    transform: translateY(0rem);
  }
`;

export const fadeOutFromBottom = keyframes`
  from {
    opacity: 1;
    transform:  translateY(-2rem);
  }

  to {
    opacity: 0;
    transform:  translateY(0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0; 
  }

  to {
    opacity: 1; 
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1; 
  }

  to {
    opacity: 0; 
  }
`;
