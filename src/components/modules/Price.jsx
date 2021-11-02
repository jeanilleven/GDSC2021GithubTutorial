import Badge from "../common/Badge";
import { FlexCenter } from "../common/Layouts";
import PriceTag from "../common/PriceTag";

function Price({ value, discount, className, ...props }) {
  let discountedPrice, disPercentage;
  if (discount) {
    discountedPrice = value * discount;
    disPercentage = (discount * 100).toString() + "%";
  }

  return (
    <FlexCenter {...props} className={"justify-between lg:flex-col lg:items-start " + className}>
      {discount && (
        <FlexCenter className="lg:mb-1">
          <PriceTag price={discountedPrice} className="mr-4" />
          <Badge text={disPercentage} />
        </FlexCenter>
      )}
      <PriceTag price={value} crossedOut={discount} />
    </FlexCenter>
  );
}

export default Price;
