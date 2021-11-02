function LightBox({ children, className, isOpen, ...props }) {
  const baseStyles = "fixed w-full bg-black bg-opacity-75";
  const transitionStyles = "transition-all duration-500 ease-in-out";

  const openStyles = "overflow-auto top-0 bottom-0 opacity-100";
  const hiddenStyles = "overflow-hidden -top-full opacity-0";

  const styles = `${baseStyles} ${isOpen ? openStyles : hiddenStyles} ${transitionStyles}`;

  return (
    <div {...props} id="lightbox" className={styles + " " + className}>
      {children}
    </div>
  );
}

export default LightBox;
