import { Badge, PriceTag } from "../common";
import { FlexCenter } from "../common/Layouts";

function Price({ value, discount, className = "", ...props }) {
  const discountedPrice = discount ? value * discount : 0;
  const disPercentage = discount ? (discount * 100).toString() + "%" : 0;

  const crossedOutStyle = "text-neutral-200 font-bold line-through";
  const defaultStyle = "text-neutral-400 text-3xl font-bold";

  return (
    <FlexCenter {...props} className={["justify-between", "lg:flex-col lg:items-start", className]}>
      {discount && (
        <FlexCenter className="lg:mb-1">
          <PriceTag value={discountedPrice} className={`${defaultStyle} mr-4`} />
          <Badge text={disPercentage} />
        </FlexCenter>
      )}
      <PriceTag value={value} className={discount ? crossedOutStyle : defaultStyle} />
    </FlexCenter>
  );
}

export default Price;
