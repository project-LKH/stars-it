import { useEffect, useRef } from "react";
import Card from "../ui/Card";
import InvestmentForm from "../forms/InvestmentForm";
import "./Investment.css";

const Investment = () => {
  const sectionRef = useRef(null);

  const benefits = [
    "Growing demand for IT services in local markets",
    "Established client base and reputation",
    "Experienced leadership under Chadley Starkey",
    "Scalable business model with recurring revenue",
  ];

  useEffect(() => {
     
  }, []);

  return (
    <section id="investment" className="section section-alt" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <svg
            className="trending-icon icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width="64"
            height="64"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <h2>Investment Opportunities</h2>
          <p>Join us in expanding Stars IT's reach and capabilities in the growing IT services market</p>
        </div>

        <div className="investment-grid">
          <Card className="investment-card">
            <h3 className="investment-title">
              <svg className="users-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Why Invest in Stars IT?
            </h3>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <svg className="check-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="investment-card">
            <h3 className="investment-form-title">Investment Inquiry</h3>
            <p className="investment-form-description">Get in touch to learn more about investment opportunities</p>
            <InvestmentForm />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Investment;
