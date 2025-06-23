import { useState, useRef } from "react"
import Button from "../ui/Button"
import "./InvestmentForm.css"

const InvestmentForm = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = () => {
    // Show success notification after slight delay to let form post
    setTimeout(() => {
      setShowSuccess(true)
      formRef.current.reset()

      setTimeout(() => setShowSuccess(false), 4000)
    }, 500)
  }

  return (
    <div className="investment-form-wrapper">
      {showSuccess && (
        <div className="form-success-toast">
          Thank you! We'll be in touch shortly.
        </div>
      )}

      <form
        ref={formRef}
        action="https://formsubmit.co/chadley.starkey@gmail.com"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="investment-form"
      >
        {/* Prevent redirect */}
        <input type="hidden" name="_captcha" value="false" />

        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
            required
          />
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
            type="text"
            name="investmentRange"
            placeholder="Investment Amount Range"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <textarea
            name="goals"
            placeholder="Tell us about your investment goals..."
            className="form-textarea"
            rows="4"
          />
        </div>

        <Button type="submit" className="form-submit">
          Submit Inquiry
        </Button>
      </form>

      {/* Hidden iframe to capture the submission without page reload */}
      <iframe title="submitButton" name="hidden_iframe" style={{ display: "none" }}></iframe>
    </div>
  )
}

export default InvestmentForm
