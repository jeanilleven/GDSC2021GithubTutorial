function PriceTag({ price = 0, crossedOut = false, className, ...props }) {
  const color = `text-neutral-${crossedOut ? 200 : 400}`;
  const size = `text-${crossedOut ? "base" : "3xl"}`;
  const styles = `font-bold ${color} ${size} ${crossedOut && "line-through"}`;

  return (
    <p {...props} className={styles + " " + className}>
      {"$" + price.toFixed(2).toString()}
    </p>
  );
}

export default PriceTag;
