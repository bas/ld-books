import { Box, Text } from "@primer/react";

function PromoBanner({discount}) {
  return (
    <Box sx={{ backgroundColor: 'red'}} p={3}>
    <Text sx={{ fontSize: 3, color: 'white', fomtWeight: 'bold' }}>Apply coupon code SUMMERTIME to get {discount}% discount on checkout!</Text>
  </Box>

  )
}

export default PromoBanner;