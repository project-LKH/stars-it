import { useRef } from "react";
import Card from "../ui/Card";
import "./Pricing.css";

const Pricing = () => {
  const sectionRef = useRef(null);

  const pricingPlans = [
    {
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="pricing-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Call Out Fee",
      description: "One-time fee for on-site visits",
      price: 400,
      period: "Per site visit",
      color: "blue",
      features: [
        "Initial assessment",
        "Problem diagnosis",
        "Service recommendation",
      ],
    },
    {
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="pricing-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Hourly Rate",
      description: "Professional service rate",
      price: 500,
      period: "Per hour",
      color: "green",
      features: [
        "Expert technical work",
        "Installation & setup",
        "Ongoing support",
      ],
    },
  ];

  return (
    <section id="pricing" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Transparent Pricing</h2>
          <p>Simple, straightforward pricing with no hidden fees</p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="pricing-card text-center">
              <div className={`pricing-icon-wrapper ${plan.color}`}>
                {plan.icon}
              </div>
              <h3 className="pricing-title">{plan.title}</h3>
              <p className="pricing-description">{plan.description}</p>
              <div className={`pricing-price`}>R{plan.price}</div>
              <p className="pricing-period">{plan.period}</p>
              <ul className="pricing-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="pricing-feature">
                    <svg
                      className="check-icon"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
