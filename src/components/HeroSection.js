// src/components/HeroSection.js
export default function HeroSection() {
  return (
    <section
      className="hero text-center py-5"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(30,58,138,.80), rgba(59,130,246,.70)), url('/media/hero-legal.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff'
      }}
    >
      <div className="container py-5">
        <h1 className="display-5 mb-3">Instant Legal Guidance. Expert Lawyers at Your Fingertips.</h1>
        <p className="lead">AI-powered answers and real attorney connections—24/7, anywhere.</p>
        <div className="mt-3">
          <a href="/ask-ai" className="btn btn-primary btn-lg me-2">Ask the AI</a>
          <a href="/find-lawyer" className="btn btn-outline-light btn-lg">Find a Lawyer</a>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-4 mt-4">
          <span><i className="bi bi-shield-lock-fill me-2" />Secure & Confidential</span>
          <span><i className="bi bi-award-fill me-2" />Licensed Lawyers</span>
          <span><i className="bi bi-currency-rupee me-2" />Flat-Rate Fees</span>
        </div>
      </div>
    </section>
  );
}
