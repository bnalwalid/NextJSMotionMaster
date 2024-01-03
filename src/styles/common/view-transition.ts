import { css } from 'styled-components';

import { fadeIn, fadeOut, fadeOutFromBottom, fadeInFromTop } from './animations';

export default css`
  // # Padrão da página
  ::view-transition-old(root) {
    animation: ${fadeOut} 0.5s ease-in-out 1 forwards;
  }

  ::view-transition-new(root) {
    animation: ${fadeIn} 1s ease-in-out 1 forwards;
  }

  // # Cabeçalho

  ::view-transition-old(page-header) {
    animation: ${fadeOutFromBottom} 0.5s ease-in-out 1 forwards;
  }

  ::view-transition-new(page-header) {
    animation: ${fadeInFromTop} 0.5s ease-in-out 1 forwards;
  }

  // # Imagem de destaque

  ::view-transition-old(image-thumb),
  ::view-transition-new(image-thumb) {
    transition: 1s;

    animation: none;
    mix-blend-mode: normal;
  }
`;
