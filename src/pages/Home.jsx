import { useEffect, useMemo, useRef, useState } from "react";
import { Hero } from "../assets/components/Hero";
import { ChefSection } from "../assets/components/ChefSection";
import { FoodCard } from "../assets/components/FoodCard";
import { Footer } from "../assets/components/Footer";

const categories = [
  { icon: "🍕", label: "Pizza" },
  { icon: "🍔", label: "Burger" },
  { icon: "🥘", label: "South Indian" },
  { icon: "🍜", label: "Chinese" },
  { icon: "🍰", label: "Desserts" },
  { icon: "🥤", label: "Drinks" },
];

export default function Home({ cartItems, onAddItem, onRemoveItem }) {
  const statsConfig = useMemo(
    () => [
      { value: 1200, label: "Daily Orders" },
      { value: 25000, label: "Happy Customers" },
      { value: 350, label: "Dishes" },
      { value: 30, label: "Min Delivery" },
    ],
    []
  );
  const foods = [
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
  ];

  const [stats, setStats] = useState(statsConfig.map(() => 0));
  const statsRef = useRef(null);
  const reviewRef = useRef(null);

  useEffect(() => {
    if (!statsRef.current) {
      return;
    }

    const animateCounters = () => {
      statsConfig.forEach((item, index) => {
        const duration = 1200;
        const start = performance.now();

        const step = (timestamp) => {
          const progress = Math.min((timestamp - start) / duration, 1);
          const value = Math.floor(item.value * progress);
          setStats((current) => {
            const next = [...current];
            next[index] = value;
            return next;
          });
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsConfig]);

  useEffect(() => {
    const element = reviewRef.current;
    if (!element) {
      return;
    }

    const scroll = setInterval(() => {
      if (!element) {
        return;
      }
      element.scrollLeft += 0.75;
      if (element.scrollLeft >= element.scrollWidth - element.clientWidth - 1) {
        element.scrollLeft = 0;
      }
    }, 24);

    return () => clearInterval(scroll);
  }, []);

  const reviews = [
    {
      stars: "⭐⭐⭐⭐⭐",
      text: "Best biryani and fast delivery every time.",
      author: "Priya",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      text: "Flavors are incredible and packaging is premium.",
      author: "Rahul",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      text: "Loved the chef specials and the fast checkout flow.",
      author: "Sneha",
    },
  ];

  return (
    <>
      <div className="offer banner-glow">
        🎉 Flat 50% OFF on First Order | Free Delivery Above ₹299 🚚
      </div>

      <Hero />

      <section className="stats" ref={statsRef}>
        <div className="container stats-grid">
          {statsConfig.map((item, index) => (
            <div className="stats-card" key={item.label}>
              <h2>
                {stats[index].toLocaleString()}
                {item.label !== "Min Delivery" ? "+" : ""}
              </h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="category-box">
        {categories.map((category) => (
          <button type="button" className="category" key={category.label}>
            <span>{category.icon}</span> {category.label}
          </button>
        ))}
      </section>

      <section className="filters container">
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
      </section>

      <section className="menu">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Popular menu</p>
            <h2>Popular Dishes</h2>
          </div>
          <div className="cards">
            {foods.map((food) => (
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
      </section>

      <ChefSection />

      <section className="features">
        <div className="container section-heading">
          <p className="eyebrow">Why choose us</p>
          <h2>Why Choose FoodEase?</h2>
        </div>

        <div className="feature-box container">
          <div className="trust-box">
            <h3>Fastest Delivery</h3>
            <p>Get premium meals delivered within 30 minutes with live order tracking.</p>
          </div>
          <div className="trust-box">
            <h3>Chef Crafted</h3>
            <p>Every dish is prepared by local experts using fresh, high-quality ingredients.</p>
          </div>
          <div className="trust-box">
            <h3>Secure Checkout</h3>
            <p>Enjoy fast payment and trusted checkout options with simple confirmation.</p>
          </div>
          <div className="trust-box">
            <h3>Top Rated</h3>
            <p>Thousands of customers rate us 5 stars for taste, speed, and presentation.</p>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="container section-heading">
          <p className="eyebrow">Customer stories</p>
          <h2>What Customers Say</h2>
        </div>

        <div className="review-track" ref={reviewRef}>
          {[...reviews, ...reviews].map((review, index) => (
            <div className="review-card" key={`${review.author}-${index}`}>
              <div className="review-stars">{review.stars}</div>
              <p>{review.text}</p>
              <h4>- {review.author}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div className="container newsletter-card">
          <div>
            <p className="eyebrow">Stay updated</p>
            <h2>Subscribe for offers & fresh drops</h2>
            <p>Be the first to know about new menu launches, flash discounts, and chef specials.</p>
          </div>
          <div className="newsletter-form">
            <input placeholder="Enter your email" type="email" />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
