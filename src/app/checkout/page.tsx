"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Lock,
  MapPin,
  CreditCard,
  Truck,
  ShieldCheck,
} from "lucide-react";

import "./checkout.css";

const cartItems = [
  {
    id: 1,
    name: "Luxe Satin Dress",
    size: "M",
    quantity: 1,
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Linen Two-Piece Set",
    size: "M",
    quantity: 1,
    price: 72000,
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=500&q=80",
  },
];

const formatPrice = (price: number) =>
  `₦${price.toLocaleString("en-NG")}`;

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [sameAddress, setSameAddress] = useState(true);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = deliveryMethod === "express" ? 7500 : 3500;

  const total = subtotal + deliveryFee;

  return (
    <>
      <Header />

      <main className="checkout-page">

        {/* =====================================================
            CHECKOUT HEADER
        ===================================================== */}

        <section className="checkout-header">

          <div className="checkout-header-inner">

            <div className="checkout-breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/cart">Cart</Link>
              <span>›</span>
              <strong>Checkout</strong>
            </div>

            <div className="checkout-title">
              <span className="checkout-label">
                HOUSE OF LUCÉRA
              </span>

              <h1>
                Checkout
              </h1>

              <p>
                Complete your order securely and effortlessly.
              </p>
            </div>

          </div>

        </section>


        {/* =====================================================
            CHECKOUT STEPS
        ===================================================== */}

        <section className="checkout-steps">

          <div className="checkout-step active">
            <span>1</span>
            <strong>Information</strong>
          </div>

          <div className="step-line" />

          <div className="checkout-step">
            <span>2</span>
            <strong>Delivery</strong>
          </div>

          <div className="step-line" />

          <div className="checkout-step">
            <span>3</span>
            <strong>Payment</strong>
          </div>

        </section>


        {/* =====================================================
            MAIN CHECKOUT
        ===================================================== */}

        <section className="checkout-container">

          {/* =================================================
              LEFT
          ================================================= */}

          <div className="checkout-main">

            {/* CONTACT INFORMATION */}

            <div className="checkout-section">

              <div className="checkout-section-heading">

                <div>
                  <span className="section-number">
                    01
                  </span>

                  <h2>
                    Contact Information
                  </h2>
                </div>

                <span className="required-note">
                  Required
                </span>

              </div>

              <div className="form-grid">

                <div className="form-group full">
                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                  />

                  <small>
                    Your order confirmation will be sent here.
                  </small>
                </div>

                <div className="form-group">
                  <label>
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="First name"
                  />
                </div>

                <div className="form-group">
                  <label>
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Last name"
                  />
                </div>

                <div className="form-group">
                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div className="form-group">
                  <label>
                    WhatsApp Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                  />
                </div>

              </div>

            </div>


            {/* DELIVERY INFORMATION */}

            <div className="checkout-section">

              <div className="checkout-section-heading">

                <div>
                  <span className="section-number">
                    02
                  </span>

                  <h2>
                    Delivery Information
                  </h2>
                </div>

              </div>

              <div className="form-grid">

                <div className="form-group full">
                  <label>
                    Country
                  </label>

                  <div className="select-wrapper">
                    <select defaultValue="Nigeria">
                      <option>Nigeria</option>
                    </select>

                    <ChevronDown size={14} />
                  </div>
                </div>

                <div className="form-group full">
                  <label>
                    Street Address
                  </label>

                  <input
                    type="text"
                    placeholder="House number and street name"
                  />
                </div>

                <div className="form-group">
                  <label>
                    State
                  </label>

                  <div className="select-wrapper">
                    <select defaultValue="">
                      <option value="" disabled>
                        Select state
                      </option>
                      <option>Lagos</option>
                      <option>Abuja</option>
                      <option>Rivers</option>
                      <option>Oyo</option>
                      <option>Enugu</option>
                      <option>Delta</option>
                      <option>Kano</option>
                      <option>Other</option>
                    </select>

                    <ChevronDown size={14} />
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    City
                  </label>

                  <input
                    type="text"
                    placeholder="City"
                  />
                </div>

                <div className="form-group">
                  <label>
                    Postal Code
                  </label>

                  <input
                    type="text"
                    placeholder="Postal code"
                  />
                </div>

                <div className="form-group">
                  <label>
                    Landmark
                    <span>Optional</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Nearby landmark"
                  />
                </div>

                <div className="form-group full">
                  <label>
                    Delivery Instructions
                    <span>Optional</span>
                  </label>

                  <textarea
                    placeholder="Any special instructions for your delivery?"
                    rows={4}
                  />
                </div>

              </div>

            </div>


            {/* DELIVERY METHOD */}

            <div className="checkout-section">

              <div className="checkout-section-heading">

                <div>
                  <span className="section-number">
                    03
                  </span>

                  <h2>
                    Delivery Method
                  </h2>
                </div>

              </div>

              <div className="delivery-options">

                <button
                  type="button"
                  className={`delivery-option ${
                    deliveryMethod === "standard"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setDeliveryMethod("standard")
                  }
                >

                  <div className="radio">
                    {deliveryMethod === "standard" && (
                      <Check size={10} />
                    )}
                  </div>

                  <div className="delivery-icon">
                    <Truck size={19} />
                  </div>

                  <div className="delivery-details">
                    <strong>
                      Standard Delivery
                    </strong>

                    <span>
                      3–7 business days
                    </span>
                  </div>

                  <b>
                    ₦3,500
                  </b>

                </button>


                <button
                  type="button"
                  className={`delivery-option ${
                    deliveryMethod === "express"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setDeliveryMethod("express")
                  }
                >

                  <div className="radio">
                    {deliveryMethod === "express" && (
                      <Check size={10} />
                    )}
                  </div>

                  <div className="delivery-icon">
                    <Truck size={19} />
                  </div>

                  <div className="delivery-details">
                    <strong>
                      Express Delivery
                    </strong>

                    <span>
                      1–2 business days
                    </span>
                  </div>

                  <b>
                    ₦7,500
                  </b>

                </button>

              </div>

            </div>


            {/* PAYMENT */}

            <div className="checkout-section">

              <div className="checkout-section-heading">

                <div>
                  <span className="section-number">
                    04
                  </span>

                  <h2>
                    Payment
                  </h2>
                </div>

                <div className="secure-payment">
                  <Lock size={11} />
                  Secure
                </div>

              </div>

              <div className="payment-options">

                <button
                  type="button"
                  className={`payment-option ${
                    paymentMethod === "card"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setPaymentMethod("card")
                  }
                >

                  <div className="radio">
                    {paymentMethod === "card" && (
                      <Check size={10} />
                    )}
                  </div>

                  <CreditCard size={19} />

                  <div>
                    <strong>
                      Card Payment
                    </strong>

                    <span>
                      Pay securely with your debit or credit card.
                    </span>
                  </div>

                </button>


                <button
                  type="button"
                  className={`payment-option ${
                    paymentMethod === "transfer"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setPaymentMethod("transfer")
                  }
                >

                  <div className="radio">
                    {paymentMethod === "transfer" && (
                      <Check size={10} />
                    )}
                  </div>

                  <CreditCard size={19} />

                  <div>
                    <strong>
                      Bank Transfer
                    </strong>

                    <span>
                      Receive bank details after placing your order.
                    </span>
                  </div>

                </button>


                <button
                  type="button"
                  className={`payment-option ${
                    paymentMethod === "flexpay"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setPaymentMethod("flexpay")
                  }
                >

                  <div className="radio">
                    {paymentMethod === "flexpay" && (
                      <Check size={10} />
                    )}
                  </div>

                  <div className="flexpay-mark">
                    LC
                  </div>

                  <div>
                    <strong>
                      Lucéra FlexPay
                    </strong>

                    <span>
                      Split your payment into manageable installments.
                    </span>
                  </div>

                </button>

              </div>

            </div>


            {/* CARD */}

            {paymentMethod === "card" && (
              <div className="card-payment-box">

                <div className="form-grid">

                  <div className="form-group full">
                    <label>
                      Card Number
                    </label>

                    <div className="input-with-icon">
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                      />

                      <CreditCard size={15} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>
                      Expiry Date
                    </label>

                    <input
                      type="text"
                      placeholder="MM / YY"
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      CVV
                    </label>

                    <input
                      type="password"
                      placeholder="•••"
                    />
                  </div>

                </div>

              </div>
            )}


            {/* BILLING ADDRESS */}

            <div className="billing-option">

              <label className="checkbox-label">

                <input
                  type="checkbox"
                  checked={sameAddress}
                  onChange={(event) =>
                    setSameAddress(event.target.checked)
                  }
                />

                {/* <span className="custom-checkbox">
                  {sameAddress && <Check size={11} />}
                </span>

                <span className="address-same">
                  Billing address is the same as delivery address
                </span> */}

              </label>

            </div>


            {/* ORDER BUTTON */}

            <div className="place-order-area">
            <a href="order-success">
              <button className="place-order-button">

                <Lock size={13} />

                PLACE ORDER

                <ArrowRight size={15} />

              </button>
            </a>
              <p>
                By placing your order, you agree to our{" "}
                <Link href="/terms">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy">
                  Privacy Policy
                </Link>.
              </p>

            </div>

          </div>


          {/* =================================================
              ORDER SUMMARY
          ================================================= */}

          <aside className="checkout-summary">

            <div className="summary-card">

              <div className="summary-heading">

                <h2>
                  Your Order
                </h2>

                <Link href="/cart">
                  Edit
                </Link>

              </div>


              <div className="summary-products">

                {cartItems.map((item) => (

                  <div
                    className="summary-product"
                    key={item.id}
                  >

                    <div className="summary-product-image">

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <span>
                        {item.quantity}
                      </span>

                    </div>

                    <div className="summary-product-info">

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        Size: {item.size}
                      </p>

                      <strong>
                        {formatPrice(item.price)}
                      </strong>

                    </div>

                  </div>

                ))}

              </div>


              {/* PROMO */}

              {/* <div className="promo-box">

                <label>
                  Promo Code
                </label>

                <div>
                  <input
                    type="text"
                    placeholder="Enter code"
                  />

                  <button>
                    APPLY
                  </button>
                </div>

              </div> */}


              {/* TOTALS */}

              <div className="summary-totals">

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
                    {formatPrice(deliveryFee)}
                  </strong>
                </div>

                <div>
                  <span>
                    Discount
                  </span>

                  <strong>
                    ₦0
                  </strong>
                </div>

              </div>


              <div className="summary-total">

                <span>
                  Total
                </span>

                <strong>
                  {formatPrice(total)}
                </strong>

              </div>


              {/* SECURITY */}

              <div className="summary-security">

                <ShieldCheck size={19} />

                <div>
                  <strong>
                    Secure Checkout
                  </strong>

                  <p>
                    Your payment information is protected
                    with industry-standard encryption.
                  </p>
                </div>

              </div>

            </div>


            {/* DELIVERY NOTICE */}

            <div className="summary-notice">

              <MapPin size={16} />

              <div>
                <strong>
                  Delivering across Nigeria
                </strong>

                <p>
                  We carefully package every order
                  before dispatching it to you.
                </p>
              </div>

            </div>

          </aside>

        </section>

      </main>

      <Footer />
    </>
  );
}