import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const themeInitializerScript = `
    (function() {
      try {
        var storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
          document.documentElement.setAttribute('data-theme', storedTheme);
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
        }
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })();
  `;

  return (
    <Html lang="en" data-theme="light">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}