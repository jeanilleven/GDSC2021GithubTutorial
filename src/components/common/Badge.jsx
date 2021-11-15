function Badge({ text, className = "", ...props }) {
  const styles = ["bg-primary-100 text-primary-200 font-bold", "rounded-md py-0.5 px-2.5", className];

  return (
    <span {...props} className={styles.flat(Infinity).join(" ")}>
      {text}
    </span>
  );
}

export default Badge;
