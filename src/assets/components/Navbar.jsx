import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Navbar({ cartCount }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const trendingSearches = [
    "Biryani",
    "Extra Cheese Pizza",
    "Smash Burgers",
    "Paneer Tikka",
    "Mango Lassi",
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          <span>🍽</span> FoodEase
        </Link>

        <div className="nav-search">
          <input
            className="search"
            placeholder="Search food, cuisines, specials..."
            onFocus={() => setSearchOpen(true)}
            onBlur={() => setTimeout(() => setSearchOpen(false), 120)}
          />
          {searchOpen && (
            <div className="search-dropdown">
              <p>Trending</p>
              <div className="search-tags">
                {trendingSearches.map((term) => (
                  <button type="button" key={term}>
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <nav className="nav-links">
          {[
            { label: "Home", path: "/" },
            { label: "Menu", path: "/products" },
            { label: "About", path: "/about" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/products" className="cta-button">
            Order Now
          </Link>
          <button type="button" className="nav-cart" onClick={() => navigate("/cart")}> 
            <span>🛒</span>
            <span>{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
