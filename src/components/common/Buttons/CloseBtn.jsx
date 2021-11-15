import { ImCross } from "react-icons/im";
import IconBtn from "./IconBtn";

function CloseBtn({ onClose, size, className = "", ...props }) {
  return (
    <IconBtn
      {...props}
      Icon={<ImCross size={size} />}
      onClick={onClose}
      className={["text-primary-200", className]}
    />
  );
}

export default CloseBtn;
