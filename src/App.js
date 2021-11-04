import Navbar from './Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import ProductPage from "./components/pages/ProductPage";
import { getProduct } from "./services/productService";

const product = getProduct();

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <ProductPage product={product} />;
    </div>
  );

}
export default App;
