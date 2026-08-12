"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  Heart,
  ChevronDown,
  SlidersHorizontal,
  Grid2X2,
  List,
  Plus,
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  Crown,
  MessageCircle,
} from "lucide-react";

import "./luxury-hair.css";


/* =========================================================
   PRODUCTS
========================================================= */

const products = [
  {
    id: 1,
    name: "Bone Straight 24”",
    price: 420000,
    installment: "or from ₦70,000/month",
    texture: "Bone Straight",
    length: "24”",
    type: "Bundles",
    reviews: 56,
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=85",
    badge: "BEST SELLER",
  },

  {
    id: 2,
    name: "Body Wave 22”",
    price: 380000,
    installment: "or from ₦63,300/month",
    texture: "Body Wave",
    length: "22”",
    type: "Bundles",
    reviews: 41,
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 3,
    name: "Water Wave 24”",
    price: 400000,
    installment: "or from ₦66,700/month",
    texture: "Water Wave",
    length: "24”",
    type: "Bundles",
    reviews: 38,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 4,
    name: "Deep Wave 22”",
    price: 370000,
    installment: "or from ₦61,700/month",
    texture: "Deep Wave",
    length: "22”",
    type: "Bundles",
    reviews: 29,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 5,
    name: "Curly 14” Wig",
    price: 310000,
    installment: "or from ₦51,700/month",
    texture: "Curly",
    length: "14”",
    type: "Wigs",
    reviews: 23,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 6,
    name: "Straight 20” Closure Wig",
    price: 360000,
    installment: "or from ₦60,000/month",
    texture: "Bone Straight",
    length: "20”",
    type: "Closure Wigs",
    reviews: 17,
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 7,
    name: "Loose Wave 20”",
    price: 350000,
    installment: "or from ₦58,300/month",
    texture: "Loose Wave",
    length: "20”",
    type: "Bundles",
    reviews: 31,
    image:
      "https://images.unsplash.com/photo-1592647420148-bfcc177e2117?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 8,
    name: "Kinky Curly 18”",
    price: 340000,
    installment: "or from ₦56,700/month",
    texture: "Kinky Curly",
    length: "18”",
    type: "Wigs",
    reviews: 19,
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 9,
    name: "Body Wave Closure 18”",
    price: 330000,
    installment: "or from ₦55,000/month",
    texture: "Body Wave",
    length: "18”",
    type: "Closure Wigs",
    reviews: 27,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
  },
];


/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All Hair",
  "Bone Straight",
  "Body Wave",
  "Deep Wave",
  "Water Wave",
  "Loose Wave",
  "Curly",
  "Pixie Curl",
  "Raw Hair",
  "Wigs & Frontals",
  "Hair Bundles",
  "Accessories",
];

const textures = [
  "All Textures",
  "Bone Straight",
  "Body Wave",
  "Deep Wave",
  "Water Wave",
  "Loose Wave",
  "Curly",
];

const lengths = [
  "All Lengths",
  "14”",
  "16”",
  "18”",
  "20”",
  "22”",
  "24”",
  "26”",
];

const types = [
  "All Types",
  "Bundles",
  "Wigs",
  "Closure Wigs",
  "Frontals",
];


/* =========================================================
   COMPONENT
========================================================= */

