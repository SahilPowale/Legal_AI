// src/components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-5 pt-5 bg-dark text-light">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-4">
            <h5 className="fw-semibold">LegalBridge AI</h5>
            <p className="text-secondary mb-2">Instant legal guidance + real lawyers.</p>
            <div className="d-flex gap-3 fs-5">
              <a className="text-light" href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
              <a className="text-light" href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a className="text-light" href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="text-uppercase text-secondary">Product</h6>
            <ul className="list-unstyled">
              <li><a className="link-light text-decoration-none" href="/find-lawyer">Find a Lawyer</a></li>
              <li><a className="link-light text-decoration-none" href="/ask-ai">Ask the AI</a></li>
              <li><a className="link-light text-decoration-none" href="/resources">Resources</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="text-uppercase text-secondary">Company</h6>
            <ul className="list-unstyled">
              <li><a className="link-light text-decoration-none" href="/about">About</a></li>
              <li><a className="link-light text-decoration-none" href="/contact">Contact</a></li>
              <li><a className="link-light text-decoration-none" href="/careers">Careers</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h6 className="text-uppercase text-secondary">Stay Updated</h6>
            <form className="d-flex gap-2">
              <input className="form-control" type="email" placeholder="Email address" />
              <button className="btn btn-warning" type="submit">Subscribe</button>
            </form>
            <p className="small text-secondary mt-2">By subscribing, agrees to our Privacy Policy.</p>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pb-4">
          <div className="small text-secondary">© 2025 LegalBridge AI. All rights reserved.</div>
          <div className="d-flex gap-3 small">
            <a className="link-secondary text-decoration-none" href="/privacy">Privacy Policy</a>
            <a className="link-secondary text-decoration-none" href="/terms">Terms</a>
            <a className="link-secondary text-decoration-none" href="/cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
