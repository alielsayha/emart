import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Products from "./Component/Products";
import Product from "./Component/Product";
import Cart from "./Component/Cart";
import LogIn from "./Component/button/logIn";
import About from "./Component/About";
import Contact from "./Component/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
