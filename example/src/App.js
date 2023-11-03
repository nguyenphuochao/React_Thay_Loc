import logo from './logo.svg';
import './App.css';
import ProductList from './component/ProductList';
import TinhTongButton from './component/TinhTongButton';
import TinhTongFunc from './component/TinhTongFunc';


// component cha
function App() {
  const data = ["laptop", "điện thoại", "phụ kiện"]; // dữ liệu của component cha có
  return (
    // <ProductList list={data} /> //render ProductList
    // <TinhTongButton /> //render TinhTong viết theo class component
    <TinhTongFunc /> //render TinhTong viết theo function component
  );
}

export default App;
