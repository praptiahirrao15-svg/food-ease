import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./assets/components/Navbar";
import { FloatingCart } from "./assets/components/FloatingCart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState({});

  const totalItems = useMemo(
    () => Object.values(cartItems).reduce((sum, quantity) => sum + quantity, 0),
    [cartItems]
  );

  const handleAddItem = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: current - 1 };
    });
  };

  return (
    <>
      <Navbar cartCount={totalItems} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              onAddItem={handleAddItem}
              onRemoveItem={handleRemoveItem}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              cartItems={cartItems}
              onAddItem={handleAddItem}
              onRemoveItem={handleRemoveItem}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FloatingCart cartCount={totalItems} />
    </>
  );
}

export default App;
