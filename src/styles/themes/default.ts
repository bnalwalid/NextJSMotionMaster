import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  font: {
    default: `'Playfair Display', sans-serif`,
  },
  colors: {
    // Texts
    title: '#52575C',
    texts: '#000000',
    white: '#FFFFFF',

    border: '#C1C1C1',
    divider: '#dfe0e1',

    // Alerts
    confirmation: {
      color: '#29A97E',
      contrast: '#FFFFFF',
    },
    danger: {
      color: '#E91E54',
      contrast: '#FFFFFF',
    },
    information: {
      color: '#007bff',
      contrast: '#FFFFFF',
    },
    warning: {
      color: '#FD6D00',
      contrast: '#FFFFFF',
    },

    // Backgrounds
    light: {
      color: '#FFF',
      contrast: '#8F8F8F',
    },
    medium: {
      color: '#F5F5F5',
      contrast: '#8F8F8F',
    },
    dark: {
      color: '#6e6e6e',
      contrast: '#FFFFFF',
    },
  },
};

export default theme;
