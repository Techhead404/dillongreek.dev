import { Html, Head, Main, NextScript } from "next/document";
import NAV from "./components/nav";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <NAV />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
