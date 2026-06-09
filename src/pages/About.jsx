import { Footer } from "../assets/components/Footer";

export default function About() {
  return (
    <div>
      <style>{`
        .about-page {
          min-height: 100vh;
          padding: 60px 40px;
          background: #111;
          color: white;
        }
        .about-container {
          max-width: 900px;
          margin: 0 auto;
        }
        .about-page h1 {
          font-size: 42px;
          margin-bottom: 30px;
          color: #7CFC00;
        }
        .about-page p {
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 20px;
          color: #ddd;
        }
        .mission {
          background: #222;
          padding: 30px;
          border-radius: 15px;
          margin: 30px 0;
          border-left: 4px solid #7CFC00;
        }
        .mission h2 {
          color: #7CFC00;
          margin-bottom: 15px;
        }
        .values {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }
        .value-card {
          background: #222;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
        }
        .value-card h3 {
          color: #7CFC00;
          margin-bottom: 10px;
        }
      `}</style>

      <div className="about-page">
        <div className="about-container">
          <h1>About FoodEase</h1>

          <p>
            Welcome to FoodEase, your premier cloud kitchen delivering fresh,
            delicious meals to your doorstep within 30 minutes. We are committed
            to providing the highest quality food with exceptional customer
            service.
          </p>

          <div className="mission">
            <h2>🎯 Our Mission</h2>
            <p>
              To revolutionize the food delivery experience by offering
              freshly-prepared, hygienically-handled meals at affordable prices,
              making good food accessible to everyone.
            </p>
          </div>

          <h2 style={{ color: "#7CFC00", marginTop: "40px" }}>Our Values</h2>
          <div className="values">
            <div className="value-card">
              <h3>🍽 Quality</h3>
              <p>Fresh ingredients and expert preparation every time</p>
            </div>
            <div className="value-card">
              <h3>⚡ Speed</h3>
              <p>Fast delivery without compromising on quality</p>
            </div>
            <div className="value-card">
              <h3>💚 Sustainability</h3>
              <p>Eco-friendly packaging and responsible sourcing</p>
            </div>
            <div className="value-card">
              <h3>👥 Community</h3>
              <p>Supporting local chefs and farmers</p>
            </div>
          </div>

          <p style={{ marginTop: "40px" }}>
            Founded in 2024, FoodEase has grown to serve thousands of customers
            across the city. Our team of passionate chefs work around the clock
            to ensure every meal is prepared with love and care.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
