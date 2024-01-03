import { createGlobalStyle } from 'styled-components';

import viewTransition from './common/view-transition';
import drawer from './components/drawer';
import reset from './components/reset';
import swal from './components/swal';
import theme from './themes/default';
 

export default createGlobalStyle` 

  ${reset} 
	html {
    scroll-behavior: smooth;
		font-size: 16px;
  }

  #__next,
  html,
  body {
    display: flex;
    flex-flow: column;

    margin: 0;
    padding: 0;
    border: 0;

		min-height: 100%;
		height: 100%;

    font-family: ${theme.font.default}, sans-serif;
  }
 
  #__next  {
    height: 100%;
    flex: 1;
  }
	
	picture {
		display: block;
	}
  img {
    max-width: 100%;
		display: block;
  }

  h1 {
    font-size: 2em;
    font-weight: bolder;
    @media (max-width: 991px) {
      font-size: 1.5em;
    }
  }
  h2 {
    font-size: 1.5em;
    font-weight: bolder;
    @media (max-width: 991px) {
      font-size: 1.17em;
    }
  }
  h3 {
    font-size: 1.17em;
    font-weight: bolder;
    @media (max-width: 991px) {
      font-size: 1em;
    }
  }
  h4 {
    font-size: 1em;
		font-weight: 600;
    @media (max-width: 991px) {
      font-size: 0.83em;
    }
  }
  h5 {
    font-size: 0.83em;
		font-weight: 600;
    @media (max-width: 991px) {
      font-size: 0.67em;
    }
  }
  h6 {
    font-size: 0.67em;
		font-weight: 600;
    @media (max-width: 991px) {
      font-size: 0.5em;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1.2rem;
    color: ${theme.colors.title};
  }
  
  p, td, li, div, a, div, button {
    font-size: 1rem;
    letter-spacing: -0.02em; 
    color: ${theme.colors.texts};
  }
  
  p, td, li, div, a, button {
    line-height: 150%;
  }

  p {
    margin-bottom: 1rem;

		small {
			font-size: 90%;
			line-height: 0.9rem;
			display: inline-block;
		}

    span {
      font-size: inherit;
    }
 
  }

  span  {
    font-size: 0.8rem;
  }

  input {
    @media (max-width: 991px) {
      font-size: 1rem !important;
    }
  }

  button {
    cursor: pointer;
  }

  hr {
    opacity: 0.3;
    margin: 1rem 0;
    border-color: ${theme.colors.border};
  }

  /* - - - - - - - -  Utils - - - - - - - - */

  .loading-page {
    background-image: url('/images/loading.gif');
    background-color: ${theme.colors.light.color};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 2.8125rem;
    opacity: 0;
    min-height: 100vh;
  }

  /* Misc */
  .h-100 {
    height: 100%;
  }
  .w-100 {
    width: 100%;
  }
  .w-50 {
    width: 50%;
    @media (max-width: 991px) {
      width: 100%;
    }
  }
  .hide {
    display: none !important;
  }

  .avoid-overflow {
    overflow: hidden;
  }

  .inline-block {
    display: inline-block;
  }

  /* Texts */
  .text-uppercase {
    text-transform: uppercase;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-weight-900 {
    font-weight: 900;
  }
  
  /* Margins */
  .mb-0 {
    margin-bottom: 0 !important;
  }
  .mb-1 {
    margin-bottom: 0.6rem !important;
  }
  .mb-2 {
    margin-bottom: 1.2rem !important;
  }
  .mb-3 {
    margin-bottom: 1.8rem !important;
  }
  .mb-4 {
    margin-bottom: 2.5rem !important;
  }
  .mt-0 {
    margin-top: 0 !important;
  }
  .mt-1 {
    margin-top: 0.6rem !important;
  }
  .mt-2 {
    margin-top: 1.2rem !important;
  }
  .mt-3 {
    margin-top: 1.8rem !important;
  }
  .mt-4 {
    margin-top: 2.5rem !important;
  }
  .ml-0 {
    margin-left: 0 !important;
  }
  .ml-1 {
    margin-left: 0.6rem !important;
  }
  .ml-2 {
    margin-left: 1.2rem !important;
  }
  .ml-3 {
    margin-left: 1.8rem !important;
  }
  .ml-4 {
    margin-left: 2.5rem !important;
  }

  .ml-auto {
    margin-left: auto;
  }
  .mr-auto {
    margin-right: auto;
  }
  .mlr-auto {
    margin-left: auto;
    margin-right: auto;
  }

  /* Paddings */
  .p-0 {
    padding: 0 !important;
  }
  .p-1 {
    padding: 0.6rem !important;
  }
  .p-2 {
    padding: 1.2rem !important;
  }
  .p-3 {
    padding: 1.8rem !important;
  }
  .p-4 {
    padding: 40 !important;
  }
  .pt-0 {
    padding-top: 0 !important;
  }
  .pt-1 {
    padding-top: 0.6rem !important;
  }
  .pt-2 {
    padding-top: 1.2rem !important;
  }
  .pt-3 {
    padding-top: 1.8rem !important;
  }
  .pt-4 {
    padding-top: 40 !important;
  }
  .pb-0 {
    padding-bottom: 0 !important;
  }
  .pb-1 {
    padding-bottom: 0.6rem !important;
  }
  .pb-2 {
    padding-bottom: 1.2rem !important;
  }
  .pb-3 {
    padding-bottom: 1.8rem !important;
  }
  .pb-4 {
    padding-bottom: 40 !important;
  }

  /* Flex alignments */
  .justify-content-center {
    justify-content: center;
  }
  .align-items-center {
    align-items: center;
  }
  .align-items-bottom {
    align-items: flex-end;
  }

  /* Vendor Fix */
  .swal2-container {
    z-index: 99999 !important;
  }
  .swal2-styled:focus {
    box-shadow: none;
  }

  .customSelect__menu {
    z-index: 100 !important;
  } 

  ${swal}
  ${drawer}
  ${viewTransition}
`;
