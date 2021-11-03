import { ProductSection } from "../modules/Product";

function ProductPage({ product }) {
  return (
    <>
      <ProductSection
        product={product}
        quantity={0}
        // onOrder
        // onIncrement
        // onDecrement
      />
    </>
  );
}

export default ProductPage;
