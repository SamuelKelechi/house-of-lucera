"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  Heart,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  CreditCard,
  Star,
  Check,
  ArrowRight,
} from "lucide-react";

import "./product-details.css";

const product = {
  id: 1,
  name: "Luxe Satin Dress",
  price: 85000,
  installment: "₦14,200/month",
  category: "Dresses",
  rating: 5,
  reviews: 24,

  images: [
    "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=90",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=90",
    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=1200&q=90",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90",
  ],

  description:
    "The Luxe Satin Dress is designed for effortless elegance. Cut from a smooth satin-inspired fabric, its flattering silhouette creates a refined look that transitions beautifully from intimate occasions to sophisticated evenings.",

  details: [
    "Premium satin-inspired fabric",
    "Elegant relaxed silhouette",
    "Soft and comfortable feel",
    "Designed for special occasions",
    "Carefully finished details",
  ],

  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
};

const relatedProducts = [
  {
    id: 2,
    name: "Asymmetrical Blazer Set",
    price: "₦92,000",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 3,
    name: "Ruched Midi Dress",
    price: "₦78,000",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 5,
    name: "Linen Two-Piece Set",
    price: "₦72,000",
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 6,
    name: "Pleated Maxi Dress",
    price: "₦96,000",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=85",
  },
];

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const formatPrice = (price: number) =>
    `₦${price.toLocaleString("en-NG")}`;

  const nextImage = () => {
    setSelectedImage((current) =>
      current === product.images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? product.images.length - 1 : current - 1
    );
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  return (
    <>
      <Header />

      <main className="product-details-page">

        {/* =========================================
            BREADCRUMB
        ========================================== */}

        <div className="product-breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/clothing">Clothing</Link>
          <span>›</span>
          <span className="current">{product.name}</span>
        </div>

        {/* =========================================
            PRODUCT MAIN
        ========================================== */}

        <section className="product-main">

          {/* IMAGE GALLERY */}

          <div className="product-gallery">

            <div className="thumbnail-column">

              {product.images.map((image, index) => (
                <button
                  key={image}
                  className={`thumbnail ${
                    selectedImage === index ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}

            </div>

            <div className="main-product-image">

              <img
                src={product.images[selectedImage]}
                alt={product.name}
              />

              <button
                className="gallery-arrow gallery-prev"
                onClick={previousImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                className="gallery-arrow gallery-next"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>

              <button
                className={`main-wishlist ${
                  wishlist ? "active" : ""
                }`}
                onClick={() => setWishlist(!wishlist)}
                aria-label="Add to wishlist"
              >
                <Heart
                  size={17}
                  fill={wishlist ? "currentColor" : "none"}
                />
              </button>

              <div className="image-counter">
                {selectedImage + 1} / {product.images.length}
              </div>

            </div>

          </div>

          {/* PRODUCT INFORMATION */}

          <div className="product-information">

            <span className="product-category">
              LUCÉRA COLLECTION · {product.category.toUpperCase()}
            </span>

            <h1>{product.name}</h1>

            <div className="product-rating">

              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={12}
                    fill="currentColor"
                  />
                ))}
              </div>

              <span>
                {product.rating}.0 · {product.reviews} Reviews
              </span>

            </div>

            <div className="product-price-area">

              <strong>
                {formatPrice(product.price)}
              </strong>

              <span>
                or from {product.installment}
              </span>

            </div>

            <div className="product-divider" />

            {/* DESCRIPTION */}

            <div className="short-description">
              <p>{product.description}</p>
            </div>

            {/* SIZE */}

            <div className="selection-section">

              <div className="selection-heading">

                <strong>Select Size</strong>

                <button>
                  SIZE GUIDE
                </button>

              </div>

              <div className="size-options">

                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={
                      selectedSize === size ? "selected" : ""
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}

              </div>

            </div>

            {/* QUANTITY */}

            <div className="quantity-section">

              <strong>Quantity</strong>

              <div className="quantity-control">

                <button
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                >
                  <Minus size={13} />
                </button>

                <span>{quantity}</span>

                <button
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                >
                  <Plus size={13} />
                </button>

              </div>

            </div>

            {/* ACTIONS */}

            <div className="product-actions">

              <button className="add-cart-button">
                <ShoppingBag size={16} />
                ADD TO CART
              </button>

              <button className="buy-now-button">
                BUY IT NOW
                <ArrowRight size={15} />
              </button>

            </div>

            {/* FLEXPAY */}

            <div className="flexpay-box">

              <div className="flexpay-mark">
                LC
              </div>

              <div>

                <strong>
                  Lucéra FlexPay
                </strong>

                <p>
                  Love it now. Pay in manageable
                  installments from {product.installment}.
                </p>

              </div>

              <Link href="/flexpay">
                Learn more
                <ArrowRight size={12} />
              </Link>

            </div>

            {/* PRODUCT SERVICE */}

            <div className="product-services">

              <div className="service-row">

                <Truck size={17} />

                <div>
                  <strong>Nationwide Delivery</strong>
                  <span>
                    Delivered securely to your doorstep.
                  </span>
                </div>

              </div>

              <div className="service-row">

                <RotateCcw size={17} />

                <div>
                  <strong>Easy Returns</strong>
                  <span>
                    Hassle-free returns within 7 days.
                  </span>
                </div>

              </div>

              <div className="service-row">

                <ShieldCheck size={17} />

                <div>
                  <strong>Secure Shopping</strong>
                  <span>
                    Your information is protected.
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =========================================
            PRODUCT DETAILS TABS
        ========================================== */}

        <section className="product-details-section">

          <div className="details-tabs">

            <button
              className={activeTab === "description" ? "active" : ""}
              onClick={() => setActiveTab("description")}
            >
              DESCRIPTION
            </button>

            <button
              className={activeTab === "details" ? "active" : ""}
              onClick={() => setActiveTab("details")}
            >
              PRODUCT DETAILS
            </button>

            <button
              className={activeTab === "shipping" ? "active" : ""}
              onClick={() => setActiveTab("shipping")}
            >
              SHIPPING & RETURNS
            </button>

          </div>

          <div className="details-content">

            {activeTab === "description" && (
              <div className="details-panel">

                <div>
                  <span className="details-label">
                    THE LUCÉRA EXPERIENCE
                  </span>

                  <h2>
                    Elegance in
                    <br />
                    <em>every detail.</em>
                  </h2>
                </div>

                <p>
                  {product.description} Every Lucéra piece
                  is selected with the modern woman in mind —
                  effortless, refined and designed to make
                  you feel confident wherever your day takes you.
                </p>

              </div>
            )}

            {activeTab === "details" && (
              <div className="details-list">

                <span className="details-label">
                  PRODUCT INFORMATION
                </span>

                <h2>
                  Crafted for
                  <br />
                  <em>your moment.</em>
                </h2>

                <ul>
                  {product.details.map((detail) => (
                    <li key={detail}>
                      <Check size={14} />
                      {detail}
                    </li>
                  ))}
                </ul>

              </div>
            )}

            {activeTab === "shipping" && (
              <div className="shipping-panel">

                <div className="shipping-item">

                  <Truck size={22} />

                  <div>
                    <h3>Delivery</h3>
                    <p>
                      We deliver across Nigeria using
                      trusted delivery partners. Delivery
                      times may vary depending on your location.
                    </p>
                  </div>

                </div>

                <div className="shipping-item">

                  <RotateCcw size={22} />

                  <div>
                    <h3>Returns</h3>
                    <p>
                      Eligible items may be returned within
                      7 days, provided they are unused and
                      returned in their original condition.
                    </p>
                  </div>

                </div>

                <div className="shipping-item">

                  <CreditCard size={22} />

                  <div>
                    <h3>Payments</h3>
                    <p>
                      Pay securely using available payment
                      options or choose Lucéra FlexPay where
                      available.
                    </p>
                  </div>

                </div>

              </div>
            )}

          </div>

        </section>

        {/* =========================================
            RELATED PRODUCTS
        ========================================== */}

        <section className="related-products">

          <div className="related-heading">

            <div>

              <span className="details-label">
                YOU MAY ALSO LOVE
              </span>

              <h2>
                Complete the look
              </h2>

            </div>

            <Link href="/clothing">
              VIEW ALL
              <ArrowRight size={14} />
            </Link>

          </div>

          <div className="related-grid">

            {relatedProducts.map((item) => (

              <Link
                href={`/clothing/${item.id}`}
                className="related-card"
                key={item.id}
              >

                <div className="related-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <button
                    className="related-heart"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                    aria-label="Add to wishlist"
                  >
                    <Heart size={15} />
                  </button>

                </div>

                <div className="related-info">

                  <span>
                    LUCÉRA COLLECTION
                  </span>

                  <h3>{item.name}</h3>

                  <strong>{item.price}</strong>

                </div>

              </Link>

            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}