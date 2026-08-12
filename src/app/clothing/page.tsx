"use client";

import { useState, type MouseEvent } from "react";
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
} from "lucide-react";

import "./clothing.css";

/* =========================================================
   TYPES
========================================================= */

type Product = {
  id: number;
  name: string;
  price: string;
  installment: string;
  image: string;
  reviews: number;
};


/* =========================================================
   PRODUCTS
========================================================= */

const products: Product[] = [
  {
    id: 1,
    name: "Luxe Satin Dress",
    price: "₦85,000",
    installment: "or from ₦14,200/month",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80",
    reviews: 24,
  },

  {
    id: 2,
    name: "Asymmetrical Blazer Set",
    price: "₦92,000",
    installment: "or from ₦15,300/month",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80",
    reviews: 18,
  },

  {
    id: 3,
    name: "Ruched Midi Dress",
    price: "₦78,000",
    installment: "or from ₦13,000/month",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=700&q=80",
    reviews: 16,
  },

  {
    id: 4,
    name: "Corset Detail Dress",
    price: "₦88,000",
    installment: "or from ₦14,700/month",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80",
    reviews: 12,
  },

  {
    id: 5,
    name: "Linen Two-Piece Set",
    price: "₦72,000",
    installment: "or from ₦12,000/month",
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=700&q=80",
    reviews: 22,
  },

  {
    id: 6,
    name: "Pleated Maxi Dress",
    price: "₦96,000",
    installment: "or from ₦16,000/month",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80",
    reviews: 10,
  },
];


/* =========================================================
   CATEGORIES
========================================================= */

const categories: string[] = [
  "Lucéra Collection",
  "Dresses",
  "Two Pieces",
  "New Arrivals",
];


/* =========================================================
   SIZES
========================================================= */

const sizes: string[] = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "3XL",
];


/* =========================================================
   SORT OPTIONS
========================================================= */

const sortOptions: string[] = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
  "Name",
];


/* =========================================================
   CLOTHING PAGE
========================================================= */

