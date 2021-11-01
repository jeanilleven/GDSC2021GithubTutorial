function Header({ children, className, ...props }) {
  return (
    <h1 {...props} className={"font-bold text-3xl text-neutral-400 leading-8 " + className}>
      {children}
    </h1>
  );
}

export default Header;
