import React from 'react';
import Document, {
  type DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;
    // eslint-disable-next-line no-param-reassign
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);
    const style = extractStyle(cache, true);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {/* eslint-disable-next-line react/no-danger */}
          <style dangerouslySetInnerHTML={{ __html: style }} />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
