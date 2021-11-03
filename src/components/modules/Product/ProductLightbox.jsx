import { Image, LightBox } from "../../common";
import { CloseBtn } from "../../common/Buttons";
import ProductCarousel from "./ProductCarousel";

function ProductLightbox({ onClose, images, selected, onSelect, ...props }) {
  return (
    <LightBox {...props} className="hidden lg:block">
      <div className="flex items-end flex-col w-1/3 px-6 pt-20 m-auto">
        <CloseBtn onClose={onClose} className="p-2 mb-4 -mr-1.5" size={22} />
        <ProductCarousel
          images={images}
          selected={selected}
          onSelect={onSelect}
          chevronSize={22}
          chevronStyles="p-4 active:scale-110 transform"
          chevronNextStyle="translate-x-1/2"
          chevronPrevStyle="-translate-x-1/2"
          thumbnailsStyle="px-10"
          Display={(img) => <Image src={img.imageUrl} alt={img.name} className="rounded-xl" />}
        />
      </div>
    </LightBox>
  );
}

export default ProductLightbox;
