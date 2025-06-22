import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import "./Hero.css";

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
     
    setFadeIn(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`hero ${fadeIn ? "fade-in" : ""}`}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Badge>Professional IT Support</Badge>
          </div>

          <h1 className="hero-title">Expert IT Solutions for Your Business</h1>

          <p className="hero-description">
            Stars IT provides comprehensive network setup, IT support, and technical solutions. Led by Chadley Starkey,
            we deliver reliable technology services to keep your business running smoothly.
          </p>

          <div className="hero-buttons">
            <Button size="lg" onClick={() => scrollToSection("contact")}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call for Support
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("services")}>
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
