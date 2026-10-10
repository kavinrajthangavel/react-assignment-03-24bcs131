import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  const total = quantity * price;

  return (
    <div className="app">
      <Header />

      <section className="page-banner">
        <div>
          <p className="banner-label">YOUR SHOPPING SPACE</p>
          <h2>Find your everyday essentials.</h2>
          <p className="banner-description">
            Explore your product, personalize your order, and manage your cart.
          </p>
        </div>

        <div className="banner-cart">
          <span className="banner-cart-icon">🛒</span>
          <div>
            <span className="banner-cart-label">CART TOTAL</span>
            <strong>₹{total}</strong>
            <small>{quantity} item(s)</small>
          </div>
        </div>
      </section>

      <section className="tab-preview">
        <div className="preview-label">
          <span className="preview-icon">▣</span>
          <span>BROWSER TAB TITLE PREVIEW</span>
          <span className="live-badge">
            <span className="live-dot"></span>
            {showProduct ? "LIVE" : "RESTORED"}
          </span>
        </div>

        <div className="preview-content">
          <div className="preview-product-icon">📦</div>

          <div className="preview-text">
            <span>CURRENT PAGE TITLE</span>
            <strong>
              {showProduct
                ? `${productName} | ${selectedColor} | Cart: ${quantity}`
                : "Amazon Product Store"}
            </strong>
          </div>
        </div>
      </section>

      <main className="main-content">
        <div className="section-heading">
          <div>
            <p className="section-label">FEATURED PRODUCT</p>
            <h2>Your product</h2>
          </div>

          <span className="availability">
            <span></span>
            Available
          </span>
        </div>

        {showProduct && (
          <ProductCard
            productName={productName}
            price={price}
            quantity={quantity}
            selectedColor={selectedColor}
            deliveryCity={deliveryCity}
          />
        )}

        <section className="customization-panel">
          <div className="panel-heading">
            <div>
              <p className="section-label">PERSONALIZE YOUR ORDER</p>
              <h3>Product preferences</h3>
            </div>
            <span className="settings-icon">⚙</span>
          </div>

          <div className="controls">
            <div className="field">
              <label htmlFor="color">Product colour</label>
              <select
                id="color"
                name="selectedColor"
                value={selectedColor}
                onChange={(event) =>
                  setSelectedColor(event.target.value)
                }
              >
                <option value="Black">Black</option>
                <option value="Blue">Blue</option>
                <option value="White">White</option>
              </select>
              <small>Choose your preferred colour.</small>
            </div>

            <div className="field">
              <label htmlFor="city">Delivery city</label>
              <input
                id="city"
                name="deliveryCity"
                type="text"
                placeholder="Enter delivery city"
                value={deliveryCity}
                onChange={(event) =>
                  setDeliveryCity(event.target.value)
                }
              />
              <small>Update your delivery destination.</small>
            </div>
          </div>
        </section>

        <section className="cart-actions">
          <div className="actions-heading">
            <div>
              <p className="section-label">CART MANAGEMENT</p>
              <h3>Manage your cart</h3>
            </div>
            <span className="quantity-badge">{quantity} items</span>
          </div>

          <div className="buttons">
            <button
              className="btn btn-add"
              onClick={() => setQuantity((q) => q + 1)}
            >
              <span>＋</span> Add to Cart
            </button>

            <button
              className="btn btn-secondary"
              onClick={() =>
                setQuantity((q) => Math.max(0, q - 1))
              }
              disabled={quantity === 0}
            >
              <span>−</span> Remove One
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => setQuantity(0)}
            >
              <span>↺</span> Reset Cart
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => setShowProduct((visible) => !visible)}
            >
              <span>{showProduct ? "◉" : "◎"}</span>
              {showProduct ? "Hide Product" : "Show Product"}
            </button>
          </div>

          <div className="cart-footer-summary">
            <div>
              <span>Order summary</span>
              <small>
                {quantity === 0
                  ? "Add a product to get started."
                  : `${quantity} × ₹${price} per item`}
              </small>
            </div>

            <div className="final-total">
              <span>Total Amount</span>
              <strong>₹{total}</strong>
            </div>
          </div>
        </section>

        <div className="learning-note">
          <span className="note-icon">✓</span>
          <p>
            <strong>Shopping made simple.</strong>
            {" "}Your colour and delivery preferences are preserved
            when you hide the product or reset the cart.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;