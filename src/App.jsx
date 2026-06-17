import { useEffect, useMemo, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "./assets/components/Navbar";
import { FloatingCart } from "./assets/components/FloatingCart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { supabase } from "./supabase";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const totalItems = useMemo(
    () => Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const handleAddItem = async (food) => {
    const currentQuantity = cartItems[food.id]?.quantity || 0;
    const newQuantity = currentQuantity + 1;

    setCartItems((prev) => ({
      ...prev,
      [food.id]: {
        product: food,
        quantity: newQuantity,
      },
    }));

    navigate("/cart");

    const { error } = await supabase.from("cart").upsert(
      [
        {
          product_id: food.id,
          name: food.name,
          price: food.price,
          image: food.img,
          quantity: newQuantity,
        },
      ],
      { onConflict: "product_id" }
    );

    if (error) {
      console.error("Supabase cart error:", error.message);
    }
  };

  const handleRemoveItem = async (id) => {
    const currentQuantity = cartItems[id]?.quantity || 0;
    const newQuantity = currentQuantity - 1;

    setCartItems((prev) => {
      if (currentQuantity <= 1) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return {
        ...prev,
        [id]: { ...prev[id], quantity: newQuantity },
      };
    });

    if (newQuantity > 0) {
      const { error } = await supabase.from("cart").upsert(
        [
          {
            product_id: id,
            quantity: newQuantity,
          },
        ],
        { onConflict: "product_id" }
      );
      if (error) {
        console.error("Supabase cart error:", error.message);
      }
    } else {
      const { error } = await supabase.from("cart").delete().eq("product_id", id);
      if (error) {
        console.error("Supabase cart remove error:", error.message);
      }
    }
  };

  const fetchCart = async () => {
    const { data, error } = await supabase.from("cart").select("*");
    if (error) {
      console.error("Supabase load cart error:", error.message);
      return;
    }

    if (!data) {
      return;
    }

    const normalized = data.reduce((acc, row) => {
      acc[row.product_id] = {
        product: {
          id: row.product_id,
          name: row.name,
          price: row.price,
          img: row.image || row.img,
        },
        quantity: row.quantity,
      };
      return acc;
    }, {});

    setCartItems(normalized);
  };

  const handleCheckout = async () => {
    const items = Object.values(cartItems).map(({ product, quantity }) => ({
      product_id: product.id,
      name: product.name,
      price: product.price,
      quantity,
    }));

    if (items.length === 0) {
      return;
    }

    const { error: orderError } = await supabase.from("orders").insert([
      {
        items: JSON.stringify(items),
        total: totalItems,
        status: "pending",
      },
    ]);

    if (orderError) {
      console.error("Supabase order error:", orderError.message);
      return;
    }

    const { error: clearError } = await supabase.from("cart").delete().neq("product_id", "");
    if (clearError) {
      console.error("Supabase clear cart error:", clearError.message);
      return;
    }

    setCartItems({});
    navigate("/");
  };

  useEffect(() => {
    fetchCart();
  }, []);

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
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onAddItem={handleAddItem}
              onRemoveItem={handleRemoveItem}
              onCheckout={handleCheckout}
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
