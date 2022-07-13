import { Box, Text } from "@primer/react";
import Image from "next/image";
import CartButton from "./cart-button";
import { StarFillIcon } from "@primer/octicons-react";
import { useFlags } from "launchdarkly-react-client-sdk";

function BookList({ allBooks }) {
  const { rating } = useFlags();
  return (
    <Box display="grid" gridTemplateColumns="1fr" gridGap={3}>
      {allBooks.map((book) => (
        <Box
          display="flex"
          key={book.title}
          p={3}
          borderColor="border.default"
          borderWidth={1}
          borderStyle="solid"
        >
          <Box width={64}>
            <Image src={book.cover} alt={book.title} height={200} width={200} />
          </Box>
          <Box flexGrow={1}>
            <Box>
              <Text sx={{ fontSize: 1, fontWeight: "bold" }}>
                {book.title}
              </Text>
            </Box>
            <Box>
              <Text sx={{ fontSize: 1 }}>{book.author}</Text>
            </Box>
            <Box>
              <Text sx={{ fontSize: 1 }}>&euro;{book.price}</Text>
            </Box>
          </Box>
          <Box>
            <Box>
              <CartButton />
            </Box>
            {rating && (
              <Box pt={3}>
                <Text as="span" sx={{ fontSize: 1 }}>
                  Rating:
                </Text>
                <Text
                  as="span"
                  sx={{ fontSize: 1, marginLeft: ".5rem" }}
                >
                  {[...Array(book.rating)].map((e, i) => (
                    <StarFillIcon size={16} fill="#FFD700" />
                  ))}
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default BookList;
