/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/style-prop-object */
/* eslint-disable @next/next/no-img-element */
import { ToastContainer } from 'react-toastify';

import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import GlobalStyle from 'styles/global';
import theme from 'styles/themes/default';

import * as chakrauiTheme from 'config/chackraui-color-theme';

const AppProvider = dynamic(() => import('hooks'), { ssr: false });

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />

      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <title>NextJS Motion Master</title>
    </Head>

    <ToastContainer />

    <ChakraProvider resetCSS={false} theme={chakrauiTheme.theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>

    <GlobalStyle theme={theme} />

    <ColorModeScript initialColorMode={chakrauiTheme.config.initialColorMode} />
  </>
);

export default MyApp;
