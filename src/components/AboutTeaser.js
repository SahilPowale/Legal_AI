// src/components/AboutTeaser.js
import React from 'react';

export default function AboutTeaser() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-12 col-md-6">
            <h2 className="mb-3">Why LegalBridge AI?</h2>
            <p className="text-secondary">
              Combining instant AI guidance with vetted, licensed lawyers so legal help is accessible, clear, and affordable.
            </p>
            <a href="/about" className="btn btn-outline-primary">Learn more</a>
          </div>
          <div className="col-12 col-md-6">
            <img src="/media/about-illustration.png" alt="AI and lawyer collaboration" className="img-fluid rounded-3 shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
