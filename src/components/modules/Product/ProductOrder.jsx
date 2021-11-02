import { AiOutlineShoppingCart } from "react-icons/ai";
import { PrimaryBtn } from "../../common/Buttons";
import { FlexCenter } from "../../common/Layouts";
import Counter from "../Counter";

function ProductOrder({ quantity, onIncrement, onDecrement, onOrder, ...props }) {
  return (
    <FlexCenter {...props}>
      <Counter
        count={quantity}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        className="w-full lg:mr-4 lg:w-2/3"
      />
      <PrimaryBtn
        name="Add To Cart"
        className="mt-4 w-full lg:mt-0"
        onClick={onOrder}
        LeftIcon={<AiOutlineShoppingCart className="mr-2" size={20} />}
      >
        Add to Cart
      </PrimaryBtn>
    </FlexCenter>
  );
}

export default ProductOrder;
