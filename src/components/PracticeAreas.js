// src/components/PracticeAreas.js
import React from 'react';

export default function PracticeAreas() {
  const areas = [
    { icon: 'bi-people', name: 'Family Law' },
    { icon: 'bi-briefcase', name: 'Business & Corporate' },
    { icon: 'bi-shield-lock', name: 'Criminal Defense' },
    { icon: 'bi-house-door', name: 'Property & Real Estate' },
    { icon: 'bi-person-badge', name: 'Employment' },
    { icon: 'bi-airplane', name: 'Immigration' },
  ];
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Featured practice areas</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {areas.map((a, i) => (
            <div className="col" key={i}>
              <a href={`/areas/${a.name.toLowerCase().replace(/[^a-z]+/g,'-')}`} className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex align-items-center">
                    <div className="fs-2 text-primary me-3"><i className={`bi ${a.icon}`}></i></div>
                    <h5 className="card-title mb-0 text-dark">{a.name}</h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
