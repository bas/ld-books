import { Box, Text, IconButton } from "@primer/react";
import { GiftIcon } from "@primer/octicons-react";
import Image from "next/image";

function BookList({allBooks}) {
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
              <Text sx={{ fontSize: 1, mb: 1, fontWeight: "bold" }}>
                {book.title}
              </Text>
            </Box>
            <Box>
              <Text sx={{ fontSize: 1, mb: 1 }}>{book.author}</Text>
            </Box>
            <Box>
              <Text sx={{ fontSize: 1, mb: 1 }}>&euro;{book.price}</Text>
            </Box>
          </Box>
          <Box>            
            <IconButton aria-label="Search" icon={GiftIcon} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default BookList;
