import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import "./Hero.css";
import landingPageImage from "../../assets/landing-page.svg";

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
      <div className="container hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Empowering Your Business <br />
            with <span className="highlight">Reliable IT Solutions</span>
            <div className="hero-badge">
              <Badge variant="glow">Professional IT Support</Badge>
            </div>
          </h1>

          <p className="hero-description">
            We manage your technology so you can manage your business. From
            network support to security, Stars IT is your partner in digital
            success.
          </p>

          <div className="hero-buttons">
            <Button size="lg" onClick={() => scrollToSection("contact")}>
              💬 Get Support
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("services")}
            >
              Our Services
            </Button>
          </div>
        </div>

        <div className="hero-image">
          <img src={landingPageImage} alt="IT illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
