import logo from './logo.svg';
import './App.css';
import ProductList from './component/ProductList';
var data = ["iphone 7", "iphone 8", "iphone 9"];
function App() {
  return (
    <ProductList list={data} />
  );
}

export default App;
