import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Josh & Co. | Software Engineer & AI Prompt Architect</title>
        <meta name="description" content="Personal portfolio and engineering showcase." />
        <meta name="author" content="ONI JOSHUA ADEOLA" />
        <meta name="reply-to" content="josh@joshandco.cc" />
        <meta property="og:title" content="Josh & Co." />
        <meta property="og:description" content="Software Engineer & AI Prompt Architect" />
        <meta property="og:url" content="https://joshandco.cc" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}