function Lightbox({ children, className = "", isOpen = false, ...props }) {
  const openStyle = "overflow-auto top-0 bottom-0 opacity-100";
  const closeStyle = "overflow-hidden -top-full opacity-0";
  const styles = [
    "fixed w-full",
    "bg-black bg-opacity-75",
    "transition-opacity duration-500 ease-in-out",
    isOpen ? openStyle : closeStyle,
    className,
  ];

  return (
    <section {...props} id="lightbox" className={styles.flat(Infinity).join(" ")}>
      {children}
    </section>
  );
}

export default Lightbox;
