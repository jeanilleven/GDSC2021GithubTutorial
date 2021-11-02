import Btn from "./Btn";

function IconBtn({ Icon, className, ...props }) {
  const baseStyles = "text-md font-bold active:scale-125 transform";
  const transitionStyles = "transition-all duration-250 ease-in-out";

  const styles = `${baseStyles} ${transitionStyles}`;
  return (
    <Btn {...props} className={styles + " " + className}>
      {Icon}
    </Btn>
  );
}

export default IconBtn;
