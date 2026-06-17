import { useEffect, useMemo, useState } from "react";
import { supabase } from "./supabase";
import "./cart.css";

export default function Cart({ cartItems = {}, onCheckout }) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [supabaseItems, setSupabaseItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const localItems = useMemo(
    () =>
      Object.values(cartItems).map(({ product, quantity }) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        quantity,
      })),
    [cartItems]
  );

  async function fetchCart() {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.from("cart").select("*");
      if (error) throw error;
      setSupabaseItems(data || []);
      setErrorMessage("");
    } catch (error) {
      console.error("Error fetching cart:", error);
      setErrorMessage("Unable to load cart items. Check browser console for details.");
    } finally {
      setIsLoading(false);
    }
  }

  async function addToCart() {
    if (!productName.trim() || !price.trim()) {
      setErrorMessage("Please enter both product name and price.");
      return;
    }

    setIsSaving(true);
    setErrorMessage("");

    try {
      const { error } = await supabase.from("cart").insert([
        {
          Product_Name: productName.trim(),
          price: price.trim(),
        },
      ]);

      if (error) throw error;

      setProductName("");
      setPrice("");
      await fetchCart();
    } catch (error) {
      console.error("Error adding item:", error);
      setErrorMessage(error?.message || String(error) || "Unable to add item to Supabase.");
    } finally {
      setIsSaving(false);
    }
  }

  async function deleteItem(id) {
    try {
      const { error } = await supabase.from("cart").delete().eq("id", id);
      if (error) throw error;
      await fetchCart();
    } catch (error) {
      console.error("Error deleting item:", error);
      setErrorMessage("Unable to delete item. Check console for details.");
    }
  }

  async function updateItem(id) {
    try {
      const { error } = await supabase
        .from("cart")
        .update({ price: "₹999" })
        .eq("id", id);
      if (error) throw error;
      await fetchCart();
    } catch (error) {
      console.error("Error updating item:", error);
      setErrorMessage("Unable to update item. Check console for details.");
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  const tableRows = useMemo(
    () =>
      supabaseItems.map((item) => ({
        id: item.id,
        name: item.name || item.Product_Name || item.product_name || "Untitled product",
        price: item.price,
      })),
    [supabaseItems]
  );

  const totalPrice = useMemo(
    () =>
      tableRows.reduce((sum, item) => {
        const price = Number(item.price.replace(/[^0-9.]/g, ""));
        return sum + price;
      }, 0),
    [tableRows]
  );

  return (
    <div className="cart-page page-container">
      <div className="cart-hero">
        <div>
          <p className="eyebrow">Your cart</p>
          <h1 className="cart-title">Aesthetic cart experience</h1>
          <p className="cart-description">
            Items added from the shop sync to Supabase automatically. You can also add a quick entry below and manage stored items in one beautiful view.
          </p>
        </div>
        <div className="cart-badges">
          <span className="cart-badge">Local items: {localItems.length}</span>
          <span className="cart-badge badge-secondary">Supabase items: {tableRows.length}</span>
        </div>
      </div>

      <div className="cart-grid">
        <aside className="cart-panel">
          <div className="cart-card">
            <h2>Quick add item</h2>
            <div className="cart-field">
              <label>Product name</label>
              <input
                type="text"
                placeholder="Glow serum"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="cart-field">
              <label>Price</label>
              <input
                type="text"
                placeholder="799"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={addToCart} disabled={isSaving}>
              {isSaving ? "Saving..." : "Add to Supabase"}
            </button>
            {errorMessage && <div className="cart-error">{errorMessage}</div>}
          </div>

          {localItems.length > 0 && (
            <div className="cart-card">
              <h2>Recent local additions</h2>
              <div className="cart-local-list">
                {localItems.map((item) => (
                  <div key={item.id} className="local-item">
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>

        <section className="cart-items-panel">
          <div className="cart-card cart-summary-card">
            <div>
              <h2>Supabase cart items</h2>
              <p className="cart-summary-text">Manage your stored cart data from Supabase, including delete and update actions.</p>
            </div>
            <button className="btn btn-secondary" onClick={fetchCart} disabled={isLoading}>
              {isLoading ? "Refreshing..." : "Refresh"}
            </button>
          </div>

          {tableRows.length === 0 ? (
            <div className="cart-empty">
              <p>Your Supabase cart is empty. Add items from the shop or quick add form.</p>
            </div>
          ) : (
            <div className="cart-table-wrapper">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((item) => {
                    const unitPrice = Number(item.price.replace(/[^0-9.]/g, ""));
                    return (
                      <tr key={item.id} className="cart-row">
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td className="cart-price">₹{unitPrice.toFixed(2)}</td>
                        <td className="cart-actions">
                          <button className="btn btn-secondary" type="button" onClick={() => deleteItem(item.id)}>
                            Delete
                          </button>
                          <button className="btn" type="button" onClick={() => updateItem(item.id)}>
                            Update price
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="cart-summary">
                <div className="cart-summary-left">
                  <strong>{tableRows.length} items</strong>
                  <p>Total payable amount: ₹{totalPrice.toFixed(2)}</p>
                </div>
                <button type="button" className="checkout-button" onClick={onCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
