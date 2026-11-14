
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="home-hero">

        <div className="hero-text">
          <span className="hero-tag">DRIVE YOUR DREAMS</span>

          <h1>
            Find Your
            <span> Perfect Ride.</span>
          </h1>

          <h2>Your Journey, Our Vehicles!</h2>

          <p>
            From city rides to long road trips, find the
            perfect vehicle for every journey. Explore,
            compare and choose your ride with ease.
          </p>

          <Link to="/vehicles" className="hero-btn">
            Explore Vehicles →
          </Link>

          <div className="hero-stats">
            <div>
              <h3>Easy</h3>
              <span>Vehicle Selection</span>
            </div>
            <div>
              <h3>Wide</h3>
              <span>Vehicle Collection</span>
            </div>
            <div>
              <h3>Smart</h3>
              <span>Rental Choices</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200"
            alt="Premium luxury car"
          />

        </div>

      </section>

      {/* FEATURES */}
      <section className="features-section">
        <h2 className="section-title">A Better Way to Travel</h2>
        <p className="section-subtitle">
          Everything you need for a smooth rental experience.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <span>🚗</span>
            <h3>Wide Collection</h3>
            <p>Explore different cars and bikes for every occasion.</p>
          </div>

          <div className="feature-card">
            <span>💰</span>
            <h3>Affordable Prices</h3>
            <p>Compare rental prices and choose your ideal ride.</p>
          </div>

          <div className="feature-card">
            <span>⚡</span>
            <h3>Easy Selection</h3>
            <p>Find your preferred vehicle with a simple experience.</p>
          </div>
        </div>
      </section>

      {/* VEHICLE CATEGORIES */}
      <section className="categories-section">
        <h2 className="section-title">Explore Our Collection</h2>
        <p className="section-subtitle">
          Choose the ride that matches your journey.
        </p>

        <div className="vehicle-gallery">

          <div className="vehicle-box">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800"
              alt="Luxury car"
            />
            <div className="vehicle-info">
              <h3>Luxury Cars</h3>
              <p>Travel in comfort and style.</p>
            </div>
          </div>

          <div className="vehicle-box">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
              alt="Sports bike"
            />
            <div className="vehicle-info">
              <h3>Sports Bikes</h3>
              <p>Feel the thrill of every ride.</p>
            </div>
          </div>

          <div className="vehicle-box">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
              alt="Premium sports car"
            />
            <div className="vehicle-info">
              <h3>Premium Vehicles</h3>
              <p>Make every journey special.</p>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <div>
          <span className="hero-tag">WHY CHOOSE US?</span>
          <h2>Every Journey Deserves the Right Ride.</h2>
        </div>

        <div className="why-list">
          <p>✓ Wide range of cars and bikes</p>
          <p>✓ Affordable rental prices</p>
          <p>✓ Easy vehicle selection</p>
          <p>✓ Vehicle availability details</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-cta">
        <h2>Ready for Your Next Adventure?</h2>
        <p>Your perfect ride is just one click away.</p>
        <Link to="/vehicles" className="hero-btn">
          Find Your Ride →
        </Link>
      </section>

    </div>
  );
}

export default Home;
