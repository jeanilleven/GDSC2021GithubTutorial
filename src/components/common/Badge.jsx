function Badge({ text, className }) {
  return (
    <span className={"bg-primary-100 text-primary-200 font-bold rounded-md py-0.5 px-2.5 " + className}>
      {text}
    </span>
  );
}

export default Badge;
