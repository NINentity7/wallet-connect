import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MoralisProvider } from 'react-moralis';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl="https://gfj6trn3i3wx.usemoralis.com:2053/server"
      appId="Ko9jVsN1xgn5WM0PYUKbUVBXg5oY9AC6L521G6Sf"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
