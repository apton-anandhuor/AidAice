// custom CSS
import "@/styles/globals.css";
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    <>
      <Script
        src="https://app.termly.io/embed.min.js"
        data-auto-block="off"
        data-website-uuid="28dbad2f-0f6c-4473-bfea-15c5b3d24c39"
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
