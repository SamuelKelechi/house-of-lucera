"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  ArrowRight,
  Heart,
  Truck,
  RotateCcw,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

import "./home.css";

const featuredProducts = [
  {
    id: 1,
    name: "Luxe Satin Dress",
    price: "₦85,000",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Asymmetrical Blazer Set",
    price: "₦92,000",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Ruched Midi Dress",
    price: "₦78,000",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Linen Two-Piece Set",
    price: "₦72,000",
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {

  return (
    <>
      <Header />
    <main className="home-page">
      {/* =========================
          HERO
      ========================== */}

      <section className="home-hero">

        <div className="hero-background">

          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=2200&q=90"
            alt="House of Lucéra luxury fashion"
          />

        </div>

        <div className="hero-overlay" />

        <div className="home-hero-content">

          <span className="hero-eyebrow">
            HOUSE OF LUCÉRA
          </span>

          <h1>
            LUXURY
            <br />
            WITHIN REACH
          </h1>

          <p>
            Timeless fashion and exquisite hair,
            <br className="desktop-break" />
            curated for the woman who knows her worth.
          </p>

          <div className="hero-buttons">

            <Link
              href="/clothing"
              className="primary-button"
            >
              SHOP CLOTHING
              <ArrowRight size={15} />
            </Link>

            <Link
              href="/luxury-hair"
              className="secondary-button"
            >
              SHOP LUXURY HAIR
              <ArrowRight size={15} />
            </Link>

          </div>

        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div />
        </div>

      </section>

      {/* =========================
          INTRO
      ========================== */}

      <section className="brand-introduction">

        <div className="section-label">
          <span />
          THE LUCÉRA EXPERIENCE
          <span />
        </div>

        <h2>
          Elegance that speaks
          <br />
          <em>without saying a word.</em>
        </h2>

        <p>
          At House of Lucéra, we believe luxury should feel
          effortless and within reach. From carefully selected
          fashion pieces to premium luxury hair, every detail
          is chosen to help you express your confidence,
          individuality and beauty.
        </p>

      </section>

      {/* =========================
          SHOP CATEGORIES
      ========================== */}

      <section className="collection-section">

        <div className="section-heading">

          <div>
            <span className="small-heading">
              DISCOVER LUCÉRA
            </span>

            <h2>
              Shop the collection
            </h2>
          </div>

          <Link href="/clothing" className="view-all">
            EXPLORE ALL
            <ArrowRight size={14} />
          </Link>

        </div>

        <div className="collection-grid">

          {/* CLOTHING */}

          <Link
            href="/clothing"
            className="collection-card clothing-card"
          >

            <img
              src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=85"
              alt="Lucéra clothing collection"
            />

            <div className="collection-overlay" />

            <div className="collection-content">

              <span>
                THE LUCÉRA COLLECTION
              </span>

              <h3>
                Clothing
              </h3>

              <div>
                EXPLORE COLLECTION
                <ArrowRight size={15} />
              </div>

            </div>

          </Link>

          {/* HAIR */}

          <Link
            href="/luxury-hair"
            className="collection-card hair-card"
          >

            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85"
              alt="Lucéra luxury hair collection"
            />

            <div className="collection-overlay" />

            <div className="collection-content">

              <span>
                LUXURY HAIR
              </span>

              <h3>
                Crown Your Beauty
              </h3>

              <div>
                SHOP LUXURY HAIR
                <ArrowRight size={15} />
              </div>

            </div>

          </Link>

        </div>

      </section>

      {/* =========================
          FEATURED PRODUCTS
      ========================== */}

      <section className="featured-section">

        <div className="section-heading centered">

          <div>

            <span className="small-heading">
              CURATED FOR YOU
            </span>

            <h2>
              Featured pieces
            </h2>

          </div>

          <Link
            href="/clothing"
            className="view-all desktop-view-all"
          >
            VIEW ALL
            <ArrowRight size={14} />
          </Link>

        </div>

        <div className="home-product-grid">

          {featuredProducts.map((product) => (

            <Link
              href={`/clothing/${product.id}`}
              className="home-product-card"
              key={product.id}
            >

              <div className="home-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <button
                  className="product-heart"
                  aria-label="Add to wishlist"
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                >
                  <Heart size={16} />
                </button>

              </div>

              <div className="home-product-details">

                <span>
                  LUCÉRA COLLECTION
                </span>

                <h3>
                  {product.name}
                </h3>

                <strong>
                  {product.price}
                </strong>

              </div>

            </Link>

          ))}

        </div>

        <Link
          href="/clothing"
          className="mobile-view-all"
        >
          VIEW ALL COLLECTION
          <ArrowRight size={14} />
        </Link>

      </section>

      {/* =========================
          EDITORIAL BANNER
      ========================== */}

      <section className="editorial-section">

        <div className="editorial-image">

          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=85"
            alt="House of Lucéra fashion"
          />

        </div>

        <div className="editorial-content">

          <span className="small-heading">
            MORE THAN FASHION
          </span>

          <h2>
            Designed for
            <br />
            <em>your moment.</em>
          </h2>

          <p>
            Whether it is a quiet afternoon, an important
            meeting, a special celebration or simply a day
            when you want to feel beautiful — Lucéra is
            designed to be part of your story.
          </p>

          <Link
            href="/about"
            className="text-button"
          >
            DISCOVER OUR STORY
            <ArrowRight size={15} />
          </Link>

        </div>

      </section>

      {/* =========================
          WHY LUCERA
      ========================== */}

      <section className="benefits-section">

        <div className="section-label">
          <span />
          WHY LUCÉRA
          <span />
        </div>

        <div className="benefits-grid">

          <div className="benefit-item">

            <div className="benefit-icon">
              <ShieldCheck size={25} />
            </div>

            <h3>
              Premium Quality
            </h3>

            <p>
              Carefully selected pieces made
              with quality and attention to detail.
            </p>

          </div>

          <div className="benefit-item">

            <div className="benefit-icon">
              <Truck size={25} />
            </div>

            <h3>
              Nationwide Delivery
            </h3>

            <p>
              Fast and secure delivery
              directly to your doorstep.
            </p>

          </div>

          <div className="benefit-item">

            <div className="benefit-icon">
              <RotateCcw size={25} />
            </div>

            <h3>
              Easy Returns
            </h3>

            <p>
              Hassle-free returns within
              our eligible return window.
            </p>

          </div>

          <div className="benefit-item">

            <div className="benefit-icon">
              <CreditCard size={25} />
            </div>

            <h3>
              Flexible Payments
            </h3>

            <p>
              Enjoy convenient payment options
              with Lucéra FlexPay.
            </p>

          </div>

        </div>

      </section>

      {/* =========================
          FLEXPAY
      ========================== */}

      <section className="flexpay-preview">

        <div className="flexpay-content">

          <span className="small-heading">
            LUCÉRA FLEXPAY
          </span>

          <h2>
            Own the look.
            <br />
            <em>Pay your way.</em>
          </h2>

          <p>
            Love it now and pay in manageable
            installments. Luxury should be
            accessible and effortless.
          </p>

          <Link
            href="/flexpay"
            className="primary-dark-button"
          >
            DISCOVER FLEXPAY
            <ArrowRight size={15} />
          </Link>

        </div>

        <div className="flexpay-decoration">
          <span>LC</span>
        </div>

      </section>


    </main>
    <Footer />
    </>
  );
}