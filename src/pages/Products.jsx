import { FoodCard } from "../assets/components/FoodCard";
import { Footer } from "../assets/components/Footer";
import "../cart.css";

export default function Products({ cartItems, onAddItem, onRemoveItem }) {
  const cartList = Object.values(cartItems || {});
  const allFoods = [
    {
      id: "chicken-biryani",
      name: "Chicken Biryani",
      price: "₹249",
      type: "nonveg",
      tags: ["Spicy"],
      img: "https://images.unsplash.com/photo-1701579231349-d7459c40919d?w=900",
    },
    {
      id: "veg-burger",
      name: "Veg Burger",
      price: "₹149",
      type: "veg",
      tags: ["Cheesy"],
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900",
    },
    {
      id: "margherita-pizza",
      name: "Margherita Pizza",
      price: "₹199",
      type: "veg",
      tags: ["Classic"],
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900",
    },
    {
      id: "chocolate-cake",
      name: "Chocolate Cake",
      price: "₹129",
      type: "veg",
      tags: ["Dessert"],
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900",
    },
    {
      id: "masala-dosa",
      name: "Masala Dosa",
      price: "₹120",
      type: "veg",
      tags: ["South Indian"],
      img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900",
    },
    {
      id: "idli-sambhar",
      name: "Idli Sambhar",
      price: "₹90",
      type: "veg",
      tags: ["Healthy"],
      img: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=900",
    },
    {
      id: "hakka-noodles",
      name: "Hakka Noodles",
      price: "₹180",
      type: "veg",
      tags: ["Savory"],
      img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=900",
    },
    {
      id: "veg-manchurian",
      name: "Veg Manchurian",
      price: "₹160",
      type: "veg",
      tags: ["Flavorful"],
      img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
    },
    {
      id: "butter-chicken",
      name: "Butter Chicken",
      price: "₹279",
      type: "nonveg",
      tags: ["Rich"],
      img: "https://static.vecteezy.com/system/resources/previews/015/933/397/non_2x/tasty-butter-chicken-curry-or-murg-makhanwala-or-masala-dish-from-indian-cuisine-free-photo.jpg",
    },
    {
      id: "paneer-tikka",
      name: "Paneer Tikka",
      price: "₹199",
      type: "veg",
      tags: ["Grilled"],
      img: "https://img.freepik.com/premium-photo/paneer-tikka-is-indian-dish-made-from-chunks-cottage-cheese-marinated-spices-grilled-tandoor_466689-76829.jpg?w=2000",
    },
    {
      id: "tandoori-chicken",
      name: "Tandoori Chicken",
      price: "₹259",
      type: "nonveg",
      tags: ["Smoky"],
      img: "https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77620.jpg?w=1800",
    },
    {
      id: "chole-bhature",
      name: "Chole Bhature",
      price: "₹139",
      type: "veg",
      tags: ["Comfort"],
      img: "https://img.freepik.com/premium-photo/plate-chole-bhature-vegetarian-dish-from-punjab-region-indian-subcontinent-it-is-combination-chana-masala-spicy-white-chickpeas-bhatura-fried-bread-made-from-maida-flour_170984-23339.jpg?w=2000"
    },
  ];

  return (
    <div className="products-page">
      <div className="container">
        <div className="products-hero">
          <div>
            <p className="eyebrow">Full menu</p>
            <h1>Everything on the FoodEase menu</h1>
            <p>Browse the complete selection and add favorites directly to cart.</p>
          </div>
          <button className="cta-button">Order Today</button>
        </div>

        <div className="filters">
          <div className="filter-row">
            <button className="filter-btn">🍽️ All</button>
            <button className="filter-btn">🥗 Veg</button>
            <button className="filter-btn">🍗 Non-Veg</button>
          </div>
          <select className="sort-select">
            <option>Sort By</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
          </select>
        </div>

        <div className="menu">
          <div className="cards">
            {allFoods.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
                quantity={cartItems[food.id]?.quantity || 0}
                onAdd={onAddItem}
                onRemove={onRemoveItem}
              />
            ))}
          </div>
        </div>

        <section className="cart-table-wrapper">
          <h2 style={{ margin: "2rem 0 1rem", color: "var(--text)" }}>Current cart</h2>
          {cartList.length === 0 ? (
            <div className="cart-empty">
              <h2>Your cart is empty</h2>
              <p>Add items from the menu to see them here.</p>
            </div>
          ) : (
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map(({ product, quantity }) => {
                  const unitPrice = Number(product.price.replace(/[^0-9.]/g, ""));
                  return (
                    <tr key={product.id} className="cart-row">
                      <td>
                        <div className="cart-product">
                          <img src={product.img} alt={product.name} />
                          <div className="cart-product-info">
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                          </div>
                        </div>
                      </td>
                      <td className="cart-price">₹{unitPrice.toFixed(2)}</td>
                      <td>
                        <div className="quantity-control">
                          <button type="button" onClick={() => onRemoveItem(product.id)}>
                            −
                          </button>
                          <span>{quantity}</span>
                          <button type="button" onClick={() => onAddItem(product)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td className="cart-total">₹{(unitPrice * quantity).toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}
