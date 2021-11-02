import { useState } from "react";
import { ImCross } from "react-icons/im";
import { IconBtn, ImageBtn } from "../common/Buttons";
import Image from "../common/Image";
import LightBox from "../common/LightBox";
import { ProductDetails, ProductOrder, ProductPreview } from "../modules/Product";

function ProductPage({
  name,
  company,
  description,
  price,
  discount,
  quantity,
  onOrder,
  onIncrement,
  onDecrement,
  images,
}) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <main className="flex flex-col lg:flex-row max-w-screen-lg m-auto lg:pt-32">
        <ProductPreview
          previewSet={images}
          className="lg:mr-28"
          chevronStyles="p-3 mx-4 lg:hidden active:scale-125 transform"
          DisplayPreview={(img) => (
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
          <IconBtn
            Icon={<ImCross size={22} />}
            onClick={() => setIsLightboxOpen((toggle) => !toggle)}
            className="text-primary-200 p-2 mb-4 -mr-1.5"
          />
          <ProductPreview
            previewSet={images}
            chevronSize={22}
            chevronStyles="p-4 active:scale-110 transform"
            chevronNextStyle="translate-x-1/2"
            chevronPrevStyle="-translate-x-1/2"
            thumbnailsStyle="px-10"
            DisplayPreview={(img) => <Image src={img.imageUrl} alt={img.name} className="rounded-xl" />}
          />
        </div>
      </LightBox>
    </>
  );
}

export default ProductPage;
