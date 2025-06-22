import "./Button.css"

const Button = ({ children, variant = "primary", size = "md", className = "", onClick, ...props }) => {
  const handleClick = (e) => {
    // Ripple effect
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ripple = document.createElement("span")
    ripple.className = "ripple"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"

    button.appendChild(ripple)

    // No animation using animejs, simple ripple effect
    setTimeout(() => {
      ripple.remove()
    }, 600)

    // Button press effect (removed animejs, using CSS for scaling)
    button.classList.add("pressed")

    // Trigger click callback
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button className={`btn btn-${variant} btn-${size} ${className}`} onClick={handleClick} {...props}>
      {children}
    </button>
  )
}

export default Button
