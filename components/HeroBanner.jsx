import React from "react";
import Link from "next/link";
function HeroBanner() {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">Small Text</p>
      <h3>MID Text</h3>
      <img src="" alt="headphones" className="hero-banner-image" />
      <div>
        <Link href="/product/ID">
          <button type="button"> Button Text</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>DESCRIPTION</p>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
