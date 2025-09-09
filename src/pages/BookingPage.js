import React, { useState } from 'react';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';

function getLawyerFromURL() {
  const id = (window.location.pathname.split('/').pop() || '1');
  const map = {
    1: { id:1, name:'Jane Doe, Advocate', area:'Family Law', city:'Mumbai', fee: 999, img:'/media/lawyer1.jpg' },
    2: { id:2, name:'Rahul Mehta, Adv.', area:'Corporate', city:'Bengaluru', fee:1499, img:'/media/lawyer2.jpg' },
    3: { id:3, name:'Sara Khan, Adv.', area:'Criminal', city:'Delhi', fee: 899, img:'/media/lawyer3.jpg' },
  };
  return map[id] || map[18];
}

export default function BookingPage() {
  const l = getLawyerFromURL();
  const [slot, setSlot] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const slotsToday = ['5:30 PM','7:00 PM'];
  const slotsTomorrow = ['11:30 AM','4:00 PM'];

  const canContinue = slot && name && email && phone;

  return (
    <>
      <AppNavbar />
      <main className="py-4" style={{ marginTop: '64px' }}>
        <div className="container">
          <h1 className="h4 mb-3">Book a consultation</h1>

          <div className="row gy-4">
            {/* Left: details */}
            <div className="col-12 col-lg-8">
              {/* Lawyer summary */}
              <div className="p-3 bg-white rounded-3 shadow-sm mb-3 d-flex align-items-center">
                <img src={l.img} onError={(e)=>{e.currentTarget.src='/media/logo.png';}}
                     className="rounded me-3" alt={l.name} width="64" height="64" />
                <div>
                  <div className="fw-semibold">{l.name}</div>
                  <div className="text-secondary small">{l.area} • {l.city}</div>
                </div>
              </div>

              {/* Slot picker */}
              <div className="p-3 bg-white rounded-3 shadow-sm mb-3">
                <h5 className="mb-3">Select a time</h5>
                <div className="row g-2">
                  {[...slotsToday.map(s=>({label:`Today ${s}`, value:`today-${s}`})),
                    ...slotsTomorrow.map(s=>({label:`Tomorrow ${s}`, value:`tomorrow-${s}`}))].map((s,i)=>(
                    <div className="col-6 col-md-4" key={i}>
                      <button
                        type="button"
                        className={`btn w-100 ${slot===s.value?'btn-primary':'btn-outline-primary'}`}
                        onClick={()=>setSlot(s.value)}
                      >
                        {s.label}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact form */}
              <div className="p-3 bg-white rounded-3 shadow-sm mb-3">
                <h5 className="mb-3">Contact details</h5>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label">Full name</label>
                    <input className="form-control" value={name} onChange={e=>setName(e.target.value)} />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)} />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label">Phone</label>
                    <input className="form-control" value={phone} onChange={e=>setPhone(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: summary/CTA */}
            <div className="col-12 col-lg-4">
              <div className="p-3 bg-white rounded-3 shadow-sm position-sticky" style={{ top: '84px' }}>
                <h5 className="mb-3">Order summary</h5>
                <div className="d-flex justify-content-between">
                  <span>Consultation fee (15 min)</span>
                  <span className="fw-semibold"><i className="bi bi-currency-rupee me-1" />{l.fee}</span>
                </div>
                <div className="small text-secondary mt-2">
                  Time: {slot ? slot.replace('-', ' ').toUpperCase() : 'Not selected'}
                </div>
                <hr />
                <button className="btn btn-primary w-100" disabled={!canContinue}>
                  Continue to payment
                </button>
                <div className="small text-secondary mt-2">
                  <i className="bi bi-shield-lock me-1" />Payment will be processed securely.
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
