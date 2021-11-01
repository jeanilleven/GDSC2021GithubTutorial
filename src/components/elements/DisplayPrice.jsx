import Badge from "../common/Badge";
import PriceTag from "../common/PriceTag";
import { FlexCenter } from "./../common/Layouts";

function DisplayPrice({ price, discount, className, ...props }) {
  let discountedPrice, disPercentage;
  if (discount) {
    discountedPrice = price * discount;
    disPercentage = (discount * 100).toString() + "%";
  }

  return (
    <FlexCenter {...props} className={"justify-between lg:flex-col lg:items-start " + className}>
      {discount && (
        <FlexCenter className="lg:mb-4">
          <PriceTag price={discountedPrice} className="mr-4" />
          <Badge text={disPercentage} />
        </FlexCenter>
      )}
      <PriceTag price={price} crossedOut={discount} />
    </FlexCenter>
  );
}

export default DisplayPrice;
