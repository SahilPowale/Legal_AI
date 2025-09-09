import React, { useMemo, useState } from 'react';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';


const SAMPLE = [
  { id: 1, name: 'Jane Doe, Advocate', area: 'Family Law', city: 'Mumbai', exp: 12, fee: 999, rating: 4.9, img: '/media/lawyer1.jpg' },
  { id: 2, name: 'Rahul Mehta, Adv.', area: 'Corporate',   city: 'Bengaluru', exp: 9,  fee: 1499, rating: 4.8, img: '/media/lawyer2.jpg' },
  { id: 3, name: 'Sara Khan, Adv.',   area: 'Criminal',    city: 'Delhi',     exp: 7,  fee: 899,  rating: 4.7, img: '/media/lawyer3.jpg' },
  { id: 4, name: 'Arjun Iyer, Adv.',  area: 'Property',    city: 'Chennai',   exp: 10, fee: 1199, rating: 4.6, img: '/media/lawyer4.jpg' },
];

export default function FindLawyerPage() {
  const [q, setQ] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = useMemo(() => {
    const f = SAMPLE.filter(l =>
      (q ? (l.name + ' ' + l.area + ' ' + l.city).toLowerCase().includes(q.toLowerCase()) : true) &&
      (area ? l.area === area : true) &&
      (city ? l.city === city : true)
    );
    return f;
  }, [q, area, city]);

  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  const go = (p) => {
    const np = Math.min(Math.max(1, p), pages);
    setPage(np);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AppNavbar />
      <main className="py-4">
        <div className="container">
          <h1 className="h3 mb-3">Find a lawyer</h1>

          {/* Intake + filters */}
          <div className="p-3 bg-white rounded-3 shadow-sm mb-4">
            <div className="row g-2 align-items-center">
              <div className="col-12 col-lg-6">
                <input className="form-control" placeholder="Describe your issue (divorce, rent, contract)"
                       value={q} onChange={(e)=>{ setQ(e.target.value); setPage(1); }} />
              </div>
              <div className="col-6 col-lg-2">
                <select className="form-select" value={area} onChange={(e)=>{ setArea(e.target.value); setPage(1); }}>
                  <option value="">All areas</option>
                  <option>Family Law</option>
                  <option>Corporate</option>
                  <option>Criminal</option>
                  <option>Property</option>
                </select>
              </div>
              <div className="col-6 col-lg-2">
                <select className="form-select" value={city} onChange={(e)=>{ setCity(e.target.value); setPage(1); }}>
                  <option value="">All cities</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bengaluru</option>
                  <option>Chennai</option>
                </select>
              </div>
              <div className="col-12 col-lg-2">
                <a className="btn btn-primary w-100" href="#results">Search</a>
              </div>
            </div>
          </div>

          {/* Results */}
          <div id="results" className="row g-4">
            {paged.map(l => (
              <div className="col-12 col-md-6 col-lg-4" key={l.id}>
                <div className="card h-100 border-0 shadow-sm">
                  <img src={l.img} className="card-img-top" alt={l.name} onError={(e)=>{e.currentTarget.src='/media/logo.png';}} />
                  <div className="card-body">
                    <h5 className="card-title mb-1">{l.name}</h5>
                    <div className="text-secondary small mb-2">{l.area} • {l.city}</div>
                    <div className="d-flex justify-content-between text-secondary small">
                      <span><i className="bi bi-briefcase me-1" />{l.exp} yrs</span>
                      <span><i className="bi bi-star-fill text-warning me-1" />{l.rating}</span>
                      <span><i className="bi bi-currency-rupee me-1" />{l.fee}/15m</span>
                    </div>
                  </div>
                  <div className="card-footer bg-white border-0 d-flex gap-2">
                    <a href={`/lawyers/${l.id}`} className="btn btn-outline-primary w-50">View Profile</a>
                    <a href={`/book/${l.id}`} className="btn btn-primary w-50">Book</a>
                  </div>
                </div>
              </div>
            ))}
            {paged.length === 0 && (
              <div className="col-12">
                <div className="alert alert-info">No matches. Try adjusting filters.</div>
              </div>
            )}
          </div>

          {/* Pagination */}
          {pages > 1 && (
            <nav className="mt-4" aria-label="Search results pages">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${page===1?'disabled':''}`}>
                  <button className="page-link" onClick={()=>go(page-1)}>Previous</button>
                </li>
                {Array.from({length: pages}).map((_,i)=>(
                  <li key={i} className={`page-item ${page===i+1?'active':''}`}>
                    <button className="page-link" onClick={()=>go(i+1)}>{i+1}</button>
                  </li>
                ))}
                <li className={`page-item ${page===pages?'disabled':''}`}>
                  <button className="page-link" onClick={()=>go(page+1)}>Next</button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
