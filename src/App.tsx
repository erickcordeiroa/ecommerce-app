import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ProductUnique from "./pages/Product/ProductUnique";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<About />} />
            <Route path="product/:id" element={<ProductUnique />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
