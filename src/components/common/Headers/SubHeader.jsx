function SubHeader({ children, className, ...props }) {
  const styles = ["font-bold text-xs uppercase tracking-widest text-primary-200", "lg:text-sm", className];

  return (
    <h2 {...props} className={styles.flat(Infinity).join(" ")}>
      {children}
    </h2>
  );
}

export default SubHeader;
