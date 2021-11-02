function Btn({ className, children, ...props }) {
  return (
    <button {...props} className={"disabled:opacity-50 hover:opacity-70 " + className}>
      {children}
    </button>
  );
}

export default Btn;
