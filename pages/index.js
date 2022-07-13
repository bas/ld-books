import {
  BaseStyles,
  Box,
  PageLayout,
  Text,
  Header,
  Pagehead,
} from "@primer/react";
import BookList from "../components/book-list";
import Cart from "../components/cart";
import PromoBanner from "../components/promo-banner";
import { useFlags } from "launchdarkly-react-client-sdk";

function App() {
  const { pageHeader, showCampaignBanner } = useFlags();
  const allBooks = [
    {
      title: "Scrum: The Art of Doing Twice the Work in Half the Time",
      author: "Jeff Sutherland",
      cover: "/images/scrum.jpg",
      price: "15.00",
      rating: 3,
    },
    {
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses",
      author: "Eric Ries",
      cover: "/images/lean.jpg",
      price: "12.99",
      rating: 4,
    },
    {
      title: "Crossing the Chasm",
      author: "Geoffrey A. Moore",
      cover: "/images/chasm.jpg",
      price: "10.99",
      rating: 5,
    },
    {
      title: "The Mythical Man-Month: Essays on Software Engineering",
      author: "Frederick P. Brooks Jr.",
      cover: "/images/month.jpg",
      price: "16.90",
      rating: 3,
    },
    {
      title:
        "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability",
      author: "Steve Krug",
      cover: "/images/think.jpg",
      price: "10.99",
      rating: 3,
    },
  ];

  return (
    <div className="App">
      <BaseStyles>
        <PageLayout>
          <PageLayout.Header>
            <Header>
              <Header.Item>
                <Header.Link href="#">Home</Header.Link>
              </Header.Item>
              <Header.Item>
                <Header.Link href="#">Staff picks</Header.Link>
              </Header.Item>
              <Header.Item>
                <Header.Link href="#">About</Header.Link>
              </Header.Item>
            </Header>
            { /* Show the text returned by the pageHeader feature flag */ }
            <Pagehead sx={{ fontSize: 3, mb: 1 }}>{pageHeader}</Pagehead>
            {/* Only show the banner if applycoupon and showCampaignBanner are both true */}
            {showCampaignBanner && <PromoBanner discount={10} />}
          </PageLayout.Header>
          <PageLayout.Pane>
            <Box height={640}>
              <Cart />
            </Box>
          </PageLayout.Pane>
          <PageLayout.Content>
            <Box height={640}>
              <BookList allBooks={allBooks} />
            </Box>
          </PageLayout.Content>
        </PageLayout>
      </BaseStyles>
    </div>
  );
}

export default App;
