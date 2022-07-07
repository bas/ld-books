import {
  Button,
  FormControl,
  TextInput,
  Box,
  BaseStyles,
  PageLayout,
  Pagehead,
} from "@primer/react";
import { useLDClient, useFlags } from "launchdarkly-react-client-sdk";
import { useEffect, useState } from "react";
import Celebrate from "../components/celebrate";
import SiteHeader from "../components/header";

function Login() {
  const { confetti } = useFlags();
  const [user, setUser] = useState("");
  let ldClient = useLDClient();

  async function changeUser() {
    const newUser = {
      key: user,
    };
    /* not sure why yet, but on first load ldClient is not yet initialized */
    if (ldClient) {
      await ldClient.identify(newUser, null, () => {
        console.log("New user's flags available");
      });

      const userFlags = ldClient.allFlags();

      console.log(userFlags);
    }
  }

  useEffect(() => {
    changeUser();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    changeUser();
  };

  console.log(confetti);

  return (
    <div>
      <BaseStyles>
        <PageLayout>
          <PageLayout.Header>
            <SiteHeader />
            <Pagehead sx={{ fontSize: 3, mb: 1 }}>
            {user ? (
              `You are signed in as ${ldClient.getUser().key}.`
            ) : (
              `Please sign in.`
            )}
            </Pagehead>
          </PageLayout.Header>
          <PageLayout.Content>
            <form id="login" onSubmit={handleSubmit}>
              <Box>
                <Box p={2}>
                  <FormControl id="username">
                    <FormControl.Label>Name</FormControl.Label>
                    <TextInput onChange={(e) => setUser(e.target.value)} />
                  </FormControl>
                </Box>
                <Box p={2}>
                  <Button variant="primary">Login</Button>
                </Box>
              </Box>
            </form>
          </PageLayout.Content>
        </PageLayout>
      </BaseStyles>
      <Celebrate confetti={confetti} />
    </div>
  );
}

export default Login;
