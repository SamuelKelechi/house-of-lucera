"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  ChevronDown,
  Minus,
  Plus,
  Heart,
  Trash2,
  ShieldCheck,
  Truck,
  RotateCcw,
  CreditCard,
  ShoppingBag,
} from "lucide-react";

import "./cart.css";

type CartItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
};

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Luxe Satin Dress",
    category: "Lucéra Collection",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=85",
    size: "M",
    color: "Champagne",
    quantity: 1,
  },
  {
    id: 2,
    name: "Asymmetrical Blazer Set",
    category: "Lucéra Collection",
    price: 92000,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=85",
    size: "L",
    color: "Black",
    quantity: 1,
  },
];

const formatPrice = (price: number) =>
  `₦${price.toLocaleString("en-NG")}`;

export default function CartPage() {
  const [cartItems, setCartItems] =
    useState<CartItem[]>(initialCart);

  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const updateQuantity = (
    id: number,
    change: number
  ) => {
    setCartItems((current) =>
      current
        .map((item) => {
          if (item.id !== id) return item;

          const newQuantity = item.quantity + change;

          return {
            ...item,
            quantity: Math.max(1, newQuantity),
          };
        })
    );
  };

  const removeItem = (id: number) => {
    setCartItems((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const delivery = subtotal >= 150000 ? 0 : 3500;

  const discount = couponApplied
    ? Math.round(subtotal * 0.05)
    : 0;

  const total = subtotal + delivery - discount;

  const flexPay = Math.ceil(total / 6);

  const applyCoupon = () => {
    if (coupon.trim().length > 0) {
      setCouponApplied(true);
    }
  };

  return (
    <>
      <Header />

      <main className="cart-page">

        {/* =========================================
            PAGE HERO
        ========================================= */}

        <section className="cart-hero">

          <div className="cart-hero-inner">

            <div className="cart-breadcrumb">
              <Link href="/">
                Home
              </Link>

              <span>›</span>

              <span>Shopping Bag</span>
            </div>

            <div className="cart-title">

              <span>
                YOUR LUCÉRA
              </span>

              <h1>
                Shopping Bag
              </h1>

              <p>
                Review your carefully selected pieces
                before completing your order.
              </p>

            </div>

          </div>

        </section>


        {/* =========================================
            CART CONTENT
        ========================================= */}

        <section className="cart-container">

          {cartItems.length === 0 ? (

            /* =====================================
               EMPTY CART
            ===================================== */

            <div className="empty-cart">

              <div className="empty-cart-icon">
                <ShoppingBag size={30} />
              </div>

              <span className="small-heading">
                YOUR BAG IS WAITING
              </span>

              <h2>
                Nothing here yet.
              </h2>

              <p>
                Discover timeless pieces curated
                especially for the Lucéra woman.
              </p>

              <Link
                href="/clothing"
                className="cart-primary-button"
              >
                EXPLORE COLLECTION
                <ArrowRight size={15} />
              </Link>

            </div>

          ) : (

            <>

              {/* ===================================
                  CART HEADER
              =================================== */}

              <div className="cart-content-header">

                <div>
                  <span className="small-heading">
                    YOUR SELECTION
                  </span>

                  <h2>
                    {cartItems.length}{" "}
                    {cartItems.length === 1
                      ? "Item"
                      : "Items"}
                  </h2>
                </div>

                <Link
                  href="/clothing"
                  className="continue-shopping"
                >
                  CONTINUE SHOPPING
                  <ArrowRight size={14} />
                </Link>

              </div>


              {/* ===================================
                  MAIN CART LAYOUT
              =================================== */}

              <div className="cart-layout">

                {/* =================================
                    ITEMS
                ================================= */}

                <div className="cart-items">

                  {cartItems.map((item) => (

                    <article
                      className="cart-item"
                      key={item.id}
                    >

                      <Link
                        href={`/clothing/${item.id}`}
                        className="cart-item-image"
                      >

                        <img
                          src={item.image}
                          alt={item.name}
                        />

                      </Link>


                      <div className="cart-item-details">

                        <span className="cart-item-category">
                          {item.category}
                        </span>

                        <Link
                          href={`/clothing/${item.id}`}
                        >
                          <h3>
                            {item.name}
                          </h3>
                        </Link>

                        <div className="cart-item-options">

                          <span>
                            Size: <strong>{item.size}</strong>
                          </span>

                          <span>
                            Color: <strong>{item.color}</strong>
                          </span>

                        </div>

                        <div className="cart-item-price-mobile">
                          {formatPrice(item.price)}
                        </div>

                        <div className="cart-item-actions">

                          <div className="quantity-control">

                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  -1
                                )
                              }
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>

                            <span>
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  1
                                )
                              }
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>

                          </div>


                          <button
                            className="item-action"
                            aria-label="Move to wishlist"
                          >
                            <Heart size={13} />
                            <span>
                              SAVE
                            </span>
                          </button>


                          <button
                            className="item-action remove"
                            onClick={() =>
                              removeItem(item.id)
                            }
                          >
                            <Trash2 size={13} />
                            <span>
                              REMOVE
                            </span>
                          </button>

                        </div>

                      </div>


                      <div className="cart-item-total">

                        <strong>
                          {formatPrice(
                            item.price *
                              item.quantity
                          )}
                        </strong>

                      </div>

                    </article>

                  ))}


                  {/* =================================
                      DELIVERY NOTE
                  ================================= */}

                  <div className="free-delivery-note">

                    <Truck size={17} />

                    <div>

                      <strong>
                        {subtotal >= 150000
                          ? "You've unlocked free delivery."
                          : `Spend ${formatPrice(
                              Math.max(
                                0,
                                150000 - subtotal
                              )
                            )} more for free delivery.`}
                      </strong>

                      <p>
                        Nationwide delivery available
                        across Nigeria.
                      </p>

                    </div>

                  </div>

                </div>


                {/* =================================
                    ORDER SUMMARY
                ================================= */}

                <aside className="order-summary">

                  <div className="summary-heading">

                    <span className="small-heading">
                      ORDER SUMMARY
                    </span>

                    <h2>
                      Your total
                    </h2>

                  </div>


                  <div className="summary-lines">

                    <div>
                      <span>
                        Subtotal
                      </span>

                      <strong>
                        {formatPrice(subtotal)}
                      </strong>
                    </div>


                    <div>
                      <span>
                        Delivery
                      </span>

                      <strong>
                        {delivery === 0
                          ? "FREE"
                          : formatPrice(delivery)}
                      </strong>
                    </div>


                    {discount > 0 && (
                      <div className="discount-line">

                        <span>
                          Discount
                        </span>

                        <strong>
                          -{formatPrice(discount)}
                        </strong>

                      </div>
                    )}

                  </div>


                  <div className="summary-total">

                    <span>
                      Total
                    </span>

                    <strong>
                      {formatPrice(total)}
                    </strong>

                  </div>


                  {/* =================================
                      FLEXPAY
                  ================================= */}

                  <div className="summary-flexpay">

                    <div className="flexpay-mini-icon">
                      LC
                    </div>

                    <div>

                      <strong>
                        Lucéra FlexPay
                      </strong>

                      <p>
                        Or pay from{" "}
                        <b>
                          {formatPrice(flexPay)}
                        </b>{" "}
                        monthly for 6 months.
                      </p>

                    </div>

                    <ChevronDown size={14} />

                  </div>


                  {/* =================================
                      COUPON
                  ================================= */}

                  <div className="coupon-section">

                    <label htmlFor="coupon">
                      HAVE A PROMO CODE?
                    </label>

                    <div className="coupon-input">

                      <input
                        id="coupon"
                        type="text"
                        placeholder="Enter code"
                        value={coupon}
                        onChange={(event) =>
                          setCoupon(
                            event.target.value
                          )
                        }
                      />

                      <button
                        onClick={applyCoupon}
                        disabled={
                          couponApplied ||
                          !coupon.trim()
                        }
                      >
                        {couponApplied
                          ? "APPLIED"
                          : "APPLY"}
                      </button>

                    </div>

                    {couponApplied && (
                      <span className="coupon-success">
                        5% discount applied to your order.
                      </span>
                    )}

                  </div>


                  {/* =================================
                      CHECKOUT
                  ================================= */}

                  <Link
                    href="/checkout"
                    className="checkout-button"
                  >
                    PROCEED TO CHECKOUT
                    <ArrowRight size={15} />
                  </Link>


                  <div className="secure-checkout">

                    <ShieldCheck size={14} />

                    <span>
                      Secure checkout & protected payment
                    </span>

                  </div>

                </aside>

              </div>

            </>

          )}

        </section>


        {/* =========================================
            BENEFITS
        ========================================= */}

        <section className="cart-benefits">

          <div className="cart-benefit">

            <div className="cart-benefit-icon">
              <ShieldCheck size={21} />
            </div>

            <div>
              <strong>
                PREMIUM QUALITY
              </strong>

              <p>
                Carefully selected pieces
                <br />
                made to last.
              </p>
            </div>

          </div>


          <div className="cart-benefit">

            <div className="cart-benefit-icon">
              <Truck size={21} />
            </div>

            <div>
              <strong>
                NATIONWIDE DELIVERY
              </strong>

              <p>
                Fast and secure delivery
                <br />
                across Nigeria.
              </p>
            </div>

          </div>


          <div className="cart-benefit">

            <div className="cart-benefit-icon">
              <RotateCcw size={21} />
            </div>

            <div>
              <strong>
                EASY RETURNS
              </strong>

              <p>
                Hassle-free returns
                <br />
                within our return window.
              </p>
            </div>

          </div>


          <div className="cart-benefit">

            <div className="cart-benefit-icon">
              <CreditCard size={21} />
            </div>

            <div>
              <strong>
                SECURE PAYMENTS
              </strong>

              <p>
                Safe and convenient
                <br />
                payment options.
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}