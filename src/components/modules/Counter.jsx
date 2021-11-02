import { FaMinus, FaPlus } from "react-icons/fa";
import { IconBtn } from "../common/Buttons";
import { FlexCenter } from "../common/Layouts";

function Counter({ className, count, onIncrement, onDecrement, ...props }) {
  return (
    <FlexCenter {...props} className={"py-1 justify-between bg-neutral-100 rounded-md " + className}>
      <IconBtn name="Decrement" onClick={onDecrement} Icon={<FaMinus />} />
      <span className="text-neutral-400 font-bold">{count}</span>
      <IconBtn name="Increment" onClick={onIncrement} Icon={<FaPlus />} />
    </FlexCenter>
  );
}

export default Counter;
