import Btn from "./Btn";

function IconBtn({ Icon, className, ...props }) {
  const styles = ["text-md font-bold", "transition-all duration-250 ease-in-out", className];

  return (
    <Btn {...props} className={styles.flat(Infinity).join(" ")}>
      {Icon}
    </Btn>
  );
}

export default IconBtn;
