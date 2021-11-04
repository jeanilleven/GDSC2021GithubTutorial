import { ProductCarousel, ProductDetails, ProductOrder } from ".";
import { ImageBtn } from "../../common/Buttons";

function ProductSection({
  product,
  quantity,
  image,
  onImageSelect,
  onOrder,
  onIncrement,
  onDecrement,
  onImageClick,
}) {
  const { name, company, description, price, discount, images } = product;

  return (
    <section className="flex flex-col lg:flex-row max-w-screen-lg m-auto lg:px-8 lg:pt-32">
      <ProductCarousel
        images={images}
        selected={image}
        onSelect={onImageSelect}
        className="lg:mr-28"
        chevronStyles="p-3 mx-4 lg:hidden active:scale-125 transform"
        Display={(img) => (
          <ImageBtn
            src={img.imageUrl}
            alt={img.name}
            onClick={onImageClick}
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
  );
}

export default ProductSection;
