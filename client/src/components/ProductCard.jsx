import { useEffect } from "react";

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity,
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  const total = quantity * price;

  return (
    <section className="product-card">
      <div className="product-visual">
        <div className="image-badge">BEST SELLER</div>
        <img
          src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"
          alt="Wireless computer mouse"
        />
        <p className="image-caption">Wireless Technology</p>
      </div>

      <div className="product-details">
        <span className="eyebrow">COMPUTER ACCESSORIES</span>
        <h2>{productName}</h2>

        <div className="rating">
          <span>★★★★★</span>
          <small>Sample product rating</small>
        </div>

        <div className="price-row">
          <span className="price">₹{price}</span>
          <span className="per-item">per item</span>
        </div>

        <div className="product-info">
          <div className="info-row">
            <span className="info-label">Selected colour</span>
            <strong>{selectedColor}</strong>
          </div>

          <div className="info-row">
            <span className="info-label">Deliver to</span>
            <strong>{deliveryCity || "Enter a city"}</strong>
          </div>
        </div>

        <div className="cart-summary">
          <div className="summary-heading">
            <span>YOUR CART</span>
            <span className="quantity-badge">{quantity} items</span>
          </div>

          <div className="summary-row">
            <span>Cart Quantity</span>
            <strong>{quantity}</strong>
          </div>

          <div className="summary-total">
            <span>Total Amount</span>
            <strong>₹{total}</strong>
          </div>

          <p
            className={
              quantity === 0
                ? "cart-status empty"
                : "cart-status added"
            }
            role="status"
            aria-live="polite"
          >
            <span className="status-dot"></span>
            {quantity === 0
              ? "Cart is empty"
              : "Product added to cart"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;