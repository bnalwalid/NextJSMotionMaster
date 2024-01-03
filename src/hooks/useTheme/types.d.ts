/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
import { DefaultTheme } from 'styled-components/native';

interface IColorType {
  color: string;
  contrast: string;
}

interface IColorProps {
  light: IColorType;
  regular: IColorType;
  dark: IColorType;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    font: {
      default: string;
    };
    colors: {
      // Texts
      title: string;
      texts: string;
      white: string;

      border: string;
      divider: string;

      // Alerts
      confirmation: IColorType;
      danger: IColorType;
      information: IColorType;
      warning: IColorType;

      // Backgrounds
      light: IColorType;
      medium: IColorType;
      dark: IColorType;
    };
  }
}
