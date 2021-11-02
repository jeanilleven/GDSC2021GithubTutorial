import Image from "../Image";
import Btn from "./Btn";

function ImageBtn({ name, className, src, isSelected = false, ...props }) {
  const styles = [
    "overflow-hidden",
    isSelected && "outline-orange hover:opacity-100 hover:cursor-default",
    className,
  ];

  return (
    <Btn {...props} name={name} className={styles.flat(Infinity).join(" ")}>
      <Image src={src} alt={name} className={isSelected && "opacity-70"} />
    </Btn>
  );
}

export default ImageBtn;
