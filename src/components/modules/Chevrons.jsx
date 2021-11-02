import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IconBtn } from "../common/Buttons";

function Chevrons({ onNext, onPrev, className, size = 16 }) {
  const stateStyles = "hover:opacity-100 hover:text-primary-200";
  const positionStyles = "absolute top-1/2 -translate-y-1/2";
  const baseStyles = "bg-neutral-100 text-neutral-400 rounded-3xl";
  const styles = `${className} ${stateStyles} ${positionStyles} ${baseStyles}`;

  return (
    <>
      <IconBtn
        name="Next"
        Icon={<FaChevronRight size={size} />}
        onClick={onNext}
        className={styles + " right-0"}
      />
      <IconBtn
        name="Previous"
        Icon={<FaChevronLeft size={size} />}
        onClick={onPrev}
        className={styles + " left-0"}
      />
    </>
  );
}

export default Chevrons;
