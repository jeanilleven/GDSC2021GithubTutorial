function PriceTag({ value = 0, crossedOut = false, className, ...props }) {
  const styles = [
    `${crossedOut ? "text-neutral-200 text-base line-through" : "text-neutral-400 text-3xl"} font-bold`,
    className,
  ];

  return (
    <span {...props} className={styles.flat(Infinity).join(" ")}>
      {"$" + value.toFixed(2).toString()}
    </span>
  );
}

export default PriceTag;
