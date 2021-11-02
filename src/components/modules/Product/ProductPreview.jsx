import { useState } from "react";
import Chevrons from "../Chevrons";
import ImageThumbnails from "../ImageThumbnails";

function ProductPreview({
  previewSet,
  DisplayPreview,
  thumbnailsStyle,
  chevronStyles,
  chevronSize = 16,
  chevronNextStyle = "",
  chevronPrevStyle = "",
  ...props
}) {
  const [currentImg, setCurrentImg] = useState(previewSet[0]);

  function handleNext() {
    const idx = previewSet.indexOf(currentImg);
    const image = previewSet[idx === previewSet.length - 1 ? 0 : idx + 1];

    setCurrentImg(image);
  }

  function handlePrev() {
    const idx = previewSet.indexOf(currentImg);
    const image = previewSet[idx === 0 ? previewSet.length - 1 : idx - 1];

    setCurrentImg(image);
  }

  return (
    <section {...props}>
      <div className="relative">
        <Chevrons
          size={chevronSize}
          onNext={handleNext}
          onPrev={handlePrev}
          className={chevronStyles}
          nextStyle={chevronNextStyle}
          prevStyle={chevronPrevStyle}
        />
        {DisplayPreview(currentImg)}
      </div>
      <ImageThumbnails
        imageSet={previewSet}
        onSelect={(img) => setCurrentImg(img)}
        selected={currentImg}
        className={"lg:flex-center lg:gap-8 mt-9 hidden lg:flex " + thumbnailsStyle}
      />
    </section>
  );
}

export default ProductPreview;
