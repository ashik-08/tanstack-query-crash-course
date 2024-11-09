import ProductDetails from "./components/Product/ProductDetails";
import ProductList from "./components/Product/ProductList";

function App() {
  return (
    <div className="flex m-2">
      <ProductList />
      <ProductDetails id={1} />
    </div>
  );
}

export default App;
