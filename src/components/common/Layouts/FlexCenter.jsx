function FlexCenter({ className, children, col = false, ...props }) {
  const styles = ["flex items-center", col && "flex-col", className];

  return (
    <div {...props} className={styles.flat(Infinity).join(" ")}>
      {children}
    </div>
  );
}

export default FlexCenter;
