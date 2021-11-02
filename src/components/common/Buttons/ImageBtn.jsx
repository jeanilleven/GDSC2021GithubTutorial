import Image from "../Image";
import Btn from "./Btn";

function ImageBtn({ name, className, src, isSelected = false, ...props }) {
  const selectedStyle = isSelected ? "outline-orange hover:opacity-100 hover:cursor-default" : "";
  const styles = selectedStyle + " overflow-hidden";

  return (
    <Btn {...props} name={name} className={styles + " " + className}>
      <Image src={src} alt={name} className={isSelected ? "opacity-50" : ""} />
    </Btn>
  );
}

export default ImageBtn;
