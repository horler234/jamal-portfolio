import App from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AppTheme } from "@theme/AppTheme";
import { NextComponentType, NextPageContext } from "next";
import { useRouter } from "next/router";
import { Gradient } from "@keyframes/Gradient";

/**
 * Custom Next.js App
 *
 * The App component is used to initialize pages,
 * it is the top level parent to all components.
 *
 * It is used to
 *  - inject global CSS for the html and body tags
 *  - pass the Theme to all styled-components
 *  - keep state between page navigation on the client
 */

type MyThemeType = typeof AppTheme;

export interface ThemeWrapper {
  theme: MyThemeType;
}

/**
 * GlobalStyle: injects global CSS
 */
const GlobalStyle = createGlobalStyle<ThemeWrapper>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Laila', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    background: ${(props) => props.theme.colors.primary.blueGradient};
    color: #FFFFFF;
    background-size: 400% 400%;
	  animation: ${Gradient} 15s ease infinite;
    /* height: 100vh; */
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

interface MyAppProps extends App {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
