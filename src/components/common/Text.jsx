function Text({ children, className, ...props }) {
  return (
    <p {...props} className={"text-neutral-300 leading-6 " + className}>
      {children}
    </p>
  );
}

export default Text;