export default function LuxuryHair() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const [selectedCategory, setSelectedCategory] =
    useState("All Hair");

  const [selectedTexture, setSelectedTexture] =
    useState("All Textures");

  const [selectedLength, setSelectedLength] =
    useState("All Lengths");

  const [selectedType, setSelectedType] =
    useState("All Types");

  const [sortBy, setSortBy] =
    useState("Featured");

  const [showMobileFilters, setShowMobileFilters] =
    useState(false);

  const [view, setView] =
    useState<"grid" | "list">("grid");


  /* =========================================================
     WISHLIST
  ========================================================== */

  const toggleWishlist = (id: number) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };


  /* =========================================================
     FILTER + SORT
  ========================================================== */

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All Hair") {
      result = result.filter(
        (product) =>
          product.texture === selectedCategory ||
          product.type === selectedCategory
      );
    }

    if (selectedTexture !== "All Textures") {
      result = result.filter(
        (product) => product.texture === selectedTexture
      );
    }

    if (selectedLength !== "All Lengths") {
      result = result.filter(
        (product) => product.length === selectedLength
      );
    }

    if (selectedType !== "All Types") {
      result = result.filter(
        (product) => product.type === selectedType
      );
    }

    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "Top Rated") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [
    selectedCategory,
    selectedTexture,
    selectedLength,
    selectedType,
    sortBy,
  ]);


  /* =========================================================
     RESET FILTERS
  ========================================================== */

  const resetFilters = () => {
    setSelectedCategory("All Hair");
    setSelectedTexture("All Textures");
    setSelectedLength("All Lengths");
    setSelectedType("All Types");
    setSortBy("Featured");
  };


  return (
    <>
      <Header />

      <main className="hair-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="hair-hero">

          <div className="hair-hero-content">

            <div className="hair-breadcrumb">
              <Link href="/">
                Home
              </Link>

              <span>›</span>

              <span>
                Luxury Hair
              </span>
            </div>

            <div className="hair-hero-copy">

              <span className="hair-eyebrow">
                THE LUCÉRA HAIR COLLECTION
              </span>

              <h1>
                LUXURY HAIR
                <br />
                COLLECTION
              </h1>

              <p>
                100% premium human hair.
                Beautiful, durable
                <br className="desktop-only" />
                and made for queens.
              </p>

            </div>

          </div>


          <div className="hair-hero-image">

            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1000&q=90"
              alt="Lucéra luxury hair model"
            />

          </div>

        </section>


        {/* =================================================
            FILTER BAR
        ================================================= */}

        <section className="hair-filter-bar">

          <div className="hair-filter-inner">

            <button
              className="mobile-filter-toggle"
              onClick={() =>
                setShowMobileFilters((value) => !value)
              }
            >
              <SlidersHorizontal size={14} />
              FILTERS
            </button>


            <div className="hair-filter">

              <span>
                Texture
              </span>

              <select
                value={selectedTexture}
                onChange={(event) =>
                  setSelectedTexture(event.target.value)
                }
              >
                {textures.map((texture) => (
                  <option
                    key={texture}
                    value={texture}
                  >
                    {texture}
                  </option>
                ))}
              </select>

              <ChevronDown size={12} />

            </div>


            <div className="hair-filter">

              <span>
                Length
              </span>

              <select
                value={selectedLength}
                onChange={(event) =>
                  setSelectedLength(event.target.value)
                }
              >
                {lengths.map((length) => (
                  <option
                    key={length}
                    value={length}
                  >
                    {length}
                  </option>
                ))}
              </select>

              <ChevronDown size={12} />

            </div>


            <div className="hair-filter">

              <span>
                Type
              </span>

              <select
                value={selectedType}
                onChange={(event) =>
                  setSelectedType(event.target.value)
                }
              >
                {types.map((type) => (
                  <option
                    key={type}
                    value={type}
                  >
                    {type}
                  </option>
                ))}
              </select>

              <ChevronDown size={12} />

            </div>


            <div className="hair-filter">

              <span>
                Sort By
              </span>

              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value)
                }
              >
                <option>
                  Featured
                </option>

                <option>
                  Price: Low to High
                </option>

                <option>
                  Price: High to Low
                </option>

                <option>
                  Top Rated
                </option>
              </select>

              <ChevronDown size={12} />

            </div>

          </div>

        </section>


        {/* =================================================
            MOBILE FILTER PANEL
        ================================================= */}

        {showMobileFilters && (

          <div className="mobile-filter-panel">

            <div className="mobile-filter-header">

              <h2>
                Filter Collection
              </h2>

              <button
                onClick={() =>
                  setShowMobileFilters(false)
                }
              >
                ×
              </button>

            </div>


            <div className="mobile-filter-group">

              <label>
                Texture
              </label>

              <select
                value={selectedTexture}
                onChange={(event) =>
                  setSelectedTexture(event.target.value)
                }
              >
                {textures.map((texture) => (
                  <option
                    key={texture}
                    value={texture}
                  >
                    {texture}
                  </option>
                ))}
              </select>

            </div>


            <div className="mobile-filter-group">

              <label>
                Length
              </label>

              <select
                value={selectedLength}
                onChange={(event) =>
                  setSelectedLength(event.target.value)
                }
              >
                {lengths.map((length) => (
                  <option
                    key={length}
                    value={length}
                  >
                    {length}
                  </option>
                ))}
              </select>

            </div>


            <div className="mobile-filter-group">

              <label>
                Type
              </label>

              <select
                value={selectedType}
                onChange={(event) =>
                  setSelectedType(event.target.value)
                }
              >
                {types.map((type) => (
                  <option
                    key={type}
                    value={type}
                  >
                    {type}
                  </option>
                ))}
              </select>

            </div>


            <button
              className="reset-filters"
              onClick={resetFilters}
            >
              RESET FILTERS
            </button>

          </div>

        )}


        {/* =================================================
            CATALOG
        ================================================= */}

        <section className="hair-catalog">

          {/* SIDEBAR */}

          <aside className="hair-sidebar">

            <div className="hair-sidebar-section">

              <h3>
                Categories
              </h3>

              <div className="hair-category-links">

                {categories.map((category) => (

                  <button
                    key={category}
                    className={
                      selectedCategory === category
                        ? "selected"
                        : ""
                    }
                    onClick={() => {
                      setSelectedCategory(category);
                      setSelectedTexture("All Textures");
                      setSelectedLength("All Lengths");
                      setSelectedType("All Types");
                    }}
                  >
                    {category}
                  </button>

                ))}

              </div>

            </div>


            <div className="hair-sidebar-note">

              <Crown size={19} />

              <strong>
                100% HUMAN HAIR
              </strong>

              <p>
                Premium quality hair,
                carefully sourced for
                long-lasting beauty.
              </p>

            </div>

          </aside>


          {/* PRODUCTS AREA */}

          <div className="hair-products-area">

            <div className="hair-products-header">

              <strong>
                {filteredProducts.length} Items Found
              </strong>

              <div className="hair-view-controls">

                <button
                  className={
                    view === "grid"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setView("grid")
                  }
                  aria-label="Grid view"
                >
                  <Grid2X2 size={16} />
                </button>

                <button
                  className={
                    view === "list"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setView("list")
                  }
                  aria-label="List view"
                >
                  <List size={17} />
                </button>

              </div>

            </div>


            {filteredProducts.length === 0 ? (

              <div className="no-products">

                <Crown size={28} />

                <h2>
                  No pieces found
                </h2>

                <p>
                  Try adjusting your filters
                  to discover more of the Lucéra collection.
                </p>

                <button
                  onClick={resetFilters}
                >
                  VIEW ALL HAIR
                </button>

              </div>

            ) : (

              <div
                className={
                  view === "grid"
                    ? "hair-product-grid"
                    : "hair-product-list"
                }
              >

                {filteredProducts.map((product) => (

                  <article
                    className="hair-product-card"
                    key={product.id}
                  >

                    <Link
                      href={`/luxury-hair/${product.id}`}
                      className="hair-product-image"
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      {product.badge && (

                        <span className="hair-product-badge">
                          {product.badge}
                        </span>

                      )}

                    </Link>


                    <button
                      className="hair-wishlist"
                      onClick={() =>
                        toggleWishlist(product.id)
                      }
                      aria-label="Add to wishlist"
                    >

                      <Heart
                        size={15}
                        fill={
                          wishlist.includes(product.id)
                            ? "currentColor"
                            : "none"
                        }
                      />

                    </button>


                    <div className="hair-product-info">

                      <span className="hair-product-category">
                        {product.type}
                      </span>

                      <Link
                        href={`/luxury-hair/${product.id}`}
                      >
                        <h2>
                          {product.name}
                        </h2>
                      </Link>

                      <strong className="hair-product-price">
                        ₦{product.price.toLocaleString()}
                      </strong>

                      <span className="hair-installment">
                        {product.installment}
                      </span>


                      <div className="hair-product-bottom">

                        <div className="hair-rating">

                          <span className="hair-stars">

                            {[1, 2, 3, 4, 5].map(
                              (star) => (
                                <Star
                                  key={star}
                                  size={10}
                                  fill="currentColor"
                                />
                              )
                            )}

                          </span>

                          <span>
                            ({product.reviews})
                          </span>

                        </div>


                        <button
                          className="hair-add-button"
                          aria-label="Add to cart"
                        >
                          <Plus size={14} />
                        </button>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            )}

          </div>

        </section>


        {/* =================================================
            AGENT BANNER
        ================================================= */}

        <section className="hair-agent-banner">

          <div className="hair-agent-content">

            <span className="hair-agent-eyebrow">
              PERSONALIZED ASSISTANCE
            </span>

            <h2>
              CAN&apos;T FIND
              <br />
              WHAT YOU WANT?
            </h2>

            <p>
              Request any hair texture,
              length or color.
              <br />
              We&apos;ll source it for you.
            </p>

            <button className="hair-agent-button">

              CHAT WITH OUR AGENT

              <MessageCircle size={13} />

            </button>

          </div>


          <div className="hair-agent-image">

            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85"
              alt="Lucéra hair consultant"
            />

          </div>

        </section>


        {/* =================================================
            BENEFITS
        ================================================= */}

        <section className="hair-benefits">

          <div className="hair-benefit">

            <div className="hair-benefit-icon">
              <Crown size={22} />
            </div>

            <div>

              <strong>
                100% HUMAN HAIR
              </strong>

              <p>
                Premium quality,
                <br />
                ethically sourced.
              </p>

            </div>

          </div>


          <div className="hair-benefit">

            <div className="hair-benefit-icon">
              <ShieldCheck size={22} />
            </div>

            <div>

              <strong>
                LONG LASTING
              </strong>

              <p>
                Durable, soft and
                <br />
                beautifully crafted.
              </p>

            </div>

          </div>


          <div className="hair-benefit">

            <div className="hair-benefit-icon">
              <RotateCcw size={22} />
            </div>

            <div>

              <strong>
                LOW MAINTENANCE
              </strong>

              <p>
                Easy to style and
                <br />
                maintain.
              </p>

            </div>

          </div>


          <div className="hair-benefit">

            <div className="hair-benefit-icon">
              <MessageCircle size={22} />
            </div>

            <div>

              <strong>
                EXPERT SUPPORT
              </strong>

              <p>
                We&apos;re here to help
                <br />
                you choose the best.
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}