export default function Clothing() {
  /* =======================================================
     STATE
  ======================================================= */

  const [wishlist, setWishlist] = useState<number[]>([]);

  const [activeCategory, setActiveCategory] =
    useState<string>("Lucéra Collection");

  const [selectedSize, setSelectedSize] =
    useState<string | null>(null);

  const [sortOpen, setSortOpen] =
    useState<boolean>(false);

  const [selectedSort, setSelectedSort] =
    useState<string>("Featured");


  /* =======================================================
     WISHLIST
  ======================================================= */

  const toggleWishlist = (id: number): void => {
    setWishlist((current: number[]) =>
      current.includes(id)
        ? current.filter((item: number) => item !== id)
        : [...current, id]
    );
  };


  /* =======================================================
     SIZE
  ======================================================= */

  const handleSizeSelect = (size: string): void => {
    setSelectedSize((current: string | null) =>
      current === size ? null : size
    );
  };


  /* =======================================================
     ADD TO CART
  ======================================================= */

  const handleAddToCart = (
    product: Product,
    event: MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    /*
      Cart functionality is kept intact here.
      This can be connected to the global cart context.
    */

    console.log("Added to cart:", product.name);
  };


  /* =======================================================
     SORT PRODUCTS
  ======================================================= */

  const sortProducts = (
    items: Product[]
  ): Product[] => {
    const sorted: Product[] = [...items];

    if (selectedSort === "Price: Low to High") {
      sorted.sort((a: Product, b: Product) => {
        const priceA = Number(
          a.price.replace(/[₦,]/g, "")
        );

        const priceB = Number(
          b.price.replace(/[₦,]/g, "")
        );

        return priceA - priceB;
      });
    }

    if (selectedSort === "Price: High to Low") {
      sorted.sort((a: Product, b: Product) => {
        const priceA = Number(
          a.price.replace(/[₦,]/g, "")
        );

        const priceB = Number(
          b.price.replace(/[₦,]/g, "")
        );

        return priceB - priceA;
      });
    }

    if (selectedSort === "Name") {
      sorted.sort(
        (a: Product, b: Product) =>
          a.name.localeCompare(b.name)
      );
    }

    return sorted;
  };


  /* =======================================================
     DISPLAYED PRODUCTS
  ======================================================= */

  const displayedProducts: Product[] =
    sortProducts(products);


  /* =======================================================
     RENDER
  ======================================================= */


  return (
    <>

      {/* ===================================================
          HEADER
      =================================================== */}

      <Header />


      <main className="site">


        {/* =================================================
            HERO
        ================================================= */}

        <section className="hero">

          <div className="hero-content">

            <div className="breadcrumb">

              <Link href="/">
                Home
              </Link>

              <span>›</span>

              <span>
                Clothing
              </span>

            </div>


            <div className="hero-copy">

              <h1>
                CLOTHING COLLECTION
              </h1>

              <p>

                Timeless pieces designed to make you look
                <br className="desktop-only" />

                and feel confident, elegant and unforgettable.

              </p>

            </div>

          </div>


          <div className="hero-image">

            <div className="hero-model-placeholder">

              <span>
                HOUSE OF LUCÉRA
              </span>

            </div>

          </div>

        </section>


        {/* =================================================
            CATEGORY TABS
        ================================================= */}

        <section className="category-tabs">

          {categories.map((category) => (

            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >

              {category}

            </button>

          ))}

        </section>


        {/* =================================================
            FILTER BAR
        ================================================= */}

        <section className="catalog-controls">

          <button
            type="button"
            className="filter-button"
            onClick={() => {
              const sidebar =
                document.querySelector(".sidebar");

              sidebar?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >

            <SlidersHorizontal size={14} />

            Filter

          </button>


          {/* SORT */}

          <div
            className="sort-control"
            style={{
              position: "relative",
            }}
          >

            <button
              type="button"
              onClick={() =>
                setSortOpen((current) => !current)
              }
            >

              Sort By

              <ChevronDown
                size={14}
                style={{
                  transform: sortOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition:
                    "transform 0.2s ease",
                }}
              />

            </button>


            {sortOpen && (

              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 5px)",
                  left: 0,
                  zIndex: 20,
                  minWidth: "145px",
                  padding: "5px",
                  background: "#fff",
                  border: "1px solid #e4e0dc",
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,0.08)",
                }}
              >

                {[
                  "Featured",
                  "Price: Low to High",
                  "Price: High to Low",
                  "Name",
                ].map((option) => (

                  <button
                    key={option}
                    type="button"
                    onClick={() => {

                      setSelectedSort(option);

                      setSortOpen(false);

                    }}
                    style={{
                      width: "100%",
                      border: 0,
                      background:
                        selectedSort === option
                          ? "#f8f3ed"
                          : "transparent",
                      padding: "9px",
                      textAlign: "left",
                      fontSize: "8px",
                    }}
                  >

                    {option}

                  </button>

                ))}

              </div>

            )}

          </div>


          {/* SIZE */}

          <button
            type="button"
            onClick={() => {

              const sizeSection =
                document.querySelector(
                  ".size-grid"
                );

              sizeSection?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });

            }}
          >

            Size

            <ChevronDown size={14} />

          </button>


          {/* PRICE */}

          <button
            type="button"
            onClick={() => {

              setSelectedSort(
                "Price: Low to High"
              );

            }}
          >

            Price

            <ChevronDown size={14} />

          </button>

        </section>


        {/* =================================================
            CATALOG
        ================================================= */}

        <section className="catalog">


          {/* ===============================================
              SIDEBAR
          =============================================== */}

          <aside className="sidebar">


            {/* CATEGORIES */}

            <div className="sidebar-section">

              <h3>
                Categories
              </h3>


              <div className="category-links">

                {categories.map((category) => (

                  <button
                    type="button"
                    key={category}
                    className={
                      activeCategory === category
                        ? "selected"
                        : ""
                    }
                    onClick={() =>
                      setActiveCategory(category)
                    }
                  >

                    {category}

                  </button>

                ))}

              </div>

            </div>


            {/* SIZES */}

            <div className="sidebar-section">

              <h3>
                Size
              </h3>


              <div className="size-grid">

                {sizes.map((size) => (

                  <button
                    type="button"
                    key={size}
                    className={
                      selectedSize === size
                        ? "selected"
                        : ""
                    }
                    onClick={() =>
                      handleSizeSelect(size)
                    }
                  >

                    {size}

                  </button>

                ))}

              </div>

            </div>


            {/* AGENT */}

            <div className="agent-box">

              <strong>
                Need a Size Not Listed?
              </strong>

              <p>
                Chat with our agent to request
                a particular size.
              </p>

              <button
                type="button"
                onClick={() =>
                  console.log(
                    "Open customer support"
                  )
                }
              >

                CHAT WITH AGENT

                <span>
                  ◉
                </span>

              </button>

            </div>

          </aside>


          {/* ===============================================
              PRODUCTS
          =============================================== */}

          <div className="products-area">


            {/* PRODUCTS HEADER */}

            <div className="products-header">

              <strong>
                {displayedProducts.length} Items Found
              </strong>


              <div className="view-controls">

                <button
                  type="button"
                  className="active"
                  aria-label="Grid view"
                >

                  <Grid2X2 size={16} />

                </button>


                <button
                  type="button"
                  aria-label="List view"
                >

                  <List size={17} />

                </button>

              </div>

            </div>


            {/* PRODUCT GRID */}

            <div className="product-grid">

              {displayedProducts.map(
                (product) => (

                  <article
                    className="product-card"
                    key={product.id}
                  >

                    <Link
                      href={`/clothing/${product.id}`}
                      className="product-image"
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                      />


                    <button
                            type="button"
                            className="wishlist-button"
                            onClick={(event: MouseEvent<HTMLButtonElement>) => {
                                event.preventDefault();
                                event.stopPropagation();
                                toggleWishlist(product.id);
                            }}
                            aria-label={
                                wishlist.includes(product.id)
                                ? "Remove from wishlist"
                                : "Add to wishlist"
                            }
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

                    </Link>


                    <div className="product-info">

                      <Link
                        href={`/clothing/${product.id}`}
                      >

                        <h2>
                          {product.name}
                        </h2>

                      </Link>


                      <strong className="product-price">

                        {product.price}

                      </strong>


                      <span className="installment">

                        {product.installment}

                      </span>


                      <div className="product-bottom">


                        {/* RATING */}

                        <div className="rating">

                          <span className="stars">

                            <Star
                              size={11}
                              fill="currentColor"
                            />

                            <Star
                              size={11}
                              fill="currentColor"
                            />

                            <Star
                              size={11}
                              fill="currentColor"
                            />

                            <Star
                              size={11}
                              fill="currentColor"
                            />

                            <Star
                              size={11}
                              fill="currentColor"
                            />

                          </span>


                          <span>
                            ({product.reviews})
                          </span>

                        </div>


                        {/* ADD TO CART */}

                        <button
                          type="button"
                          className="add-button"
                          onClick={(event) =>
                            handleAddToCart(
                              product,
                              event
                            )
                          }
                          aria-label={`Add ${product.name} to cart`}
                        >

                          <Plus size={14} />

                        </button>

                      </div>

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </section>


        {/* =================================================
            BENEFITS
        ================================================= */}

        <section className="benefits">


          <div className="benefit">

            <div className="benefit-icon">
              <span>♢</span>
            </div>

            <div>

              <strong>
                PREMIUM QUALITY
              </strong>

              <p>
                Finest fabrics and
                <br />
                attention to detail.
              </p>

            </div>

          </div>


          <div className="benefit">

            <div className="benefit-icon">
              <Truck size={23} />
            </div>

            <div>

              <strong>
                NATIONWIDE DELIVERY
              </strong>

              <p>
                Fast, secure delivery
                <br />
                to your doorstep.
              </p>

            </div>

          </div>


          <div className="benefit">

            <div className="benefit-icon">
              <RotateCcw size={23} />
            </div>

            <div>

              <strong>
                EASY RETURNS
              </strong>

              <p>
                Hassle-free returns
                <br />
                within 7 days.
              </p>

            </div>

          </div>


          <div className="benefit">

            <div className="benefit-icon">
              <ShieldCheck size={23} />
            </div>

            <div>

              <strong>
                SECURE PAYMENTS
              </strong>

              <p>
                100% secure payment
                <br />
                transactions.
              </p>

            </div>

          </div>


        </section>

      </main>


      <Footer />

    </>
  );
}