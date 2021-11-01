function Header({ children, className, ...props }) {
  return (
    <h1
      {...props}
      className={"font-bold text-3xl text-neutral-400 leading-8 lg:text-5xl lg:tracking-tight " + className}
    >
      {children}
    </h1>
  );
}

export default Header;
