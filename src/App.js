import ProductPage from "./components/pages/ProductPage";
import { getImages } from "./services/imageService";

const images = getImages();

function App() {
  return (
    <ProductPage
      name="Fall Limited Edition Sneakers"
      company="Sneaker Company"
      description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
      price={250}
      discount={0.5}
      quantity={0}
      images={images}
      // onOrder
      // onIncrement
      // onDecrement
    />
  );
}

export default App;
