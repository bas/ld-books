import { IconButton, Button } from "@primer/react";
import { GiftIcon } from "@primer/octicons-react";
import { useFlags } from "launchdarkly-react-client-sdk";

function CartButton() {
  const { cartButton } = useFlags();
  console.log(`The current button style is: ${cartButton}`);

  /* show a button based on the variant returend from the feature flag */
  switch (cartButton) {
    case "Button":
      return <Button>Add to Cart</Button>;
    case "IconButton":
      return <Button trailingIcon={GiftIcon}>Add to Cart</Button>;
    case "PrimaryButton":
      return <Button variant="primary">Add to Cart</Button>;
    case "IconOnlyButton":
      return <IconButton icon={GiftIcon} />;
    default:
      return <IconButton icon={GiftIcon} />
  }
}

export default CartButton;