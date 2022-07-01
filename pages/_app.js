import { ThemeProvider } from "@primer/react";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;