"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  X,
  Menu,
} from "lucide-react";

import "./Header.css";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <>
      {/* =========================
          PROMO BAR
      ========================= */}

      <div className="promo-bar">
        <div>✦ PAY IN INSTALLMENTS WITH LUCÉRA FLEXPAY</div>

        <span className="promo-divider">|</span>

        <div>NOW ON, PAY YOUR WAY</div>

        <span className="promo-spacer" />

        <div>✦ FREE DELIVERY ON ORDERS ₦100,000+</div>
      </div>

      {/* =========================
          HEADER
      ========================= */}

      <header className="header">
        <div className="header-inner">

          {/* MOBILE MENU BUTTON */}

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenu(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          {/* LOGO */}

          <a href="/" className="brand" aria-label="House of Lucéra home">
            <img
              src="/logo.jpeg"
              alt="House of Lucéra"
            />
          </a>

          {/* DESKTOP NAVIGATION */}

          <nav className="desktop-nav">

            <a
              href="/"
              className={isActive("/") ? "active" : ""}
            >
              HOME
            </a>

            <a
              href="/clothing"
              className={isActive("/clothing") ? "active" : ""}
            >
              CLOTHING <sup>9</sup>
            </a>

            <a
              href="/luxury-hair"
              className={isActive("/luxury-hair") ? "active" : ""}
            >
              LUXURY HAIR
            </a>

            <a
              href="/flexpay"
              className={isActive("/flexpay") ? "active" : ""}
            >
              FLEXPAY
            </a>

            <a
              href="/about"
              className={isActive("/about") ? "active" : ""}
            >
              ABOUT US
            </a>

            <a
              href="/contact"
              className={isActive("/contact") ? "active" : ""}
            >
              CONTACT
            </a>

          </nav>

          {/* HEADER ACTIONS */}

          <div className="header-actions">

            <button
              aria-label="Search"
              title="Search"
            >
              <Search size={20} />
            </button>

            <button
              aria-label="Account"
              title="Account"
            >
              <UserRound size={20} />
            </button>

            <button
              aria-label="Wishlist"
              title="Wishlist"
            >
              <Heart size={20} />
            </button>
            <a href="/cart">
            <button
              className="bag-button"
              aria-label="Shopping bag"
              title="Shopping bag"
            >
              <ShoppingBag size={20} />
              <span>0</span>
            </button>
            </a>

          </div>

        </div>
      </header>

      {/* =========================
          MOBILE MENU
      ========================= */}

      {mobileMenu && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMobileMenu(false)}
        >
          <div
            className="mobile-menu"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="mobile-menu-header">

              <a
                href="/"
                onClick={() => setMobileMenu(false)}
              >
                <img
                  src="/logo.jpeg"
                  alt="House of Lucéra"
                />
              </a>

              <button
                onClick={() => setMobileMenu(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

            </div>

            <nav>

              <a
                href="/"
                className={isActive("/") ? "active" : ""}
                onClick={() => setMobileMenu(false)}
              >
                HOME
              </a>

              <a
                href="/clothing"
                className={isActive("/clothing") ? "active" : ""}
                onClick={() => setMobileMenu(false)}
              >
                CLOTHING
              </a>

              <a
                href="/luxury-hair"
                className={isActive("/luxury-hair") ? "active" : ""}
                onClick={() => setMobileMenu(false)}
              >
                LUXURY HAIR
              </a>

              <a
                href="/flexpay"
                className={isActive("/flexpay") ? "active" : ""}
                onClick={() => setMobileMenu(false)}
              >
                FLEXPAY
              </a>

              <a
                href="/about"
                className={isActive("/about") ? "active" : ""}
                onClick={() => setMobileMenu(false)}
              >
                ABOUT US
              </a>

              <a
                href="/contact"
                className={isActive("/contact") ? "active" : ""}
                onClick={() => setMobileMenu(false)}
              >
                CONTACT
              </a>

            </nav>

          </div>
        </div>
      )}
    </>
  );
}