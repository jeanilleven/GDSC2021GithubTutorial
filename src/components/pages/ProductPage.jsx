import { useState } from "react";
import { Image, LightBox } from "../common";
import { CloseBtn, ImageBtn } from "../common/Buttons";
import { ProductCarousel, ProductDetails, ProductOrder } from "../modules/Product";

function ProductPage({ product, quantity, onOrder, onIncrement, onDecrement }) {
  const { name, company, description, price, discount, images } = product;
  const [currentImg, setCurrentImg] = useState(images[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <main className="flex flex-col lg:flex-row max-w-screen-lg m-auto lg:pt-32">
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
      </main>
      <LightBox isOpen={isLightboxOpen} className="hidden lg:block">
        <div className="flex items-end flex-col w-1/3 px-6 pt-20 m-auto">
          <CloseBtn
            onClose={() => setIsLightboxOpen((toggle) => !toggle)}
            className="p-2 mb-4 -mr-1.5"
            size={22}
          />
          <ProductCarousel
            images={images}
            selected={currentImg}
            onSelect={setCurrentImg}
            chevronSize={22}
            chevronStyles="p-4 active:scale-110 transform"
            chevronNextStyle="translate-x-1/2"
            chevronPrevStyle="-translate-x-1/2"
            thumbnailsStyle="px-10"
            Display={(img) => <Image src={img.imageUrl} alt={img.name} className="rounded-xl" />}
          />
        </div>
      </LightBox>
    </>
  );
}

export default ProductPage;
