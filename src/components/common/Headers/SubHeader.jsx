function SubHeader({ children, className, ...props }) {
  return (
    <h2
      {...props}
      className={"font-bold tracking-widest text-xs uppercase text-primary-200 lg:text-sm " + className}
    >
      {children}
    </h2>
  );
}

export default SubHeader;
