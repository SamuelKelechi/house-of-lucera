"use client";

import { use, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  Heart,
  Minus,
  Plus,
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import "./product-details.css";

type HairProduct = {
  id: number;
  name: string;
  price: number;
  installment: string;
  rating: number;
  reviews: number;
  category: string;
  images: string[];
  description: string;
  texture: string;
  lengths: string[];
  colors: string[];
};

const hairProducts: HairProduct[] = [
  {
    id: 1,
    name: "Bone Straight 24”",
    price: 420000,
    installment: "₦70,000/month",
    rating: 4.9,
    reviews: 56,
    category: "Bone Straight",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
    ],
    description:
      "Our Bone Straight collection delivers a sleek, luxurious finish with a smooth natural movement. Carefully selected premium human hair designed for women who appreciate effortless elegance and versatility.",
    texture: "Bone Straight",
    lengths: ["18”", "20”", "22”", "24”", "26”"],
    colors: ["Natural Black", "Jet Black", "Dark Brown"],
  },

  {
    id: 2,
    name: "Body Wave 22”",
    price: 380000,
    installment: "₦63,300/month",
    rating: 4.8,
    reviews: 41,
    category: "Body Wave",
    images: [
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=85",
    ],
    description:
      "Soft, flowing waves with a naturally glamorous finish. Body Wave is perfect for everyday luxury and can be styled straight, curled or worn in its natural wave pattern.",
    texture: "Body Wave",
    lengths: ["18”", "20”", "22”", "24”", "26”"],
    colors: ["Natural Black", "Jet Black", "Dark Brown"],
  },

  {
    id: 3,
    name: "Water Wave 24”",
    price: 400000,
    installment: "₦66,700/month",
    rating: 4.9,
    reviews: 38,
    category: "Water Wave",
    images: [
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1000&q=85",
    ],
    description:
      "Defined, luxurious waves with beautiful movement and texture. Water Wave offers an effortlessly glamorous appearance while maintaining a soft and natural finish.",
    texture: "Water Wave",
    lengths: ["18”", "20”", "22”", "24”", "26”"],
    colors: ["Natural Black", "Jet Black", "Dark Brown"],
  },

  {
    id: 4,
    name: "Deep Wave 22”",
    price: 370000,
    installment: "₦61,700/month",
    rating: 4.8,
    reviews: 29,
    category: "Deep Wave",
    images: [
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85",
    ],
    description:
      "Rich, defined waves created for statement-making beauty. Deep Wave gives you volume, movement and a luxurious natural appearance.",
    texture: "Deep Wave",
    lengths: ["18”", "20”", "22”", "24”"],
    colors: ["Natural Black", "Jet Black", "Dark Brown"],
  },

  {
    id: 5,
    name: "Curly 14” Wig",
    price: 310000,
    installment: "₦51,700/month",
    rating: 4.9,
    reviews: 23,
    category: "Curly",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=85",
    ],
    description:
      "A beautifully defined curly wig that adds effortless volume and personality to your look. Lightweight, versatile and easy to style.",
    texture: "Curly",
    lengths: ["12”", "14”", "16”", "18”"],
    colors: ["Natural Black", "Jet Black", "Dark Brown"],
  },

  {
    id: 6,
    name: "Straight 20” Closure Wig",
    price: 360000,
    installment: "₦60,000/month",
    rating: 4.7,
    reviews: 17,
    category: "Closure Wig",
    images: [
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=1000&q=85",
    ],
    description:
      "A sleek closure wig designed for a polished, natural-looking finish. Perfect for effortless everyday elegance and special occasions.",
    texture: "Straight",
    lengths: ["16”", "18”", "20”", "22”"],
    colors: ["Natural Black", "Jet Black", "Dark Brown"],
  },
];

const relatedProducts = [
  hairProducts[1],
  hairProducts[2],
  hairProducts[3],
  hairProducts[4],
];

