import { useEffect, useRef } from "react";
import Card from "../ui/Card";
import "./Services.css";

const Services = () => {
  const sectionRef = useRef(null);

  const services = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="service-icon">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      ),
      title: "Network Setup & Configuration",
      description:
        "Professional local network installation, configuration, and optimization for businesses of all sizes.",
      color: "blue",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="service-icon">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Security Solutions",
      description:
        "Comprehensive cybersecurity implementation, firewall setup, and security audits to protect your data.",
      color: "green",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="service-icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Technical Support",
      description: "24/7 technical support, troubleshooting, and maintenance to keep your systems running smoothly.",
      color: "yellow",
    },
  ];

  useEffect(() => {
    // Optional: Animation or logic for services loading
  }, []);

  return (
    <section id="services" className="section section-alt" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive IT solutions tailored to your business needs</p>
        </div>

        <div className="grid grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <div className={`service-icon-wrapper ${service.color}`}>{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
