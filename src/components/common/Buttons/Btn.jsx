function Btn({ className, children, ...props }) {
  const styles = ["disabled:opacity-50 disabled:cursor-default", "hover:opacity-70", className];

  return (
    <button {...props} className={styles.flat(Infinity).join(" ")}>
      {children}
    </button>
  );
}

export default Btn;
