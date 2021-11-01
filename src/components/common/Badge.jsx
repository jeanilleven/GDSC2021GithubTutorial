function Badge({ text, className }) {
  return (
    <div className={"bg-primary-100 text-primary-200 font-bold rounded-md py-0.5 px-2.5 " + className}>
      {text}
    </div>
  );
}

export default Badge;
