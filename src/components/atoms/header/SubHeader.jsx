function SubHeader({ children, ...props }) {
  return (
    <h2 {...props} className="font-bold tracking-widest text-xs uppercase text-primary-200 mb-3">
      {children}
    </h2>
  );
}

export default SubHeader;
