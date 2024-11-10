import AddProduct from "./components/Product/AddProduct";
import ProductDetails from "./components/Product/ProductDetails";
import ProductList from "./components/Product/ProductList";

function App() {
  return (
    <div className="flex m-2">
      <AddProduct />
      <ProductList />
      <ProductDetails id={10} />
    </div>
  );
}

export default App;
