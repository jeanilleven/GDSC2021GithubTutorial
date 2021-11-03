import { useState } from "react";
import { ProductCarousel, ProductDetails, ProductLightbox, ProductOrder } from ".";
import { ImageBtn } from "../../common/Buttons";

function ProductSection({ product, quantity, onOrder, onIncrement, onDecrement }) {
  const { name, company, description, price, discount, images } = product;
  const [currentImg, setCurrentImg] = useState(images[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <main>
      <section className="flex flex-col lg:flex-row max-w-screen-lg m-auto lg:pt-32">
        <ProductCarousel
          images={images}
          selected={currentImg}
          onSelect={setCurrentImg}
          className="lg:mr-28"
          chevronStyles="p-3 mx-4 lg:hidden active:scale-125 transform"
          Display={(img) => (
            <ImageBtn
              src={img.imageUrl}
              alt={img.name}
              onClick={() => setIsLightboxOpen((toggle) => !toggle)}
              className="rounded-none cursor-default hover:opacity-100 lg:cursor-pointer lg:rounded-2xl"
            />
          )}
        />
        <section className="font-display py-4 px-2 m-auto w-11/12 lg:p-0 lg:mt-14 lg:ml-4 lg:w-full">
          <ProductDetails
            name={name}
            company={company}
            description={description}
            price={price}
            discount={discount}
          />
          <ProductOrder
            quantity={quantity}
            onOrder={onOrder}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            className="lg:flex-row justify-center mt-5 lg:mt-9"
            col
          />
        </section>
      </section>
      <ProductLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen((toggle) => !toggle)}
        images={images}
        selected={currentImg}
        onSelect={setCurrentImg}
      />
    </main>
  );
}

export default ProductSection;
