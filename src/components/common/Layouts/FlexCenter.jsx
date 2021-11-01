function FlexCenter({ className, children, ...props }) {
  return (
    <div {...props} className={"flex items-center " + className}>
      {children}
    </div>
  );
}

export default FlexCenter;
