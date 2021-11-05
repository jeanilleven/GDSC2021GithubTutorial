function ListItem({ items, keyExtractor, ListComponent, className = "", ...props }) {
  const styles = ["list-none", className];

  return (
    <ul {...props} className={styles.flat(Infinity).join(" ")}>
      {items.map((item) => (
        <li key={keyExtractor(item)}>{ListComponent(item)}</li>
      ))}
    </ul>
  );
}

export default ListItem;
