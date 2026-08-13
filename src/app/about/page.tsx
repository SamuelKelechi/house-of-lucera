"use client";

import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  Crown,
  Heart,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import "./about.css";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="about-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="about-hero">

          <div className="about-hero-content">

            <div className="about-breadcrumb">
              <Link href="/">
                Home
              </Link>

              <span>›</span>

              <span>About Us</span>
            </div>

            <div className="about-hero-copy">

              <span className="about-eyebrow">
                HOUSE OF LUCÉRA
              </span>

              <h1>
                Luxury made
                <br />
                personal.
              </h1>

              <p>
                A celebration of refined fashion, effortless
                beauty and the confidence that comes from
                choosing pieces that feel uniquely yours.
              </p>

            </div>

          </div>

          <div className="about-hero-image">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=90"
              alt="House of Lucéra luxury fashion"
            />
          </div>

        </section>


        {/* =================================================
            INTRODUCTION
        ================================================= */}

        <section className="about-intro">

          <div className="about-intro-label">
            <span>01</span>
            <span>OUR STORY</span>
          </div>

          <div className="about-intro-content">

            <div className="about-intro-heading">

              <span>
                THE LUCÉRA EXPERIENCE
              </span>

              <h2>
                More than fashion.
                <br />
                It is how you feel.
              </h2>

            </div>

            <div className="about-intro-text">

              <p>
                House of Lucéra was created for women who
                appreciate beautiful things, thoughtful
                details and the confidence that comes with
                looking and feeling their best.
              </p>

              <p>
                Our collection brings together carefully
                selected clothing and premium luxury hair,
                creating a destination where elegance feels
                effortless and personal style has no limits.
              </p>

              <p>
                From the first touch to the final detail,
                every Lucéra experience is designed around
                quality, confidence and timeless beauty.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            IMAGE STORY
        ================================================= */}

        <section className="about-story">

          <div className="about-story-image">
            <img
              src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1000&q=90"
              alt="Lucéra fashion collection"
            />
          </div>

          <div className="about-story-content">

            <span className="about-eyebrow">
              OUR PHILOSOPHY
            </span>

            <h2>
              Elegance should
              <br />
              feel effortless.
            </h2>

            <div className="about-gold-line" />

            <p>
              We believe luxury is not simply about what
              you wear. It is about the feeling it creates.
            </p>

            <p>
              That is why we focus on pieces that combine
              sophistication, femininity and individuality —
              allowing every woman to express herself with
              confidence.
            </p>

            <Link
              href="/luxury-hair"
              className="about-outline-button"
            >
              EXPLORE THE COLLECTION
              <ArrowRight size={15} />
            </Link>

          </div>

        </section>


        {/* =================================================
            VALUES
        ================================================= */}

        <section className="about-values">

          <div className="about-section-heading">

            <span>
              WHAT DEFINES US
            </span>

            <h2>
              The Lucéra standard
            </h2>

            <p>
              Every detail matters when the goal is to create
              an experience worthy of you.
            </p>

          </div>


          <div className="about-values-grid">

            <div className="about-value-card">

              <div className="about-value-number">
                01
              </div>

              <div className="about-value-icon">
                <Crown size={21} />
              </div>

              <h3>
                Timeless Elegance
              </h3>

              <p>
                Pieces selected to transcend trends and
                remain beautiful season after season.
              </p>

            </div>


            <div className="about-value-card">

              <div className="about-value-number">
                02
              </div>

              <div className="about-value-icon">
                <Sparkles size={21} />
              </div>

              <h3>
                Exceptional Quality
              </h3>

              <p>
                We believe premium quality should be felt
                in every detail, finish and experience.
              </p>

            </div>


            <div className="about-value-card">

              <div className="about-value-number">
                03
              </div>

              <div className="about-value-icon">
                <Heart size={21} />
              </div>

              <h3>
                Personal Expression
              </h3>

              <p>
                Your style is yours. We simply provide the
                pieces that help you express it beautifully.
              </p>

            </div>


            <div className="about-value-card">

              <div className="about-value-number">
                04
              </div>

              <div className="about-value-icon">
                <ShieldCheck size={21} />
              </div>

              <h3>
                Trust & Care
              </h3>

              <p>
                From selection to delivery, every interaction
                is built around care, transparency and trust.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            LUCÉRA STATEMENT
        ================================================= */}

        <section className="about-statement">

          <div className="about-statement-inner">

            <span className="about-eyebrow">
              THE LUCÉRA WOMAN
            </span>

            <h2>
              She knows what she wants.
              <br />
              She chooses beautifully.
              <br />
              She wears it confidently.
            </h2>

            <p>
              Lucéra is for every woman who believes her
              style should reflect the woman she is becoming.
            </p>

          </div>

        </section>


        {/* =================================================
            MISSION
        ================================================= */}

        <section className="about-mission">

          <div className="about-mission-content">

            <div className="about-mission-heading">

              <span>
                OUR PROMISE
              </span>

              <h2>
                Designed around
                <br />
                your confidence.
              </h2>

            </div>

            <div className="about-mission-text">

              <p>
                At House of Lucéra, our promise is simple:
                to make luxury fashion feel accessible,
                personal and effortless.
              </p>

              <p>
                Whether you are discovering a new signature
                look or investing in a timeless piece, we want
                every Lucéra purchase to feel special from
                beginning to end.
              </p>

              <Link
                href="/contact"
                className="about-dark-button"
              >
                SPEAK WITH US
                <ArrowRight size={15} />
              </Link>

            </div>

          </div>

        </section>


        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="about-final">

          <div className="about-final-image">

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90"
              alt="Lucéra luxury collection"
            />

          </div>

          <div className="about-final-content">

            <span>
              HOUSE OF LUCÉRA
            </span>

            <h2>
              Your style.
              <br />
              Your moment.
            </h2>

            <p>
              Discover pieces made to become part of
              your story.
            </p>

            <Link
              href="/luxury-hair"
              className="about-final-button"
            >
              SHOP LUCÉRA
              <ArrowRight size={15} />
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}