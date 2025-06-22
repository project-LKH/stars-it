 

import { useState } from "react"
import Button from "../ui/Button"
import "./InvestmentForm.css"

const InvestmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    investmentRange: "",
    goals: "",
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

    alert("Thank you for your investment inquiry! We'll contact you soon to discuss opportunities.")

     
    setFormData({
      name: "",
      email: "",
      investmentRange: "",
      goals: "",
    })
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="investment-form">
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          required
        />
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
          type="text"
          name="investmentRange"
          placeholder="Investment Amount Range"
          value={formData.investmentRange}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <textarea
          name="goals"
          placeholder="Tell us about your investment goals..."
          value={formData.goals}
          onChange={handleChange}
          className="form-textarea"
          rows="4"
        />
      </div>

      <Button type="submit" className="form-submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  )
}

export default InvestmentForm
