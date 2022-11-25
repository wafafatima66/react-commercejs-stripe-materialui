import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

// import ThemeSwitch from './components/Inputs/ThemeSwitch';
import { Products, Navbar, Cart, Checkout , Hero , Footer} from "./components";
// import Hero from "./components/Hero/Hero";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };
  const handleUpdateCart = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });
    setCart(item);
  };
  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);
    setCart(item);
  };
  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty();
    setCart(item);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();

    } catch (error) {
      refreshCart();
      setErrorMessage(error.data.error.message);
    }
  };
  // console.log(cart.total_items);

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        {/* <ThemeSwitch/> */}
        <Routes>
          <Route
            path="/"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleUpdateCart={handleUpdateCart}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
          <Route 
            path="/checkout" 
            element={
              <Checkout 
                cart={cart} 
                order = {order}
                onCaptureCheckout = {handleCaptureCheckout}
                error = {errorMessage}
              />
            } 
          />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
