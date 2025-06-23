import { useState, useRef } from "react"
import Button from "../ui/Button"
import "./ContactForm.css"

const ContactForm = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = () => {
    setTimeout(() => {
      setShowSuccess(true)
      formRef.current.reset()

      setTimeout(() => setShowSuccess(false), 4000)
    }, 500)
  }

  return (
    <div className="contact-form-wrapper">
      {showSuccess && (
        <div className="form-success-toast">
          Thank you! We'll get back to you within 24 hours.
        </div>
      )}

      <form
        ref={formRef}
        action="https://formsubmit.co/chadley.starkey@gmail.com"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <input type="hidden" name="_captcha" value="false" />

        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="company"
            placeholder="Company Name (Optional)"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Describe your IT needs or issues..."
            className="form-textarea"
            rows="4"
            required
          />
        </div>

        <Button type="submit" className="form-submit">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Request Service Call
        </Button>
      </form>

      {/* Hidden iframe to prevent page reload */}
      <iframe title="submitBtn" name="hidden_iframe" style={{ display: "none" }}></iframe>
    </div>
  )
}

export default ContactForm
