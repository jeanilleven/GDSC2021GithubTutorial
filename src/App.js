import ProductPage from "./components/pages/ProductPage";
import { getProduct } from "./services/productService";

const product = getProduct();

function App() {
  return (
    <ProductPage
      product={product}
      quantity={0}
      // onOrder
      // onIncrement
      // onDecrement
    />
  );
}

export default App;
