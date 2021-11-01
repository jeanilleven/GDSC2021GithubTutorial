function IconButton({ Icon, className, ...props }) {
  return (
    <button {...props} className={"text-primary-200 text-md font-bold rounded-lg py-4 px-6 " + className}>
      {Icon}
    </button>
  );
}

export default IconButton;
