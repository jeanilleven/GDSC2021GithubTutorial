function Image({ alt, className = "", ...props }) {
  const styles = ["w-full object-cover", className];

  return <img className={styles.flat(Infinity).join(" ")} alt={alt} {...props} />;
}

export default Image;
