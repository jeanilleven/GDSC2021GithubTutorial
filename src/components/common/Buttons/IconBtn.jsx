import Btn from "./Btn";

function IconBtn({ Icon, className, ...props }) {
  const textStyles = "text-primary-200 text-md font-bold";
  const activeStyles = "active:translate-y-0.5 transform";
  const containerStyles = "rounded-lg py-4 px-6";
  const transitionStyles = "transition-all duration-250 ease-in-out";

  const styles = `${activeStyles} ${textStyles} ${containerStyles} ${transitionStyles}`;
  return (
    <Btn {...props} className={styles + " " + className}>
      {Icon}
    </Btn>
  );
}

export default IconBtn;
