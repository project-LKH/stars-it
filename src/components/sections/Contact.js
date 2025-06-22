import { useEffect, useRef } from "react";
import Card from "../ui/Card";
import ContactForm from "../forms/ContactForm";
import "./Contact.css";

const Contact = () => {
  const sectionRef = useRef(null);

  const contactInfo = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="contact-icon">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      value: "(555) 123-4567",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="contact-icon">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      value: "support@starsit.com",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="contact-icon">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Service Area",
      value: "Local and surrounding areas",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animation logic can be added here if necessary

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Get IT Support Today</h2>
          <p>Ready to solve your IT challenges? Contact Stars IT for professional support and solutions.</p>
        </div>

        <div className="contact-grid">
          <Card className="contact-card">
            <h3 className="contact-title">Contact Information</h3>
            <p className="contact-subtitle">Reach out to us directly for immediate assistance</p>

            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon-wrapper">{info.icon}</div>
                  <div className="contact-details">
                    <h4 className="contact-detail-title">{info.title}</h4>
                    <p className="contact-detail-value">{info.value}</p>
                  </div>
                </div>
              ))}

              <div className="contact-owner">
                <h4 className="contact-detail-title">Owner & Lead Technician</h4>
                <p className="contact-detail-value">Chadley Starkey</p>
              </div>
            </div>
          </Card>

          <Card className="contact-card">
            <h3 className="contact-title">Request Service</h3>
            <p className="contact-subtitle">Tell us about your IT needs and we'll get back to you quickly</p>
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
