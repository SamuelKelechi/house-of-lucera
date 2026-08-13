"use client";

import { useState } from "react";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";

import "./contact.css";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <>
      <Header />

      <main className="contact-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="contact-hero">

          <div className="contact-hero-content">

            <div className="contact-breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <span>Contact</span>
            </div>

            <span className="contact-eyebrow">
              GET IN TOUCH
            </span>

            <h1>
              We’d love to
              <br />
              hear from you.
            </h1>

            <p>
              Whether you have a question about an order,
              FlexPay, our collections, or simply need
              assistance, our team is here for you.
            </p>

          </div>

          <div className="contact-hero-image">

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=90"
              alt="House of Lucéra fashion collection"
            />

          </div>

        </section>


        {/* =====================================================
            CONTACT CONTENT
        ===================================================== */}

        <section className="contact-section">

          <div className="contact-info">

            <span className="contact-section-label">
              CONTACT LUCÉRA
            </span>

            <h2>
              Let’s start a conversation.
            </h2>

            <p className="contact-intro">
              Our team is available to help with product
              enquiries, orders, payments and anything
              else you may need.
            </p>


            {/* EMAIL */}

            <a
              href="mailto:hello@houseoflucera.com"
              className="contact-detail"
            >

              <span className="contact-detail-icon">
                <Mail size={18} />
              </span>

              <span>
                <small>EMAIL</small>
                <strong>hello@houseoflucera.com</strong>
              </span>

            </a>


            {/* PHONE */}

            <a
              href="tel:+2340000000000"
              className="contact-detail"
            >

              <span className="contact-detail-icon">
                <Phone size={18} />
              </span>

              <span>
                <small>PHONE</small>
                <strong>+234 000 000 0000</strong>
              </span>

            </a>


            {/* LOCATION */}

            <div className="contact-detail">

              <span className="contact-detail-icon">
                <MapPin size={18} />
              </span>

              <span>
                <small>LOCATION</small>
                <strong>Lagos, Nigeria</strong>
              </span>

            </div>


            {/* SOCIAL */}

            <a
              href="#"
              className="contact-instagram"
            >

              <span>
                {/* <Instagram size={17} /> */}
                I
              </span>

              <span>
                Follow Lucéra on Instagram
              </span>

              <ArrowRight size={15} />

            </a>

          </div>


          {/* =================================================
              FORM
          ================================================= */}

          <div className="contact-form-wrapper">

            <div className="contact-form-heading">

              <span>
                SEND US A MESSAGE
              </span>

              <h3>
                How can we help?
              </h3>

            </div>


            <form onSubmit={handleSubmit}>

              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="name">
                    YOUR NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />

                </div>


                <div className="contact-field">

                  <label htmlFor="email">
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                </div>

              </div>


              <div className="contact-field">

                <label htmlFor="subject">
                  SUBJECT
                </label>

                <select
                  id="subject"
                  name="subject"
                  defaultValue=""
                  required
                >

                  <option value="" disabled>
                    Select a subject
                  </option>

                  <option value="order">
                    Order enquiry
                  </option>

                  <option value="flexpay">
                    FlexPay enquiry
                  </option>

                  <option value="hair">
                    Luxury Hair
                  </option>

                  <option value="clothing">
                    Clothing
                  </option>

                  <option value="general">
                    General enquiry
                  </option>

                </select>

              </div>


              <div className="contact-field">

                <label htmlFor="message">
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  required
                />

              </div>


              <button
                type="submit"
                className="contact-submit"
              >

                {submitted
                  ? "MESSAGE SENT"
                  : "SEND MESSAGE"}

                <Send size={15} />

              </button>


              {submitted && (
                <p className="contact-success">
                  Thank you. Your message has been received.
                </p>
              )}

            </form>

          </div>

        </section>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <section className="contact-bottom">

          <div>

            <span>
              HOUSE OF LUCÉRA
            </span>

            <h2>
              Luxury should feel
              <br />
              effortless.
            </h2>

          </div>

          <Link
            href="/luxury-hair"
            className="contact-bottom-button"
          >
            EXPLORE COLLECTION
            <ArrowRight size={15} />
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}