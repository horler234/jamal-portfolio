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

          <meta property="og:url" content="https://abdulqadir.vercel.app" />
          <meta
            name="description"
            content="Hi, there! I’m Abdulqadir Adebayo, a UI/UX Designer from Nigeria. I have 2years of experience working as a UI/UX Designer within and outside of my country. I help small and large scale businesses solve their problems by building User centred products and trouble shooting UX Problems, which in turn increases their profit/revenue."
          />

          <meta
            name="og:description"
            content="Hi, there! I’m Abdulqadir Adebayo, a UI/UX Designer from Nigeria. I have 2years of experience working as a UI/UX Designer within and outside of my country. I help small and large scale businesses solve their problems by building User centred products and trouble shooting UX Problems, which in turn increases their profit/revenue."
          />
          <meta name="og:image" content="/images/abdulqadir.png" />
          <meta property="og:site_name" content="Abdulqadir Adebayo" />
          <meta name="theme-color" content="#11003e" />
          {/* twitter card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Abdulqadir Adebayo" />
          <meta
            name="twitter:description"
            content="Hi, there! I’m Abdulqadir Adebayo, a UI/UX Designer from Nigeria. I have 2years of experience working as a UI/UX Designer within and outside of my country. I help small and large scale businesses solve their problems by building User centred products and trouble shooting UX Problems, which in turn increases their profit/revenue."
          />
          <meta name="twitter:image" content="/images/abdulqadir.png" />
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
