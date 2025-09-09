// src/components/Testimonials.js
import React from 'react';

export default function Testimonials() {
  const items = [
    { quote: 'Found the right lawyer in minutes.', who: 'A.K.' },
    { quote: 'Clear guidance before I spoke to a human.', who: 'R.S.' },
    { quote: 'Booking and payment were seamless.', who: 'M.P.' },
  ];
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">What clients say</h2>
        <div id="testi" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {items.map((t,i)=>(
              <div className={`carousel-item ${i===0?'active':''}`} key={i}>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8">
                    <div className="p-4 bg-white rounded-3 shadow-sm text-center">
                      <p className="lead mb-2">“{t.quote}”</p>
                      <div className="text-secondary">— {t.who}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-none d-md-block">
            <button className="carousel-control-prev" type="button" data-bs-target="#testi" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testi" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
