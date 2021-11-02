import Btn from "./Btn";

function IconBtn({ Icon, className, iconColor = "primary-200", bgColor = "transparent", ...props }) {
  const textStyles = `text-${iconColor} text-md font-bold`;
  const containerStyles = `bg-${bgColor} py-4 px-6`;
  const transitionStyles = "transition-all duration-250 ease-in-out";

  const styles = `${textStyles} ${containerStyles} ${transitionStyles}`;
  return (
    <Btn {...props} className={styles + " " + className}>
      {Icon}
    </Btn>
  );
}

export default IconBtn;
