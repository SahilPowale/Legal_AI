// src/components/Navbar.js
import React from 'react';

export default function AppNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-semibold" href="/">LegalBridge AI</a>

        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#mainNav"
          aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="/find-lawyer">Find a Lawyer</a></li>
            <li className="nav-item"><a className="nav-link" href="/ask-ai">Ask the AI</a></li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#areas" id="areasDropdown"
                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Practice Areas
              </a>
              <ul className="dropdown-menu" aria-labelledby="areasDropdown">
                <li><a className="dropdown-item" href="/areas/family">Family Law</a></li>
                <li><a className="dropdown-item" href="/areas/business">Business Law</a></li>
                <li><a className="dropdown-item" href="/areas/property">Property</a></li>
                <li><a className="dropdown-item" href="/areas/employment">Employment</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="/resources">Resources</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
          </ul>

          <div className="d-none d-lg-flex">
            <a href="/login" className="btn btn-outline-primary me-2">Log In</a>
            <a href="/signup" className="btn btn-primary">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
