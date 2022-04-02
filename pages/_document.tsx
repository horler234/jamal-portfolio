import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

/**
 * Custom Next.js Document:
 *
 * Extends the default 'Document' to augment the applications <html> and <body> tags,
 * and to change the 'renderPage' method to ensure that Styled-Components work properly
 * with SSR.
 */

export default class MyDocument extends Document<any> {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
          enhanceComponent: (Component) => (props) =>
            sheet.collectStyles(<Component {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Laila:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/images/icon.png"
            type="image/x-icon"
          />

          <meta property="og:url" content="https://codelord.vercel.app" />
          <meta
            name="description"
            content="Abdulmuqit is a self-taught front-end developer from Lagos, Nigeria. Currently, he is an undergraduate student at the University of Lagos, Akoka where he is studying Civil & Environmental Engineering."
          />

          <meta
            name="og:description"
            content="Abdulmuqit is a self-taught front-end developer from Lagos, Nigeria. Currently, he is an undergraduate student at the University of Lagos, Akoka where he is studying Civil & Environmental Engineering."
          />
          <meta name="og:image" content="/images/me.JPG" />
          <meta property="og:site_name" content="Abdulmuqit Shuaib" />
          <meta name="theme-color" content="#0F0D0D" />
          {/* twitter card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Abdulmuqit Shuaib" />
          <meta
            name="twitter:description"
            content="Abdulmuqit is a self-taught front-end developer from Lagos, Nigeria. Currently, he is an undergraduate student at the University of Lagos, Akoka where he is studying Civil & Environmental Engineering."
          />
          <meta name="twitter:image" content="/images/me.JPG" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
