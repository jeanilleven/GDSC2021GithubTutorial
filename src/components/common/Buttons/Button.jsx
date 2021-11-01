function Button({ className, children, RightIcon, LeftIcon, ...props }) {
  const textStyles = "bg-primary-200 font-bold text-white";
  const containerStyles = "rounded-lg w-full shadow-xl py-4";
  const flexStyles = "flex justify-center items-center";

  return (
    <button {...props} className={`${textStyles} ${containerStyles} ${flexStyles} ${className}`}>
      {RightIcon}
      {children}
      {LeftIcon}
    </button>
  );
}

export default Button;