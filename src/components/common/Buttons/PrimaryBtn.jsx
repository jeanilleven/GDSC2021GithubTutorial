function PrimaryBtn({ className, children, RightIcon, LeftIcon, ...props }) {
  const textStyles = "bg-primary-200 font-bold text-white";
  const containerStyles = "rounded-lg shadow-xl py-4 px-8";
  const flexStyles = "flex justify-center items-center";
  const stateStyles = "hover:opacity-80 disabled:opacity-50 active:translate-y-0.5 transform";
  const transitionStyle = "transition-all duration-250 ease-in-out";

  const styles = `${textStyles} ${stateStyles} ${containerStyles} ${transitionStyle} ${flexStyles}`;

  return (
    <button {...props} className={`${styles} ${className}`}>
      {LeftIcon}
      {children}
      {RightIcon}
    </button>
  );
}

export default PrimaryBtn;
