import { ImageBtn } from "./../common/Buttons";

function ImageThumbnails({ onSelect, selected, imageSet, className, ...props }) {
  const styles = ["list-none", className];

  return (
    <ul {...props} className={styles.flat(Infinity).join(" ")}>
      {imageSet.map((image) => (
        <li key={image._id}>
          <ImageBtn
            name={image.alt}
            src={image.thumbnailUrl}
            onClick={() => onSelect(image)}
            isSelected={image._id === selected._id}
            className="rounded-lg"
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageThumbnails;
