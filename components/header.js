import { Header } from "@primer/react";

function SiteHeader() {
  return (
    <Header>
      <Header.Item>
        <Header.Link href="/">Home</Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link href="/login">Login</Header.Link>
      </Header.Item>
    </Header>
  );
}

export default SiteHeader;