export default function LuxuryHairProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const productId = Number(id);

  const product =
    hairProducts.find((item) => item.id === productId) ||
    hairProducts[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedLength, setSelectedLength] = useState(
    product.lengths[product.lengths.length - 2]
  );
  const [selectedTexture, setSelectedTexture] = useState(
    product.texture
  );
  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString("en-NG")}`;
  };

  const totalPrice = product.price * quantity;

  return (
    <>
      <Header />

      <main className="hair-product-page">

        {/* =====================================================
            BREADCRUMB
        ====================================================== */}

        <div className="hair-breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>

          <Link href="/luxury-hair">
            Luxury Hair
          </Link>

          <span>›</span>

          <span>{product.name}</span>
        </div>


        {/* =====================================================
            PRODUCT
        ====================================================== */}

        <section className="hair-product-main">

          {/* IMAGE GALLERY */}

          <div className="hair-gallery">

            <div className="hair-thumbnails">

              {product.images.map((image, index) => (

                <button
                  key={image}
                  className={
                    selectedImage === index
                      ? "hair-thumbnail active"
                      : "hair-thumbnail"
                  }
                  onClick={() =>
                    setSelectedImage(index)
                  }
                  aria-label={`View image ${index + 1}`}
                >

                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                  />

                </button>

              ))}

            </div>


            <div className="hair-main-image">

              <img
                src={product.images[selectedImage]}
                alt={product.name}
              />

              <button
                className={
                  wishlist
                    ? "hair-wishlist active"
                    : "hair-wishlist"
                }
                onClick={() =>
                  setWishlist(!wishlist)
                }
                aria-label="Add to wishlist"
              >
                <Heart
                  size={18}
                  fill={
                    wishlist
                      ? "currentColor"
                      : "none"
                  }
                />
              </button>

              <span className="hair-image-badge">
                PREMIUM HUMAN HAIR
              </span>

            </div>

          </div>


          {/* PRODUCT INFORMATION */}

          <div className="hair-product-information">

            <span className="hair-product-category">
              {product.category}
            </span>

            <h1>
              {product.name}
            </h1>


            {/* RATING */}

            <div className="hair-rating">

              <div className="hair-stars">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    size={13}
                    fill="currentColor"
                  />

                ))}

              </div>

              <span>
                {product.rating}
              </span>

              <span className="rating-divider">
                |
              </span>

              <span>
                {product.reviews} Reviews
              </span>

            </div>


            {/* PRICE */}

            <div className="hair-price-block">

              <strong>
                {formatPrice(product.price)}
              </strong>

              <span>
                or from{" "}
                <b>{product.installment}</b>
              </span>

            </div>


            <div className="hair-divider" />


            {/* LENGTH */}

            <div className="hair-option">

              <div className="hair-option-header">

                <strong>
                  Length
                </strong>

                <span>
                  {selectedLength}
                </span>

              </div>

              <div className="hair-option-buttons">

                {product.lengths.map((length) => (

                  <button
                    key={length}
                    className={
                      selectedLength === length
                        ? "selected"
                        : ""
                    }
                    onClick={() =>
                      setSelectedLength(length)
                    }
                  >
                    {length}
                  </button>

                ))}

              </div>

            </div>


            {/* TEXTURE */}

            <div className="hair-option">

              <div className="hair-option-header">

                <strong>
                  Texture
                </strong>

                <span>
                  {selectedTexture}
                </span>

              </div>

              <div className="hair-texture-select">

                <button>
                  {selectedTexture}

                  <ChevronDown size={14} />

                </button>

                <div className="hair-texture-options">

                  {[
                    "Bone Straight",
                    "Body Wave",
                    "Water Wave",
                    "Deep Wave",
                    "Curly",
                  ].map((texture) => (

                    <button
                      key={texture}
                      onClick={() => {
                        setSelectedTexture(texture);
                      }}
                    >
                      {texture}
                    </button>

                  ))}

                </div>

              </div>

            </div>


            {/* COLOR */}

            <div className="hair-option">

              <div className="hair-option-header">

                <strong>
                  Color
                </strong>

                <span>
                  {selectedColor}
                </span>

              </div>

              <div className="hair-color-options">

                {product.colors.map((color) => (

                  <button
                    key={color}
                    className={
                      selectedColor === color
                        ? "selected"
                        : ""
                    }
                    onClick={() =>
                      setSelectedColor(color)
                    }
                  >

                    <span
                      className={`hair-color-swatch ${color
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    />

                    {color}

                  </button>

                ))}

              </div>

            </div>


            {/* QUANTITY */}

            <div className="hair-purchase-row">

              <div className="hair-quantity">

                <button
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                >
                  <Minus size={13} />
                </button>

                <span>
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                >
                  <Plus size={13} />
                </button>

              </div>


              <div className="hair-selected-total">
                {formatPrice(totalPrice)}
              </div>

            </div>


            {/* ACTIONS */}

            <div className="hair-actions">

              <button className="hair-add-cart">
                ADD TO CART
                <ArrowRight size={15} />
              </button>

              <button className="hair-buy-now">
                BUY IT NOW
              </button>

            </div>


            {/* FLEXPAY */}

            <div className="hair-flexpay">

              <div className="hair-flexpay-mark">
                LC
              </div>

              <div>

                <strong>
                  LUCÉRA FLEXPAY
                </strong>

                <p>
                  Own this piece now and pay
                  in manageable installments.
                </p>

              </div>

              <Link href="/flexpay">
                Learn more
                <ArrowRight size={12} />
              </Link>

            </div>


            {/* SERVICE INFO */}

            <div className="hair-service-list">

              <div className="hair-service">

                <Truck size={18} />

                <div>
                  <strong>
                    Nationwide Delivery
                  </strong>

                  <span>
                    Fast and secure delivery
                    across Nigeria.
                  </span>
                </div>

              </div>


              <div className="hair-service">

                <ShieldCheck size={18} />

                <div>
                  <strong>
                    100% Premium Human Hair
                  </strong>

                  <span>
                    Carefully selected for
                    quality and longevity.
                  </span>
                </div>

              </div>


              <div className="hair-service">

                <RotateCcw size={18} />

                <div>
                  <strong>
                    Easy Returns
                  </strong>

                  <span>
                    Hassle-free returns on
                    eligible purchases.
                  </span>
                </div>

              </div>

            </div>


            {/* AGENT */}

            <div className="hair-agent">

              <div className="hair-agent-icon">
                <MessageCircle size={17} />
              </div>

              <div>

                <strong>
                  Need help choosing?
                </strong>

                <span>
                  Chat with a Lucéra hair specialist.
                </span>

              </div>

              <button>
                CHAT WITH AGENT
              </button>

            </div>

          </div>

        </section>


        {/* =====================================================
            PRODUCT INFORMATION TABS
        ====================================================== */}

        <section className="hair-product-tabs">

          <div className="hair-tabs-navigation">

            <button
              className={
                activeTab === "description"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("description")
              }
            >
              DESCRIPTION
            </button>

            <button
              className={
                activeTab === "details"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("details")
              }
            >
              PRODUCT DETAILS
            </button>

            <button
              className={
                activeTab === "shipping"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("shipping")
              }
            >
              SHIPPING & RETURNS
            </button>

          </div>


          <div className="hair-tab-content">

            {activeTab === "description" && (

              <div className="hair-description">

                <h2>
                  Luxury that feels as good as it looks.
                </h2>

                <p>
                  {product.description}
                </p>

                <p>
                  Whether you are creating an everyday
                  signature look or preparing for a special
                  occasion, Lucéra luxury hair is designed
                  to complement your beauty and elevate
                  your confidence.
                </p>

              </div>

            )}


            {activeTab === "details" && (

              <div className="hair-details-grid">

                <div>
                  <span>Hair Type</span>
                  <strong>
                    100% Premium Human Hair
                  </strong>
                </div>

                <div>
                  <span>Texture</span>
                  <strong>
                    {product.texture}
                  </strong>
                </div>

                <div>
                  <span>Available Lengths</span>
                  <strong>
                    {product.lengths.join(", ")}
                  </strong>
                </div>

                <div>
                  <span>Available Colors</span>
                  <strong>
                    {product.colors.join(", ")}
                  </strong>
                </div>

                <div>
                  <span>Maintenance</span>
                  <strong>
                    Low to Moderate
                  </strong>
                </div>

                <div>
                  <span>Recommended Care</span>
                  <strong>
                    Gentle washing and conditioning
                  </strong>
                </div>

              </div>

            )}


            {activeTab === "shipping" && (

              <div className="hair-shipping-content">

                <div>

                  <Truck size={23} />

                  <h3>
                    Nationwide Delivery
                  </h3>

                  <p>
                    We deliver across Nigeria.
                    Delivery timelines may vary
                    depending on your location.
                  </p>

                </div>

                <div>

                  <RotateCcw size={23} />

                  <h3>
                    Easy Returns
                  </h3>

                  <p>
                    Eligible items can be returned
                    within our stated return window.
                    Please ensure the product remains
                    unused and in its original condition.
                  </p>

                </div>

                <div>

                  <ShieldCheck size={23} />

                  <h3>
                    Secure Shopping
                  </h3>

                  <p>
                    Your order details and payment
                    information are handled securely.
                  </p>

                </div>

              </div>

            )}

          </div>

        </section>


        {/* =====================================================
            RELATED PRODUCTS
        ====================================================== */}

        <section className="hair-related-section">

          <div className="hair-section-heading">

            <div>

              <span>
                YOU MAY ALSO LOVE
              </span>

              <h2>
                Complete your crown.
              </h2>

            </div>

            <Link href="/luxury-hair">
              VIEW ALL
              <ArrowRight size={14} />
            </Link>

          </div>


          <div className="hair-related-grid">

            {relatedProducts.map((item) => (

              <Link
                href={`/luxury-hair/${item.id}`}
                className="hair-related-card"
                key={item.id}
              >

                <div className="hair-related-image">

                  <img
                    src={item.images[0]}
                    alt={item.name}
                  />

                  <span>
                    {item.category}
                  </span>

                </div>

                <div className="hair-related-info">

                  <h3>
                    {item.name}
                  </h3>

                  <strong>
                    {formatPrice(item.price)}
                  </strong>

                  <div className="hair-related-rating">

                    <span>
                      ★★★★★
                    </span>

                    <small>
                      ({item.reviews})
                    </small>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </section>


        {/* =====================================================
            HAIR CARE BANNER
        ====================================================== */}

        <section className="hair-care-banner">

          <div className="hair-care-content">

            <span>
              THE LUCÉRA STANDARD
            </span>

            <h2>
              Your crown deserves
              <br />
              <em>the very best.</em>
            </h2>

            <p>
              From selection to styling, every Lucéra
              hair piece is chosen with quality, beauty
              and longevity in mind.
            </p>

            <Link href="/luxury-hair">
              SHOP LUXURY HAIR
              <ArrowRight size={14} />
            </Link>

          </div>

          <div className="hair-care-mark">
            <span>LC</span>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}