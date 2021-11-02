import Btn from "./Btn";

function IconBtn({ Icon, className, iconColor = "primary-200", bgColor = "transparent", ...props }) {
  const baseStyles = `bg-${bgColor} text-${iconColor} text-md font-bold`;
  const transitionStyles = "transition-all duration-250 ease-in-out";

  const styles = `${baseStyles} ${transitionStyles}`;
  return (
    <Btn {...props} className={styles + " " + className}>
      {Icon}
    </Btn>
  );
}

export default IconBtn;
