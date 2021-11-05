function Text({ children, className = "", ...props }) {
  const styles = ["text-neutral-300 leading-6", className];

  return (
    <p {...props} className={styles.flat(Infinity).join(" ")}>
      {children}
    </p>
  );
}

export default Text;
