import { useNavigate } from "react-router-dom";

export function FloatingCart({ cartCount }) {
  const navigate = useNavigate();

  return (
    <button className="floating-cart" type="button" onClick={() => navigate("/cart")}>
      <span className="floating-cart-icon">🛒</span>
      <div className="floating-cart-copy">
        <strong>{cartCount > 0 ? cartCount : "View"}</strong>
        <small>{cartCount > 0 ? "items in cart" : "Open cart"}</small>
      </div>
    </button>
  );
}
