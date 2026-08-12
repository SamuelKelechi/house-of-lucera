"use client";

import Link from "next/link";
import { Check, ArrowRight, ShoppingBag, Package, Truck, Home } from "lucide-react";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./order-success.css";
export default function OrderSuccess() {
  const [orderNumber, setOrderNumber] = useState("LUC-000000");

  useEffect(() => {
    // Generate the order number only on the client
    // after hydration has completed.
    const generatedOrderNumber = `LUC-${Math.floor(
      100000 + Math.random() * 900000
    )}`;

    setOrderNumber(generatedOrderNumber);
  }, []);

  return (
    <>
    <Header />
    <main className="order-success-page">

      {/* SUCCESS HERO */}
      <section className="success-hero">

        <div className="success-icon">
          <Check size={30} strokeWidth={1.8} />
        </div>

        <span className="success-eyebrow">
          HOUSE OF LUCÉRA
        </span>

        <h1>
          Order Confirmed
        </h1>

        <p>
          Thank you for shopping with Lucéra.
          <br className="desktop-break" />
          Your order has been received successfully.
        </p>

        <div className="order-number">
          <span>ORDER NUMBER</span>
          <strong>{orderNumber}</strong>
        </div>

      </section>


      {/* ORDER CONTENT */}
      <section className="success-content">

        {/* LEFT */}
        <div className="success-main">

          <div className="success-card">

            <div className="card-heading">
              <div>
                <span className="small-label">
                  YOUR ORDER
                </span>

                <h2>
                  We are preparing your order.
                </h2>
              </div>

              <Package size={24} />
            </div>

            <div className="success-divider" />

            <div className="order-status">

              <div className="status-step active">

                <div className="status-icon">
                  <Check size={14} />
                </div>

                <div>
                  <strong>
                    Order Confirmed
                  </strong>

                  <span>
                    Your order has been received.
                  </span>
                </div>

              </div>


              <div className="status-line" />


              <div className="status-step">

                <div className="status-icon">
                  <Package size={14} />
                </div>

                <div>
                  <strong>
                    Preparing Order
                  </strong>

                  <span>
                    We will carefully prepare your items.
                  </span>
                </div>

              </div>


              <div className="status-line" />


              <div className="status-step">

                <div className="status-icon">
                  <Truck size={14} />
                </div>

                <div>
                  <strong>
                    Delivery
                  </strong>

                  <span>
                    Your order will be delivered to you.
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* DELIVERY INFORMATION */}
          <div className="success-card">

            <div className="card-heading">

              <div>
                <span className="small-label">
                  DELIVERY
                </span>

                <h2>
                  Delivery Information
                </h2>
              </div>

              <Truck size={22} />

            </div>

            <div className="success-divider" />

            <div className="delivery-placeholder">

              <p>
                Your delivery details will appear here
                once your order has been processed.
              </p>

            </div>

          </div>


          {/* IMPORTANT NOTE */}
          <div className="success-note">

            <strong>
              What happens next?
            </strong>

            <p>
              Our team will review your order and begin
              preparing your items. You will receive an
              update once your order is ready for delivery.
            </p>

          </div>

        </div>


        {/* RIGHT SUMMARY */}
        <aside className="success-summary">

          <span className="small-label">
            THANK YOU
          </span>

          <h2>
            Enjoy your
            <br />
            <em>Lucéra experience.</em>
          </h2>

          <p>
            Every piece is carefully selected to help
            you feel confident, elegant and unforgettable.
          </p>

          <div className="summary-divider" />

          <div className="summary-row">
            <span>Order</span>
            <strong>{orderNumber}</strong>
          </div>

          <div className="summary-row">
            <span>Status</span>
            <strong className="confirmed">
              Confirmed
            </strong>
          </div>

          <div className="summary-divider" />

          <Link
            href="/clothing"
            className="success-button primary"
          >
            CONTINUE SHOPPING
            <ArrowRight size={14} />
          </Link>

          <Link
            href="/"
            className="success-button secondary"
          >
            <Home size={14} />
            BACK TO HOME
          </Link>

        </aside>

      </section>


      {/* FOOTER MESSAGE */}
      <section className="success-footer-message">

        <span>
          HOUSE OF LUCÉRA
        </span>

        <p>
          Luxury within reach.
        </p>

      </section>

    </main>
    <Footer />
    </>
  );
}