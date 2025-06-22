import { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      title: "Network Setup",
      description: "Fast, secure installation and configuration of local networks.",
      color: "blue",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    },
    {
      title: "Security Solutions",
      description: "Firewalls, audits, and proactive protection against threats.",
      color: "green",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Tech Support",
      description: "Ongoing system support, maintenance and troubleshooting.",
      color: "yellow",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  // Detect if mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Duplicate only on mobile
  const servicesToRender = isMobile ? [...services, ...services] : services;

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Simple, smart IT solutions that just work.</p>
        </div>

        <div className="scroll-carousel-wrapper">
          <div className={`services-scroll ${isMobile ? "animate-scroll" : ""}`}>
            {servicesToRender.map((service, index) => (
              <div className="service-card" key={index}>
                <div className={`icon-circle ${service.color}`}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
