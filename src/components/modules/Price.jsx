import { Badge, PriceTag } from "../common";
import { FlexCenter } from "../common/Layouts";

function Price({ value, discount, className, ...props }) {
  const discountedPrice = discount ? value * discount : 0;
  const disPercentage = discount ? (discount * 100).toString() + "%" : 0;

  return (
    <FlexCenter {...props} className={["justify-between", "lg:flex-col lg:items-start", className]}>
      {discount && (
        <FlexCenter className="lg:mb-1">
          <PriceTag value={discountedPrice} className="mr-4" />
          <Badge text={disPercentage} />
        </FlexCenter>
      )}
      <PriceTag value={value} crossedOut={discount} />
    </FlexCenter>
  );
}

export default Price;
