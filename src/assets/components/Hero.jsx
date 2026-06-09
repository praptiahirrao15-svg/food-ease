import { useEffect, useState } from "react";

export function Hero() {
  const trending = [
    "🔥 Biryani",
    "🍕 Extra Cheese Pizza",
    "🍔 Smash Burgers",
    "🌶️ Paneer Tikka",
    "🥭 Mango Lassi",
  ];
  const [focused, setFocused] = useState(false);
  const [countdown, setCountdown] = useState(118);

  useEffect(() => {
    if (countdown <= 0) {
      return;
    }
    const heartbeat = setInterval(() => {
      setCountdown((current) => Math.max(0, current - 1));
    }, 1000);
    return () => clearInterval(heartbeat);
  }, [countdown]);

  const minutes = String(Math.floor(countdown / 60)).padStart(2, "0");
  const seconds = String(countdown % 60).padStart(2, "0");

  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-tag">Flat 50% OFF • Free delivery over ₹299</span>
          <h1>
            Premium food, delivered <span>fresh & fast</span>
          </h1>
          <p>
            Order chef-crafted dishes, explore premium categories, and enjoy a sleek
            ordering experience built for speed and quality.
          </p>

          <div className="hero-actions">
            <div className="hero-search-wrap">
              <input
                className="hero-search"
                placeholder="Search trending dishes..."
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 120)}
              />
              {focused && (
                <div className="hero-trending">
                  {trending.map((item) => (
                    <button type="button" key={item}>
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="hero-cta-group">
              <button className="cta-button">Order Now</button>
              <span className="countdown">Offer ends in {minutes}:{seconds}</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-visual">
            <img
              src="https://wallpapers.com/images/hd/food-4k-3gsi5u6kjma5zkj0.jpg"
              alt="Featured food"
            />
            <div className="hero-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
