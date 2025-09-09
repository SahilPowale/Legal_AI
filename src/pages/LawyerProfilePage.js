import React from 'react';

export default function LawyerProfilePage() {
  // replace with real data via params later
  const l = {
    name: 'Jane , Advocate',
    area: 'Family Law',
    city: 'Mumbai',
    experience: 12,
    rating: 4.9,
    fee: 999,
    img: '/media/lawyer1.jpg',
    bio: 'Advocate Jane Doe specializes in matrimonial and custody matters with 12+ years before Bombay High Court.',
    highlights: ['300+ consultations', '80+ mediations', 'Panel lawyer – Family Court'],
    languages: ['English', 'Hindi', 'Marathi'],
  };

  return (
    <main className="py-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={l.img} alt={l.name} className="img-fluid h-100 w-100 object-fit-cover rounded-start" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title mb-1">{l.name}</h3>
                    <div className="text-secondary mb-2">{l.area} • {l.city}</div>
                    <div className="d-flex gap-3 small text-secondary mb-3">
                      <span><i className="bi bi-briefcase me-1" />{l.experience} yrs</span>
                      <span><i className="bi bi-star-fill text-warning me-1" />{l.rating}</span>
                      <span><i className="bi bi-currency-rupee me-1" />{l.fee}/15m</span>
                    </div>
                    <p className="mb-3">{l.bio}</p>
                    <ul className="list-unstyled mb-0">
                      {l.highlights.map((h,i)=>(<li key={i} className="mb-1"><i className="bi bi-check2 text-success me-2" />{h}</li>))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews placeholder */}
            <div className="mt-4">
              <h4>Client reviews</h4>
              <div className="p-3 bg-white rounded-3 shadow-sm">
                <p className="text-secondary mb-0">Reviews coming soon…</p>
              </div>
            </div>
          </div>

          {/* Sidebar booking card */}
          <div className="col-12 col-lg-4">
            <div className="p-3 bg-white rounded-3 shadow-sm">
              <h5 className="mb-3">Book a consultation</h5>
              <div className="mb-2 small text-secondary">Select a slot:</div>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-primary">Today 5:30 PM</button>
                <button className="btn btn-outline-primary">Today 7:00 PM</button>
                <button className="btn btn-outline-primary">Tomorrow 11:30 AM</button>
              </div>
              <hr />
              <a href="/checkout" className="btn btn-primary w-100">Continue to payment</a>
              <div className="small text-secondary mt-2"><i className="bi bi-shield-lock me-1" />Secure & private</div>
              <div className="small text-secondary"><i className="bi bi-translate me-1" />Languages: {l.languages.join(', ')}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
