import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import PromoApp from "./components/PromoApp";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/Contexto/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
   <CartContextProvider>
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <PromoApp />
        <Footer />
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;