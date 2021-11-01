function SubHeader({ children, className, ...props }) {
  return (
    <h2 {...props} className={"font-bold tracking-widest text-xs uppercase text-primary-200 " + className}>
      {children}
    </h2>
  );
}

export default SubHeader;
