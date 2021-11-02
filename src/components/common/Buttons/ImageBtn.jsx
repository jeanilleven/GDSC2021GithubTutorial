import Image from "../Image";
import Btn from "./Btn";

function ImageBtn({ name, className, src, isSelected = false, ...props }) {
  const selectedStyle = isSelected ? "outline-orange " : "";
  const styles = selectedStyle + "overflow-hidden rounded-lg";

  return (
    <Btn {...props} name={name} className={styles + " " + className}>
      <Image src={src} alt={name} />
    </Btn>
  );
}

export default ImageBtn;
