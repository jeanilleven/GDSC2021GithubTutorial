import Btn from "./Btn";

function PrimaryBtn({ children, RightIcon, LeftIcon, className = "", ...props }) {
  const styles = [
    "bg-primary-200",
    "font-bold text-white",
    "rounded-lg py-4 px-8",
    "flex justify-center items-center",
    "active:translate-y-0.5 transform",
    "transition-all duration-250 ease-in-out",
    className,
  ];

  return (
    <Btn {...props} className={styles.flat(Infinity).join(" ")}>
      {LeftIcon}
      {children}
      {RightIcon}
    </Btn>
  );
}

export default PrimaryBtn;
