function PriceTag({ value = 0, crossedOut = false, className, ...props }) {
  const color = `text-neutral-${crossedOut ? 200 : 400}`;
  const size = `text-${crossedOut ? "base" : "3xl"}`;
  const styles = `font-bold ${color} ${size} ${crossedOut && "line-through"}`;

  return (
    <span {...props} className={styles + " " + className}>
      {"$" + value.toFixed(2).toString()}
    </span>
  );
}

export default PriceTag;
