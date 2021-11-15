function PriceTag({ value = 0, ...props }) {
  return <span {...props}>{"$" + value.toFixed(2).toString()}</span>;
}

export default PriceTag;
