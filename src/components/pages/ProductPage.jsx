import { useState } from "react";
import { ProductLightbox, ProductSection } from "../modules/Product";

function ProductPage({ product }) {
  const [currentImg, setCurrentImg] = useState(product.images[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <main>
      <ProductSection
        product={product}
        image={currentImg}
        onImageSelect={setCurrentImg}
        onImageClick={() => setIsLightboxOpen((v) => !v)}
        quantity={0}
        // onOrder
        // onIncrement
        // onDecrement
      />
      <ProductLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen((v) => !v)}
        images={product.images}
        selected={currentImg}
        onSelect={setCurrentImg}
      />
    </main>
  );
}

export default ProductPage;
