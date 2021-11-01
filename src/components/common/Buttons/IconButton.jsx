function IconButton({ Icon, className, ...props }) {
  const textStyles = "text-primary-200 text-md font-bold";
  const stateStyles = "hover:opacity-70 disabled:opacity-50 active:translate-y-0.5 transform";
  const containerStyles = "rounded-lg py-4 px-6";
  const transitionStyles = "transition-all duration-250 ease-in-out";

  const styles = `${stateStyles} ${textStyles} ${containerStyles} ${transitionStyles}`;
  return (
    <button {...props} className={styles + " " + className}>
      {Icon}
    </button>
  );
}

export default IconButton;
