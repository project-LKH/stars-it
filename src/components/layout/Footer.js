import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <svg className="star-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>Stars IT</span>
          </div>
          <div className="footer-text">
            <p>© {currentYear} Stars IT. All rights reserved.</p>
            <p className="footer-subtitle">Professional IT Services by Chadley Starkey</p>
            <p className="footer-credit">Site created by Liam Henry</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
