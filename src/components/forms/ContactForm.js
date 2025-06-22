 

import { useState } from "react"
import Button from "../ui/Button"
import "./ContactForm.css"

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

     
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert("Thank you for your inquiry! We'll get back to you within 24 hours.")

     
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="company"
          placeholder="Company Name (Optional)"
          value={formData.company}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <textarea
          name="message"
          placeholder="Describe your IT needs or issues..."
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
          rows="4"
          required
        />
      </div>

      <Button type="submit" className="form-submit" disabled={isSubmitting}>
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        {isSubmitting ? "Submitting..." : "Request Service Call"}
      </Button>
    </form>
  )
}

export default ContactForm
