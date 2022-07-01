import { ThemeProvider } from "@primer/react";
import { withLDProvider } from "launchdarkly-react-client-sdk";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default withLDProvider({ clientSideID: process.env.NEXT_PUBLIC_LD_CLIENT_SIDE_ID })(
  App
);
