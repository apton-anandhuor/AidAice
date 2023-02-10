// custom CSS
import '@/styles/globals.css'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import("bootstrap/dist/js/bootstrap");
    }
  }, [])

  return <Component {...pageProps} />
}
