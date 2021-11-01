function PriceTag({ price = 0, crossed = false, className, ...props }) {
  const color = `text-neutral-${crossed ? 200 : 400}`;
  const size = `text-${crossed ? "base" : "3xl"}`;
  const styles = `font-bold ${color} ${size} ${crossed && "line-through"}`;

  return (
    <p {...props} className={styles + " " + className}>
      {"$" + price.toFixed(2).toString()}
    </p>
  );
}

export default PriceTag;
