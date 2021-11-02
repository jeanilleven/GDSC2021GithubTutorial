import { FaMinus, FaPlus } from "react-icons/fa";
import { IconBtn } from "../common/Buttons";
import { FlexCenter } from "../common/Layouts";

function Counter({ className, count, onIncrement, onDecrement, ...props }) {
  const iconStyles = "text-primary-200 p-4 rounded-lg active:scale-125 transform";

  return (
    <FlexCenter {...props} className={"py-1 justify-between bg-neutral-100 rounded-md " + className}>
      <IconBtn className={iconStyles} name="Decrement" onClick={onDecrement} Icon={<FaMinus />} />
      <span className="text-neutral-400 font-bold">{count}</span>
      <IconBtn className={iconStyles} name="Increment" onClick={onIncrement} Icon={<FaPlus />} />
    </FlexCenter>
  );
}

export default Counter;
