import type { AppProps } from 'next/app'
import '../node_modules/aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000 // Set animation duration 
    });
  }, []);
  return <Component {...pageProps} />
}
