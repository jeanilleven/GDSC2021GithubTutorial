import { useState } from "react";
import { ProductLightbox, ProductSection } from "../modules/Product";

function ProductPage({ product }) {
  const [currentImg, setCurrentImg] = useState(product.images[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const onIncrement = () =>{
    const newQuantity = quantity+1;
    setQuantity(newQuantity)
  }
  const onDecrement = () =>{
    if(quantity>0){
      const newQuantity = quantity-1;
      setQuantity(newQuantity)
    }
    
  }
  return (
    <main>
      <ProductSection
        product={product}
        image={currentImg}
        onImageSelect={setCurrentImg}
        onImageClick={() => setIsLightboxOpen(true)}
        onIncrement = {onIncrement}
        onDecrement = {onDecrement}
        quantity={quantity}
      />
      <ProductLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={product.images}
        selected={currentImg}
        onSelect={setCurrentImg}
      />
    </main>
  );
}

export default ProductPage;
