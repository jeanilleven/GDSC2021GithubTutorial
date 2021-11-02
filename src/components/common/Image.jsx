function Image({ className, alt, ...props }) {
  return <img className={"w-full object-cover " + className} alt={alt} {...props} />;
}

export default Image;
