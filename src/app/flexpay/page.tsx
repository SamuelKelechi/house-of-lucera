"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Crown,
  ShieldCheck,
  Truck,
  WalletCards,
  Clock3,
  Heart,
  ChevronDown,
  CalendarDays,
} from "lucide-react";

import "./flexpay.css";


/* =========================================================
   PRODUCTS
========================================================= */

const hairProducts = [
  {
    id: 1,
    name: "Bone Straight 24”",
    price: 420000,
    installment: "₦70,000/month",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Body Wave 22”",
    price: 380000,
    installment: "₦63,300/month",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Water Wave 24”",
    price: 400000,
    installment: "₦66,700/month",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Deep Wave 22”",
    price: 370000,
    installment: "₦61,700/month",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=85",
  },
];

const clothingProducts = [
  {
    id: 5,
    name: "Léonie Silk Dress",
    price: 285000,
    installment: "₦47,500/month",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    name: "Élise Evening Dress",
    price: 320000,
    installment: "₦53,300/month",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 7,
    name: "Lucienne Satin Gown",
    price: 350000,
    installment: "₦58,300/month",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 8,
    name: "Amélie Signature Dress",
    price: 295000,
    installment: "₦49,200/month",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=85",
  },
];


/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    icon: WalletCards,
    title: "NO HIDDEN FEES",
    text: "Transparent and straightforward.",
  },
  {
    icon: Clock3,
    title: "FLEXIBLE DURATION",
    text: "Choose from multiple plan options.",
  },
  {
    icon: ShieldCheck,
    title: "SECURE & SAFE",
    text: "Your payments are 100% protected.",
  },
  {
    icon: Truck,
    title: "TIMELY DELIVERY",
    text: "We deliver as soon as you complete payment.",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

export default function FlexPayPage() {

  const [activeTab, setActiveTab] =
    useState<"hair" | "clothing">("hair");

  const [selectedProduct, setSelectedProduct] =
    useState(hairProducts[0]);

  const [plan, setPlan] =
    useState("4 Months");


  const products =
    activeTab === "hair"
      ? hairProducts
      : clothingProducts;


  /* =========================================================
     PLAN CALCULATION
  ========================================================== */

  const months =
    Number(plan.split(" ")[0]);


  const monthlyPayment =
    useMemo(() => {

      return Math.ceil(
        selectedProduct.price / months
      );

    }, [selectedProduct, months]);


  /* =========================================================
     PRODUCT CHANGE
  ========================================================== */

  const changeProduct = (
    direction: "next" | "prev"
  ) => {

    const currentIndex =
      products.findIndex(
        (product) =>
          product.id === selectedProduct.id
      );


    let nextIndex;


    if (direction === "next") {

      nextIndex =
        currentIndex === products.length - 1
          ? 0
          : currentIndex + 1;

    } else {

      nextIndex =
        currentIndex === 0
          ? products.length - 1
          : currentIndex - 1;

    }


    setSelectedProduct(
      products[nextIndex]
    );
  };


  /* =========================================================
     TAB CHANGE
  ========================================================== */

  const changeTab = (
    tab: "hair" | "clothing"
  ) => {

    setActiveTab(tab);


    if (tab === "hair") {

      setSelectedProduct(
        hairProducts[0]
      );

    } else {

      setSelectedProduct(
        clothingProducts[0]
      );

    }
  };


  return (
    <>
      <Header />

      <main className="flexpay-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="flexpay-hero">

          <div className="flexpay-hero-content">

            <div className="flexpay-breadcrumb">

              <Link href="/">
                Home
              </Link>

              <span>›</span>

              <span>
                FlexPay
              </span>

            </div>


            <div className="flexpay-hero-copy">

              <span className="flexpay-eyebrow">
                LUCÉRA FLEXPAY
              </span>


              <h1>
                Luxury you love.
                <br />
                Pay your way.
              </h1>


              <p>
                Own premium clothing and luxury hair
                <br className="flexpay-desktop-only" />
                with easy installments that fit your lifestyle.
              </p>


              <div className="flexpay-hero-actions">

                <button
                  onClick={() =>
                    document
                      .getElementById(
                        "flexpay-plans"
                      )
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="flexpay-button flexpay-button-dark"
                >
                  HOW FLEXPAY WORKS
                </button>


                <button
                  onClick={() =>
                    document
                      .getElementById(
                        "flexpay-payment"
                      )
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="flexpay-button flexpay-button-light"
                >
                  VIEW PAYMENT PLANS
                </button>

              </div>

            </div>

          </div>


          <div className="flexpay-hero-image">

            <img
              src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1000&q=90"
              alt="Lucéra luxury fashion"
            />

          </div>

        </section>


        {/* =================================================
            BENEFITS
        ================================================= */}

        <section className="flexpay-benefits">

          {benefits.map((benefit) => {

            const Icon = benefit.icon;

            return (

              <div
                className="flexpay-benefit"
                key={benefit.title}
              >

                <div className="flexpay-benefit-icon">
                  <Icon size={18} />
                </div>


                <div>

                  <strong>
                    {benefit.title}
                  </strong>

                  <p>
                    {benefit.text}
                  </p>

                </div>

              </div>

            );

          })}

        </section>


        {/* =================================================
            PRODUCT SELECTION
        ================================================= */}

        <section
          className="flexpay-selection"
          id="flexpay-plans"
        >

          <div className="flexpay-section-heading">

            <span>
              START YOUR FLEXPAY PLAN
            </span>

            <h2>
              Choose an item to start
            </h2>

          </div>


          {/* TABS */}

          <div className="flexpay-tabs">

            <button
              className={
                activeTab === "hair"
                  ? "active"
                  : ""
              }
              onClick={() =>
                changeTab("hair")
              }
            >
              LUXURY HAIR
            </button>


            <button
              className={
                activeTab === "clothing"
                  ? "active"
                  : ""
              }
              onClick={() =>
                changeTab("clothing")
              }
            >
              CLOTHING
            </button>

          </div>


          {/* PRODUCT CAROUSEL */}

          <div className="flexpay-product-wrapper">

            <button
              className="flexpay-carousel-arrow"
              onClick={() =>
                changeProduct("prev")
              }
              aria-label="Previous product"
            >
              <ArrowLeft size={18} />
            </button>


            <div className="flexpay-product-grid">

              {products.map((product) => (

                <button
                  key={product.id}
                  className={
                    selectedProduct.id === product.id
                      ? "flexpay-product-card selected"
                      : "flexpay-product-card"
                  }
                  onClick={() =>
                    setSelectedProduct(product)
                  }
                >

                  <div className="flexpay-product-image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />


                    <span className="flexpay-product-heart">
                      <Heart size={13} />
                    </span>

                  </div>


                  <div className="flexpay-product-info">

                    <h3>
                      {product.name}
                    </h3>


                    <strong>
                      ₦{product.price.toLocaleString()}
                    </strong>


                    <span>
                      or from
                    </span>


                    <b>
                      {product.installment}
                    </b>

                  </div>

                </button>

              ))}

            </div>


            <button
              className="flexpay-carousel-arrow"
              onClick={() =>
                changeProduct("next")
              }
              aria-label="Next product"
            >
              <ArrowRight size={18} />
            </button>

          </div>

        </section>


        {/* =================================================
            PAYMENT PLAN
        ================================================= */}

        <section
          className="flexpay-payment"
          id="flexpay-payment"
        >

          <div className="flexpay-payment-heading">

            <span>
              YOUR PAYMENT PLAN
            </span>

            <h2>
              FlexPay payment plan example
            </h2>

          </div>


          <div className="flexpay-payment-box">

            {/* PRODUCT */}

            <div className="flexpay-payment-product">

              <div className="flexpay-payment-image">

                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                />

              </div>


              <div className="flexpay-payment-product-info">

                <strong>
                  {selectedProduct.name}
                </strong>

                <span>
                  Total Price
                </span>

                <b>
                  ₦{selectedProduct.price.toLocaleString()}
                </b>

              </div>

            </div>


            {/* PLAN SELECTOR */}

            <div className="flexpay-plan-selector">

              <label>
                Choose Plan
              </label>


              <div className="flexpay-select">

                <select
                  value={plan}
                  onChange={(event) =>
                    setPlan(
                      event.target.value
                    )
                  }
                >

                  <option>
                    3 Months
                  </option>

                  <option>
                    4 Months
                  </option>

                  <option>
                    6 Months
                  </option>

                  <option>
                    8 Months
                  </option>

                </select>


                <ChevronDown size={14} />

              </div>

            </div>


            {/* PAYMENT TABLE */}

            <div className="flexpay-table-wrapper">

              <div className="flexpay-table-head">

                <span>
                  PAYMENT
                </span>

                <span>
                  DUE DATE
                </span>

                <span>
                  AMOUNT
                </span>

                <span>
                  STATUS
                </span>

              </div>


              {Array.from({
                length: months,
              }).map((_, index) => {

                const paymentNumber =
                  index + 1;


                const amount =
                  index === months - 1
                    ? selectedProduct.price -
                      monthlyPayment *
                        (months - 1)
                    : monthlyPayment;


                return (

                  <div
                    className="flexpay-table-row"
                    key={paymentNumber}
                  >

                    <span>
                      {paymentNumber === 1
                        ? "1st Payment"
                        : `${paymentNumber}th Payment`}
                    </span>


                    <span>
                      {index === 0
                        ? "Aug 1, 2026"
                        : index === 1
                        ? "Sept 1, 2026"
                        : index === 2
                        ? "Oct 1, 2026"
                        : "Nov 1, 2026"}
                    </span>


                    <span>
                      ₦{amount.toLocaleString()}
                    </span>


                    <span
                      className={
                        index === 0
                          ? "paid"
                          : ""
                      }
                    >
                      {index === 0
                        ? "Pay Now"
                        : "Pending"}
                    </span>

                  </div>

                );

              })}

            </div>


            {/* CTA */}

            <button className="flexpay-start-button">

              START FLEXPAY PLAN

              <Check size={14} />

            </button>

          </div>

        </section>


        {/* =================================================
            HOW IT WORKS
        ================================================= */}

        <section className="flexpay-how">

          <div className="flexpay-how-heading">

            <span>
              SIMPLE & FLEXIBLE
            </span>

            <h2>
              How FlexPay works
            </h2>

          </div>


          <div className="flexpay-steps">

            <div className="flexpay-step">

              <div className="flexpay-step-number">
                01
              </div>

              <Crown size={21} />

              <h3>
                Choose your piece
              </h3>

              <p>
                Select the luxury hair or
                clothing item you love.
              </p>

            </div>


            <div className="flexpay-step">

              <div className="flexpay-step-number">
                02
              </div>

              <CalendarDays size={21} />

              <h3>
                Choose your plan
              </h3>

              <p>
                Select a payment duration
                that works for you.
              </p>

            </div>


            <div className="flexpay-step">

              <div className="flexpay-step-number">
                03
              </div>

              <WalletCards size={21} />

              <h3>
                Make your payments
              </h3>

              <p>
                Pay your installments securely
                according to your plan.
              </p>

            </div>


            <div className="flexpay-step">

              <div className="flexpay-step-number">
                04
              </div>

              <Truck size={21} />

              <h3>
                Receive your order
              </h3>

              <p>
                Once payment is complete,
                your order is delivered.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="flexpay-final-cta">

          <div className="flexpay-final-content">

            <span>
              LUCÉRA FLEXPAY
            </span>


            <h2>
              Own now.
              <br />
              Pay over time.
            </h2>


            <p>
              Make your dream a reality today.
              <br />
              You deserve the best.
            </p>


            <Link
              href="/luxury-hair"
              className="flexpay-final-button"
            >
              START SHOPPING
            </Link>

          </div>


          <div className="flexpay-final-image">

            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=90"
              alt="Lucéra luxury collection"
            />

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}