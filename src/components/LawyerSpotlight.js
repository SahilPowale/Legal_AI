// src/components/LawyerSpotlight.js
import React from 'react';

export default function LawyerSpotlight() {
  const lawyers = [
    { img: '/media/lawyer1.jpg', name: 'Varad Patil, Advocate', tags: 'Family Law', rating: '4.9★' },
    { img: '/media/lawyer2.jpg', name: 'Varun Joshi, Adv.', tags: 'Corporate', rating: '4.8★' },
    { img: '/media/lawyer3.jpg', name: 'Dhruv Nandgoankar, Adv.', tags: 'Criminal', rating: '4.7★' },
  ];
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Top‑rated lawyers</h2>

        <div id="spotlightCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {lawyers.map((l, i) => (
              <div key={i} className={`carousel-item ${i===0?'active':''}`}>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card text-center border-0 shadow-sm">
                      <img src={l.img} className="card-img-top" alt={l.name} />
                      <div className="card-body">
                        <h5 className="card-title">{l.name}</h5>
                        <p className="card-text text-secondary">{l.tags} | {l.rating}</p>
                        <a href="/book" className="btn btn-primary">Book now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#spotlightCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#spotlightCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
