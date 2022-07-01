import { Box, Text, FormControl, Select, TextInput } from "@primer/react";
import { useFlags } from "launchdarkly-react-client-sdk";

function Cart() {
  const { applyCoupon } = useFlags();
  return (
    <Box display="grid" gridTemplateColumns="1fr">
      <Box>
        <Text as="h2">Cart</Text>
      </Box>
      <Box
        display="flex"
        p={3}
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
      >
        <Box p={1}>
          <Text sx={{ fontSize: 1, mb: 1 }}>
            Scrum: The Art of Doing Twice the Work in Half the Time
          </Text>
        </Box>
        <Box p={1}>
          <FormControl id="quantity-select">
            <FormControl.Label>Quantity</FormControl.Label>
            <Select>
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4">4</Select.Option>
            </Select>
          </FormControl>
        </Box>
        <Box p={1}>
          <Text sx={{ fontSize: 1, mb: 1 }}>€15.00</Text>
        </Box>
      </Box>
      { /* Show the apply coupon text field if applyCoupon is true */ }
      {applyCoupon && (
        <Box p={3}>
          <FormControl>
            <FormControl.Label>Enter Coupon</FormControl.Label>
            <TextInput />
          </FormControl>
        </Box>
      )}
    </Box>
  );
}

export default Cart;
