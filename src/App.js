import ProductPage from "./components/pages/ProductPage";
import { getProduct } from "./services/productService";

const product = getProduct();

function App() {
  return <ProductPage product={product} />;
}

export default App;
