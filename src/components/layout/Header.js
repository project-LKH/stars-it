import { useState, useEffect } from "react";
import Button from "../ui/Button";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <svg className="star-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>Stars IT</span>
          </div>

          <nav className="nav md-flex">
            <button
              onClick={() => scrollToSection("services")}
              className="nav-link"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="nav-link"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("investment")}
              className="nav-link"
            >
              Investment
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
            </button>
          </nav>

          <div className="header-actions">
            <Button
              onClick={() => scrollToSection("contact")}
              className="sm-hidden"
            >
              Get Quote
            </Button>

           <button
  className="mobile-menu-btn md-hidden"
  onClick={toggleMobileMenu}
  aria-label="Toggle menu"
>
  <svg
    width="28"
    height="20"
    viewBox="0 0 28 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`burger-icon ${isMobileMenuOpen ? 'open' : ''}`}
  >
    <rect className="line top" x="2" y="3" width="24" height="2" rx="1" />
    <rect className="line middle" x="2" y="9" width="24" height="2" rx="1" />
    <rect className="line bottom" x="6" y="15" width="18" height="2" rx="1" />
  </svg>
</button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <nav className="mobile-nav">
            <button
              onClick={() => scrollToSection("services")}
              className="mobile-nav-link"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="mobile-nav-link"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("investment")}
              className="mobile-nav-link"
            >
              Investment
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="mobile-nav-link"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="mt-4">
              Get Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;