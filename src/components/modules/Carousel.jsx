import Chevrons from "./Chevrons";
import ImageThumbnails from "./ImageThumbnails";

function Carousel({
  items,
  selected,
  onSelect,
  Display,
  chevronStyles,
  thumbnailsStyle,
  chevronSize = 16,
  chevronNextStyle = "",
  chevronPrevStyle = "",
  ...props
}) {
  function handleNext() {
    const idx = items.indexOf(items);
    const item = items[idx === items.length - 1 ? 0 : idx + 1];

    onSelect(item);
  }

  function handlePrev() {
    const idx = items.indexOf(items);
    const item = items[idx === 0 ? items.length - 1 : idx - 1];

    onSelect(item);
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
        {Display(selected)}
      </div>
      <ImageThumbnails
        imageSet={items}
        onSelect={onSelect}
        selected={selected}
        className={["lg:flex-center lg:gap-8 mt-9 hidden lg:flex", thumbnailsStyle]}
      />
    </section>
  );
}

export default Carousel;
