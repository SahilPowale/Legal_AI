// src/components/HowItWorks.js
import React from 'react';

export default function HowItWorks() {
  const steps = [
    { icon: 'bi-chat-dots', title: 'Describe your issue', text: 'Tell us briefly what happened and select a practice area.' },
    { icon: 'bi-robot', title: 'Get AI guidance', text: 'Receive instant, general guidance and next steps in minutes.' },
    { icon: 'bi-handshake', title: 'Connect with a lawyer', text: 'Book a consultation with a vetted, relevant attorney.' },
  ];
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">How it works</h2>
        <div className="row g-4">
          {steps.map((s, i) => (
            <div key={i} className="col-12 col-md-4">
              <div className="h-100 text-center p-4 bg-white rounded-3 shadow-sm">
                <div className="fs-1 text-primary mb-2"><i className={`bi ${s.icon}`}></i></div>
                <h5 className="mb-2">{s.title}</h5>
                <p className="text-secondary mb-0">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
