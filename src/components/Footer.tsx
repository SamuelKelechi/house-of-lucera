"use client";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* =========================
          NEWSLETTER / CTA
      ========================= */}

      <section className="footer-newsletter">

        <div className="footer-newsletter-content">

          <div className="footer-newsletter-copy">
            <span className="footer-eyebrow">
              HOUSE OF LUCÉRA
            </span>

            <h2>
              Stay in the
              <br />
              Lucéra Circle.
            </h2>

            <p>
              Be the first to discover new collections,
              exclusive pieces and special offers.
            </p>
          </div>

          <form className="newsletter-form">

            <div className="newsletter-input-wrap">
              <Mail size={16} />

              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
              />
            </div>

            <button type="submit">
              SUBSCRIBE
              <ArrowUpRight size={14} />
            </button>

          </form>

        </div>

      </section>

      {/* =========================
          MAIN FOOTER
      ========================= */}

      <div className="footer-main">

        <div className="footer-container">

          {/* BRAND */}

          <div className="footer-brand">

            <a
              href="/"
              className="footer-logo"
            >
              <img
                src="/Logo.jpeg"
                alt="House of Lucéra"
              />
            </a>

            <p>
              Timeless elegance, thoughtfully curated.
              Discover clothing and luxury hair designed
              for the woman who knows her worth.
            </p>

            <div className="footer-socials">

              <a
                href="#"
                aria-label="Instagram"
              >
                {/* <Instagram size={16} /> */}
                I
              </a>

              <a
                href="#"
                aria-label="Facebook"
              >
                {/* <Facebook size={16} /> */}
                F
              </a>

            </div>

          </div>

          {/* SHOP */}

          <div className="footer-column">

            <h3>SHOP</h3>

            <nav>
              <a href="/clothing">
                Clothing
              </a>

              <a href="/clothing">
                New Arrivals
              </a>

              <a href="/luxury-hair">
                Luxury Hair
              </a>

              <a href="/flexpay">
                Lucéra FlexPay
              </a>
            </nav>

          </div>

          {/* INFORMATION */}

          <div className="footer-column">

            <h3>INFORMATION</h3>

            <nav>
              <a href="/about">
                About Us
              </a>

              <a href="/contact">
                Contact Us
              </a>

              <a href="/shipping">
                Delivery Information
              </a>

              <a href="/returns">
                Returns & Exchanges
              </a>

              <a href="/faq">
                FAQs
              </a>
            </nav>

          </div>

          {/* CUSTOMER CARE */}

          <div className="footer-column footer-contact">

            <h3>CUSTOMER CARE</h3>

            <a href="tel:+2340000000000">
              <Phone size={14} />
              <span>
                +234 000 000 0000
              </span>
            </a>

            <a href="mailto:hello@houseoflucera.com">
              <Mail size={14} />
              <span>
                hello@houseoflucera.com
              </span>
            </a>

            <div className="footer-address">
              <MapPin size={14} />

              <span>
                Lagos, Nigeria
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* =========================
          BOTTOM BAR
      ========================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-inner">

          <p>
            © {new Date().getFullYear()} House of Lucéra.
            All rights reserved.
          </p>

          <div className="footer-legal">

            <a href="/privacy">
              Privacy Policy
            </a>

            <a href="/terms">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}