function Header({ props, children }) {
  return (
    <h1 {...props} className="font-bold text-3xl text-neutral-400 leading-8 mb-4">
      {children}
    </h1>
  );
}

export default Header;
