// src/components/Card.js
import React from 'react';

export default function FeatureCard({ icon, title, text }) {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="card-body">
        <div className="fs-2 text-primary mb-2"><i className={`bi ${icon}`}></i></div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-secondary">{text}</p>
      </div>
    </div>
  );
}
