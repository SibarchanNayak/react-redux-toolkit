import Header from "./pages/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import CartList from "./pages/CartList";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
