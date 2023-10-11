import logo from './logo.svg';
import './App.css';
import Pricing from "./Component/Pricing";
import Home from "./Component/Home";
import Nav from './Component/Nav';
import Product from './Component/Product';
import Blog from './Component/Blog';


function App() {
  return (
    <div className="App">
      <Pricing/>
      <Home/>
      <Nav/>
      <Product/>
      <Blog/>
    </div>
  );
}

export default App;
