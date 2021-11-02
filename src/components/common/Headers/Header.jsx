function Header({ children, className, ...props }) {
  const styles = [
    "font-bold text-3xl text-neutral-400 leading-8",
    "lg:text-5xl lg:tracking-tight",
    className,
  ];

  return (
    <h1 {...props} className={styles.flat(Infinity).join(" ")}>
      {children}
    </h1>
  );
}

export default Header;
