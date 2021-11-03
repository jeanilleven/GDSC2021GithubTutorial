import { ImageBtn } from "../../common/Buttons";
import Carousel from "../Carousel";

function ProductCarousel({ images, selected, onSelect, ...props }) {
  return (
    <Carousel
      {...props}
      items={images}
      selected={selected}
      onSelect={onSelect}
      keyExtractor={(img) => img._id}
      Thumbnail={(img) => (
        <ImageBtn
          name={img.alt}
          src={img.thumbnailUrl}
          onClick={() => onSelect(img)}
          isSelected={img._id === selected._id}
          className="rounded-lg"
        />
      )}
    />
  );
}

export default ProductCarousel;
