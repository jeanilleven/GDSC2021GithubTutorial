function FlexCenter({ className, children, col = false, ...props }) {
  const baseStyles = "flex items-center";
  const colStyle = col ? "flex-col" : "";

  return (
    <div {...props} className={baseStyles + " " + colStyle + " " + className}>
      {children}
    </div>
  );
}

export default FlexCenter;
