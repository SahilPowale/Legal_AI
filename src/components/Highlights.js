import React from 'react';
import FeatureCard from './Card';

export default function Highlights(){
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Why choose us</h2>
        <div className="row g-4">
          <div className="col-12 col-md-4"><FeatureCard icon="bi-clock-history" title="24/7 access" text="Get guidance anytime and connect with lawyers fast." /></div>
          <div className="col-12 col-md-4"><FeatureCard icon="bi-shield-lock" title="Secure & private" text="Data encrypted in transit and at rest." /></div>
          <div className="col-12 col-md-4"><FeatureCard icon="bi-stars" title="Vetted experts" text="Licensed lawyers with verified credentials." /></div>
        </div>
      </div>
    </section>
  );
}
