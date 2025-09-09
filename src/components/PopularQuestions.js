// src/components/PopularQuestions.js
import React from 'react';

export default function PopularQuestions() {
  const qs = [
    'What are my rights as a tenant?',
    'How do I register a company?',
    'How is alimony decided?',
    'What to do after a road accident?',
  ];
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-3 text-center">Popular questions</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="list-group">
              {qs.map((q,i)=>(
                <a key={i} href="/ask-ai" className="list-group-item list-group-item-action">
                  {q}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
